import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Analytics } from "@vercel/analytics/next";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://cybkartglobal.com'),
  title: "White-Label Web Development for Marketing Agencies | CybKart Global",
  description: "CybKart Global is a white-label web development & AI-automation partner for marketing agencies. You keep the client — we build, host, and maintain under your brand. Live sites in 3-5 days.",
  keywords: "white-label web development, AI automation for agencies, agency web development partner, CybKart Global",
  authors: [{ name: "CybKart Global" }],
  openGraph: {
    title: "White-Label Web Development for Marketing Agencies | CybKart Global",
    description: "CybKart Global is a white-label web development & AI-automation partner for marketing agencies. You keep the client — we build, host, and maintain under your brand. Live sites in 3-5 days.",
    url: "https://cybkartglobal.com",
    siteName: "CybKart Global",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "White-Label Web Development for Marketing Agencies | CybKart Global",
    description: "CybKart Global is a white-label web development & AI-automation partner for marketing agencies. You keep the client — we build, host, and maintain under your brand. Live sites in 3-5 days.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">

      <body className={`${inter.variable} antialiased`}>
        {/* Google Ads Tag */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-17893861115"
          strategy="afterInteractive"
        />
        <Script id="google-ads-tag" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'AW-17893861115');
          `}
        </Script>

        {/* Tawk.to Script */}
        <Script id="tawk-to-script" strategy="lazyOnload">
          {`
            var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
            (function(){
            var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
            s1.async=true;
            s1.src='https://embed.tawk.to/69874aaca1f1521c3941dd77/1jgs7ndrl';
            s1.charset='UTF-8';
            s1.setAttribute('crossorigin','*');
            s0.parentNode.insertBefore(s1,s0);
            })();
          `}
        </Script>

        <Header />
        <main className="pt-20">
          {children}
        </main>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
