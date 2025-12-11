"use client";
import { Application, Container, Geometry, Mesh, Shader } from "pixi.js";
import { useEffect, useRef } from "react";
import s from "./index.module.scss";

const vertex = `
    in vec2 aPosition;

    uniform mat3 uProjectionMatrix;
    uniform mat3 uWorldTransformMatrix;
    uniform mat3 uTransformMatrix;

    void main() {
        mat3 mvp = uProjectionMatrix * uWorldTransformMatrix * uTransformMatrix;
        gl_Position = vec4((mvp * vec3(aPosition, 1.0)).xy, 0.0, 1.0);
    }
`;

const fragment = `
precision mediump float;

uniform vec3  iResolution;
uniform float iTime;
uniform sampler2D iChannel0;

float hash3(vec3 p) {
    return fract(sin(1e3*dot(p, vec3(1.0,57.0,-13.7))) * 4375.5453);
}

float noise3(vec3 x) {
    vec3 p = floor(x), f = fract(x);

    f = f * f * (3.0 - 2.0 * f);

    return mix(
        mix(
            mix(hash3(p + vec3(0.0,0.0,0.0)), hash3(p + vec3(1.0,0.0,0.0)), f.x),
            mix(hash3(p + vec3(0.0,1.0,0.0)), hash3(p + vec3(1.0,1.0,0.0)), f.x),
            f.y
        ),
        mix(
            mix(hash3(p + vec3(0.0,0.0,1.0)), hash3(p + vec3(1.0,0.0,1.0)), f.x),
            mix(hash3(p + vec3(0.0,1.0,1.0)), hash3(p + vec3(1.0,1.0,1.0)), f.x),
            f.y
        ),
        f.z
    );
}

#define noise(x) (noise3(x)+noise3(x+11.5)) / 2.0

void mainImage(out vec4 O, vec2 U)
{ 
    vec2 R = iResolution.xy;
    float n = noise(vec3(U * 8.0 / R.y, 0.1 * iTime));
    float v = sin(6.28318530718 * 10.0 * n);
    float t = iTime;
    
    float edge = 0.2;
    v = smoothstep(0.1 + edge, 0.1 - edge, abs(v));

    vec2 uv = (U + vec2(1.0, sin(t))) / R;
    vec4 tex = texture2D(iChannel0, uv);

    O = mix(
        exp(-33.0 / R.y) * tex,
        0.5 + 0.5 * sin(12.0 * n + vec4(0.1, 0.0, 0.0, -0.1)),
        v
    );
}

void main() {
    vec4 color;
    mainImage(color, gl_FragCoord.xy);
    gl_FragColor = color;
}
`;

const Index = () => {
  const ref = useRef(null);

  useEffect(() => {
    (async () => {
      const app = new Application();
      await app.init({
        background: "#000",
        preference: "webgl",
      });

      if (ref.current) ref.current.appendChild(app.canvas);
      const container = new Container();
      app.stage.width = ref.current.scrollWidth;
      app.stage.height = ref.current.scrollHeight;

      app.stage.addChild(container);

      const quadGeometry = new Geometry({
        attributes: {
          aPosition: [
            -100,
            -100, // x, y
            100,
            -100, // x, y
            100,
            100, // x, y,
            -100,
            100, // x, y,
          ],
          aUV: [0, 0, 1, 0, 1, 1, 0, 1],
        },
        indexBuffer: [0, 1, 2, 0, 2, 3],
      });

      const shader = Shader.from({
        gl: {
          vertex,
          fragment,
        },
        resources: {
          shaderToyUniforms: {
            iResolution: { value: [640, 360, 1], type: "vec3<f32>" },
            iTime: { value: 0, type: "f32" },
          },
        },
      });

      const quad = new Mesh({
        geometry: quadGeometry,
        shader,
      });

      quad.width = app.screen.width;
      quad.height = app.screen.height;
      quad.x = app.screen.width / 2;
      quad.y = app.screen.height / 2;

      app.stage.addChild(quad);

      app.ticker.add(() => {
        shader.resources.shaderToyUniforms.uniforms.iTime +=
          app.ticker.elapsedMS / 1000;
      });
    })();
  }, [ref.current]);
  return <div ref={ref} className={s.wrap} />;
};

export default Index;
