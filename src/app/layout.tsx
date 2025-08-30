import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Movira – Create Cinematic Videos with AI",
  description: "Movira is your AI-powered video generation platform. Turn scripts into cinematic content in seconds.",
  icons: {
    icon: "/favicon.ico", // favicon support
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
