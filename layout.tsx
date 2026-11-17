import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CHIKAYA AI — Smart Customer Experience",
  description:
    "منصة ذكية لتدبير شكايات الزبناء وخدمة العملاء بالدارجة والفرنسية والإنجليزية."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}