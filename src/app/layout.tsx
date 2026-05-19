import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#061B14", // Deep Emerald
};

export const metadata: Metadata = {
  title: "Ahmed & Esraa | Luxury Cinematic Wedding Experience",
  description: "Join us in celebrating the timeless love story of Ahmed & Esraa. An immersive, cinematic wedding invitation and event experience.",
  keywords: ["Ahmed and Esraa", "Luxury Wedding", "Cinematic Wedding", "Wedding Invitation", "Awwwards Wedding", "Save the Date"],
  authors: [{ name: "Ahmed & Esraa" }],
  openGraph: {
    title: "Ahmed & Esraa | Luxury Cinematic Wedding Experience",
    description: "Join us in celebrating the timeless love story of Ahmed & Esraa. An immersive, cinematic wedding invitation and event experience.",
    url: "https://ahmed-esraa-wedding.vercel.app",
    siteName: "Ahmed & Esraa Wedding",
    images: [
      {
        url: "/og-image.jpg",
        width: 1920,
        height: 1080,
        alt: "Ahmed & Esraa Cinematic Wedding Invitation",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ahmed & Esraa | Luxury Cinematic Wedding Experience",
    description: "Join us in celebrating the timeless love story of Ahmed & Esraa. An immersive, cinematic wedding invitation and event experience.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark antialiased">
      <body className="bg-[#040D0A] text-[#E8E2D5] font-poppins min-h-screen selection:bg-[#D4AF37] selection:text-[#040D0A] overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
