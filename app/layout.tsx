import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "T-SSA | 陸上競技クラブ",
  description:
    "T-SSAは、小学4年生から中学3年生を対象に、挑戦する心と健やかな成長を応援する陸上競技クラブです。",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
