import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "./globals.css";

const cormorantGaramond = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-heading",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Dr. Maya Reynolds, PsyD | Therapist in Santa Monica, CA",
  description:
    "Dr. Maya Reynolds, PsyD offers warm, collaborative therapy for adults in Santa Monica and secure telehealth across California, specializing in anxiety, trauma, burnout and more.",
  openGraph: {
    siteName: "Dr. Maya Reynolds, PsyD",
    title: "Dr. Maya Reynolds, PsyD | Therapist in Santa Monica, CA",
    description:
      "Dr. Maya Reynolds, PsyD offers warm, collaborative therapy for adults in Santa Monica and secure telehealth across California, specializing in anxiety, trauma, burnout and more.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorantGaramond.variable} ${dmSans.variable} scroll-smooth`}>
      <body className="min-h-screen font-body antialiased bg-[#F8F5EF] text-[#29332F] selection:bg-[#E7DED0] selection:text-[#29332F]">
        {children}
      </body>
    </html>
  );
}
