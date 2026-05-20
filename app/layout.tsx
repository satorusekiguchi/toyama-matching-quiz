import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";

const notoSansJp = Noto_Sans_JP({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
});

export const metadata: Metadata = {
  title: "富山移住マッチング診断",
  description:
    "エンタメ感覚で10問に答えるだけ。自然・海鮮・子育て・住環境など、富山移住の魅力を楽しく発見できる診断です。",
  metadataBase: new URL("https://toyama-one.vercel.app"),
  openGraph: {
    title: "富山移住マッチング診断",
    description:
      "クスッと笑える10問で、あなたと富山の相性をチェック。結果をSNSでシェアしよう。",
    images: [
      {
        url: "/api/og/native",
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "富山移住マッチング診断",
    description:
      "クスッと笑える10問で、あなたと富山の相性をチェック。結果をSNSでシェアしよう。",
    images: ["/api/og/native"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={`${notoSansJp.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
