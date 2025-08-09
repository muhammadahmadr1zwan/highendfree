import type { Metadata, Viewport } from "next";

export const metadata: Metadata = {
  title: "HighEnd Sellers",
  description: "Seller portal for listing products and managing claims.",
  icons: {
    icon: [{ url: "/sellers-favicon.svg", type: "image/svg+xml" }],
    apple: [{ url: "/sellers-favicon.svg", type: "image/svg+xml" }],
    shortcut: "/sellers-favicon.svg",
  },
};

export const viewport: Viewport = {
  themeColor: "#7C3AED",
};

export default function SellersLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="icon" href="/sellers-favicon.svg" type="image/svg+xml" />
        <meta name="theme-color" content="#7C3AED" />
      </head>
      <body>{children}</body>
    </html>
  );
} 