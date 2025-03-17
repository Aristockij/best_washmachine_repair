"use client";
import { useEffect } from "react";

function GoogleMetricCounter() {
  useEffect(() => {
    console.log("Google Analytics ID:", process.env.NEXT_PUBLIC_GM_ID);
    if (!process.env.NEXT_PUBLIC_GM_ID) return;

    const script1 = document.createElement("script");
    script1.src = `https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GM_ID}`;
    script1.async = true;
    document.head.appendChild(script1);

    const script2 = document.createElement("script");
    script2.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${process.env.NEXT_PUBLIC_GM_ID}');
    `;
    document.head.appendChild(script2);
  }, []);

  return null;
}

export default GoogleMetricCounter;
