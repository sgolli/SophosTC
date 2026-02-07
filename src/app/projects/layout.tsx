import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects | Sophos Technology Consultancy LLC",
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
