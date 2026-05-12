import type { Metadata } from "next";
import { Nunito, Poppins } from "next/font/google";
import "./globals.css";

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Sanvi Pre School",
  description: "Safe, joyful and activity-based preschool for children aged 1.5 to 6 years. Trusted by 500+ families with CCTV enabled campus and play-based learning.",
  keywords: "preschool, nursery, daycare, early childhood education, playgroup, kindergarten",
  icons: {
    icon: "/images/sanviprischoollogo.png",
    shortcut: "/images/sanviprischoollogo.png",
    apple: "/images/sanviprischoollogo.png",
  },
  openGraph: {
    title: "Sanvi Pre School",
    description: "Where Little Minds Begin Their Bright Journey",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${nunito.variable} ${poppins.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-poppins bg-background text-text overflow-x-hidden" suppressHydrationWarning>{children}</body>
    </html>
  );
}
