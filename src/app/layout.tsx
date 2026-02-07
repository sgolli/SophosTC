import type { Metadata } from "next";
import { Open_Sans, Roboto, Roboto_Flex, Inter } from "next/font/google";
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
  variable: "--font-roboto-flex",
  weight: ["600"]
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500"]
});

export const metadata: Metadata = {
  title: "Sophos Technology Consultancy LLC |",
  description: "Your premier partner for cutting-edge software solutions in finance, payments, and fintech.",
  keywords: "fintech, software development, payment gateway, finance technology, UAE, consulting",
  openGraph: {
    title: "Sophos Technology Consultancy LLC",
    description: "Your premier partner for cutting-edge software solutions in finance, payments, and fintech.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${openSans.variable} ${roboto.variable} ${robotoFlex.variable} ${inter.variable}`}>
        <Header />
        <main style={{ paddingTop: '94px' }}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
