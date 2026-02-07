import type { Metadata } from "next";
import { Open_Sans, Roboto, Roboto_Flex } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const openSans = Open_Sans({ 
  subsets: ["latin"], 
  variable: "--font-open-sans",
  weight: ["400", "500", "600", "700"]
});

const roboto = Roboto({ 
  subsets: ["latin"], 
  variable: "--font-roboto",
  weight: ["400", "500", "700", "900"]
});

const robotoFlex = Roboto_Flex({ 
  subsets: ["latin"], 
  variable: "--font-roboto-flex"
});

export const metadata: Metadata = {
  title: "SophosTC | Software Solutions for Finance, Payments & Fintech",
  description: "Your premier partner for cutting-edge software solutions in finance, payments, and fintech. UAE-based software development company delivering innovative solutions.",
  keywords: "fintech, software development, payment gateway, finance technology, UAE, consulting",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${openSans.variable} ${roboto.variable} ${robotoFlex.variable} antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
