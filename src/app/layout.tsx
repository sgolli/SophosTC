import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "Sophos Technology Consultancy LLC |",
    template: "%s | Sophos Technology Consultancy LLC"
  },
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
      <body>
        <Header />
        <div className="r-spacer" style={{ height: '94px' }} />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
