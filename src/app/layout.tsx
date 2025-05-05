// app/layout.tsx
import type { Metadata } from "next";
import { Inria_Serif, Heebo } from "next/font/google";
import "./globals.css";

const inriaSerif = Inria_Serif({
  variable: "--font-inria-serif",
  weight: ["300", "400", "700"],
  subsets: ["latin"],
});

const heebo = Heebo({
  variable: "--font-heebo",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Garabato: Historias Olvidadas",
  description: "Garabato Cojedes",
  icons: {
    icon: [
      {
        url: "/logo.svg",
        type: "image/svg+xml",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inriaSerif.variable} ${heebo.variable}`}>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
