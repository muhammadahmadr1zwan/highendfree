import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "High End Free",
  description: "Earn full Amazon refunds for verified 5-star reviews.",
  icons: {
    icon: "/logo.svg",
    apple: "/logo.svg",
  },
  openGraph: {
    title: "High End Free — Amazon Refunds for Reviews",
    description: "Earn full Amazon refunds for verified 5-star reviews with a simple 8-step process.",
    images: ["/logo.svg"],
  },
  twitter: {
    card: "summary_large_image",
    site: "@highendfree",
    images: ["/logo.svg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>{children}</body>
    </html>
  );
} 