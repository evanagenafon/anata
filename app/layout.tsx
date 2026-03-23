import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Noto_Sans_JP, Noto_Serif_JP } from "next/font/google";
import "./globals.css";

const notoSans = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
  variable: "--font-noto-sans-jp",
});

const notoSerif = Noto_Serif_JP({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
  variable: "--font-noto-serif-jp",
});

export const metadata: Metadata = {
  title: "あなたの鑑定士｜関目の買取専門店",
  description:
    "大阪市城東区成育の買取専門店「あなたの鑑定士 関目店」。ヴィトン・シャネル・エルメス・ロレックスを中心に、査定無料・相談無料・手数料0円で丁寧にご案内します。",
  alternates: {
    canonical: "https://anata-no-kanteishi.com",
  },
  openGraph: {
    title: "あなたの鑑定士｜関目の買取専門店",
    description:
      "大阪市城東区成育の買取専門店「あなたの鑑定士 関目店」。ヴィトン・シャネル・エルメス・ロレックスを中心に、査定無料・相談無料・手数料0円で丁寧にご案内します。",
    url: "https://anata-no-kanteishi.com",
    siteName: "あなたの鑑定士",
    locale: "ja_JP",
    type: "website",
    images: [
      {
        url: "/img/ogp.jpg",
        width: 1200,
        height: 630,
        alt: "あなたの鑑定士 関目店",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "あなたの鑑定士｜関目の買取専門店",
    description:
      "大阪市城東区成育の買取専門店「あなたの鑑定士 関目店」。ヴィトン・シャネル・エルメス・ロレックスを中心に、査定無料・相談無料・手数料0円で丁寧にご案内します。",
    images: ["/img/ogp.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html
      lang="ja"
      className={`${notoSans.variable} ${notoSerif.variable} h-full antialiased`}
    >
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/remixicon@3.5.0/fonts/remixicon.css"
        />
      </head>
      <body className="min-h-full scroll-smooth font-sans flex flex-col">
        {children}
      </body>
    </html>
  );
}