import "./globals.css";
import { Inter } from "next/font/google";
import { profile } from "@/data/portfolio";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: `${profile.name} | ${profile.role}`,
  description: profile.tagline,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
