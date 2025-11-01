import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "@/style/main.scss";
import "swiper/css";
import "swiper/css/pagination";
import YandexMetricCounter from "@/metrics/YandexMetricCounter";
import YaMetric from "@/metrics/YaMetric";
import GoogleMetricCounter from "@/metrics/GoogleMetricCounter";
import CookieAccept from "@/components/CookieAccept";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ремонт стиральных машин",
  description: "Ваш мастер по ремонту стиральных машин в Кирове",
  openGraph: {
    title: "Ремонт стиральных машин",
    description: "Оставьте заявку и мастер перезвонит вам в течении 30 минут",
    images: "https://master-stirka.ru/assets/og.jpeg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <meta
        property='og:image'
        content='https://master-stirka.ru/assets/og.jpeg'
      />
      <head>
        <YandexMetricCounter />
        <YaMetric />
        <GoogleMetricCounter />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <CookieAccept />
      </body>
    </html>
  );
}
