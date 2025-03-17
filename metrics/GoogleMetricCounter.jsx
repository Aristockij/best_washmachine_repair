import { GoogleTagManager } from "@next/third-parties/google";

function GoogleMetricCounter() {
  return (
    <>
      <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GM_ID} />
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GM_ID}`}
        strategy='afterInteractive'
      />
      <Script id='google-analytics' strategy='afterInteractive'>
        {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', ${process.env.NEXT_PUBLIC_GM_ID});
        `}
      </Script>
    </>
  );
}

export default GoogleMetricCounter;
