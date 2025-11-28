import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Hope Foundation - Empowering Communities, Changing Lives",
  description: "Creating sustainable change through education, healthcare, and environmental conservation. Join us in building a better tomorrow.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
