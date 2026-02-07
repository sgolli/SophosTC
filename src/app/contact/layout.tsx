import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Sophos Technology Consultancy LLC",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
