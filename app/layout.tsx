import type { Metadata } from "next";
import { Hind_Siliguri, Anek_Bangla } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import LocoScroll from "./components/LocoScroll";
import "locomotive-scroll/dist/locomotive-scroll.css";

const hindSiliguri = Hind_Siliguri({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["bengali", "latin"],
  variable: "--font-hind",
});

const anekBangla = Anek_Bangla({
  weight: ["300", "400", "500", "600", "700", "800"],
  subsets: ["bengali", "latin"],
  variable: "--font-anek",
});

export const metadata: Metadata = {
  title: "টেইলরপয়েন্ট (TailorPoint) - টেইলর ও টেইলরিং দোকানের জন্য এআই-পাওয়ার্ড সহজ সফটওয়্যার",
  description: "টেইলর দোকানের সব কাজ হবে এখন মোবাইলেই! বানানোর আগেই পোশাক কেমন দেখাবে তা দেখা, হোয়াটসঅ্যাপে মাপ পাঠানো, বিল আর পেমেন্ট লিংক বানানোর অল-ইন-ওয়ান সহজ অ্যাপ। আপনার খাটুনি হবে আদ্দেক!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="bn"
      className={`${hindSiliguri.variable} ${anekBangla.variable} h-full antialiased scroll-smooth`}
      suppressHydrationWarning
    >
      <head>
        <Script
          id="theme-loader"
          strategy="beforeInteractive"
        >
          {`
            try {
              var theme = localStorage.getItem('tailorpoint-theme') || 'system';
              var root = document.documentElement;
              if (theme === 'light') {
                root.classList.add('light');
                root.classList.remove('dark');
              } else if (theme === 'dark') {
                root.classList.add('dark');
                root.classList.remove('light');
              } else {
                root.classList.remove('light');
                root.classList.remove('dark');
              }
            } catch (e) {}
          `}
        </Script>
      </head>
      <body className="min-h-full flex flex-col font-sans bg-zinc-950 text-zinc-100">
        <LocoScroll>{children}</LocoScroll>
      </body>
    </html>
  );
}
