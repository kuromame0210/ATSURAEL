import type { Metadata } from "next";
import { Noto_Serif_JP, Noto_Sans_JP, Roboto_Mono } from "next/font/google";
import "./globals.css";

const notoSerifJP = Noto_Serif_JP({
  variable: "--font-noto-serif-jp",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const notoSansJP = Noto_Sans_JP({
  variable: "--font-noto-sans-jp",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "ATSURAEL - セミオーダー指輪",
  description: "職人が一つひとつ丁寧に仕上げる、あなただけの特別な指輪。ATSURAELのセミオーダー指輪で想いを形に。",
  keywords: "指輪, セミオーダー, カスタマイズ, ジュエリー, ATSURAEL, オーダーメイド",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`${notoSansJP.variable} ${notoSerifJP.variable} ${robotoMono.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
