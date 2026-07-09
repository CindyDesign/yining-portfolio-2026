import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://yining.design"),
  title: {
    default: "Ningning — UX Designer",
    template: "%s · Ningning",
  },
  description:
    "Ningning is a thoughtful UX designer creating intuitive and visually pleasing web and mobile experiences.",
  openGraph: {
    title: "Ningning — UX Designer",
    description:
      "Creating intuitive and visually pleasing web and mobile experiences.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={inter.variable}>
      <body>{children}</body>
    </html>
  );
}
