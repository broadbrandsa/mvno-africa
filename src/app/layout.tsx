import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title:
    "MVNO Nation Africa 2026 · Cape Town · 9–10 June — Request your invite",
  description:
    "Two days in Cape Town with the operators, investors and platform leaders building Africa's MVNO ecosystem. 9–10 June 2026. Invitation only — request yours from DSG.",
  metadataBase: new URL("https://mvno-nation-africa.vercel.app"),
  openGraph: {
    title: "MVNO Nation Africa 2026 · Cape Town · 9–10 June",
    description:
      "Africa is going online. The MVNOs that build for this opportunity will own the next decade. Join us in Cape Town this June.",
    type: "website",
  },
  robots: {
    index: false,
    follow: false,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable}`}>
      <body className="min-h-screen bg-bg text-fg">{children}</body>
    </html>
  );
}
