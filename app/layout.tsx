import type { Metadata } from "next";
import { Vazirmatn } from "next/font/google";
import Navbar from "./components/shared/Navbar";
import "./globals.css";
const vazirmatn = Vazirmatn({ subsets: ["arabic"] });
export const metadata: Metadata = {
  title: "بازرگانی تبلیغات",
  description: "توسعه مدرن",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa">
      <body className={`${vazirmatn.className} antialiased`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
