import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
// We import the CLIENT component here
import LayoutShell from "../components/LayoutShell";

const inter = Inter({ subsets: ["latin"] });

// This works because this file is a Server Component (no "use client")
export const metadata: Metadata = {
  title: "VDC Admin",
  description: "Admin Dashboard",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* We wrap the content in our Client Component to handle state */}
        <LayoutShell>
          {children}
        </LayoutShell>
      </body>
    </html>
  );
}
