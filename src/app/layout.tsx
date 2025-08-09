import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "High End Free",
  description: "Earn full Amazon refunds for verified 5-star reviews.",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://highendfree.netlify.app"),
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "16x16", type: "image/x-icon" },
      { url: "/favicon.ico", sizes: "32x32", type: "image/x-icon" },
      { url: "/favicon.ico", sizes: "any", type: "image/x-icon" },
    ],
    apple: [{ url: "/favicon.svg", type: "image/svg+xml" }],
    shortcut: "/favicon.ico",
  },
  openGraph: {
    title: "High End Free — Amazon Refunds for Reviews",
    description:
      "Earn full Amazon refunds for verified 5-star reviews with a simple 8-step process.",
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
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="icon" href="/favicon.ico" sizes="16x16" type="image/x-icon" />
        <link rel="icon" href="/favicon.ico" sizes="32x32" type="image/x-icon" />
        <link rel="alternate icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="apple-touch-icon" href="/favicon.svg" />
        <meta name="theme-color" content="#F59E0B" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
} 