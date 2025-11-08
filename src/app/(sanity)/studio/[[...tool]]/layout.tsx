import type { Metadata } from "next";
import type React from "react";

export const metadata: Metadata = {
  title: "NextGen Swayam Sanity Studio",
  description: "Swayam NextGen Portfolio Sanity Studio",
};

const Layout = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>;
};

export default Layout;
