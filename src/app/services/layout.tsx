import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services | Sophos Technology Consultancy LLC",
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
