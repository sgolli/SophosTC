import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | Sophos Technology Consultancy LLC",
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
