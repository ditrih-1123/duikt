import type { Metadata } from "next";
import localFont from "next/font/local";
import { Roboto_Slab } from "next/font/google";
import "./globals.css";

const helveticaNeue = localFont({
  src: [
    {
      path: "./fonts/HelveticaNeueCyr-Thin.woff2",
      weight: "100",
      style: "normal",
    },
    {
      path: "./fonts/HelveticaNeueCyr-ThinItalic.woff2",
      weight: "100",
      style: "italic",
    },
    {
      path: "./fonts/HelveticaNeueCyr-UltraLight.woff2",
      weight: "200",
      style: "normal",
    },
    {
      path: "./fonts/HelveticaNeueCyr-UltraLightItalic.woff2",
      weight: "200",
      style: "italic",
    },
    {
      path: "./fonts/HelveticaNeueCyr-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "./fonts/HelveticaNeueCyr-LightItalic.woff2",
      weight: "300",
      style: "italic",
    },
    {
      path: "./fonts/HelveticaNeueCyr-Roman.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/HelveticaNeueCyr-Italic.woff2",
      weight: "400",
      style: "italic",
    },
    {
      path: "./fonts/HelveticaNeueCyr-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/HelveticaNeueCyr-MediumItalic.woff2",
      weight: "500",
      style: "italic",
    },
    {
      path: "./fonts/HelveticaNeueCyr-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/HelveticaNeueCyr-BoldItalic.woff2",
      weight: "700",
      style: "italic",
    },
    {
      path: "./fonts/HelveticaNeueCyr-Heavy.woff2",
      weight: "800",
      style: "normal",
    },
    {
      path: "./fonts/HelveticaNeueCyr-HeavyItalic.woff2",
      weight: "800",
      style: "italic",
    },
    {
      path: "./fonts/HelveticaNeueCyr-Black.woff2",
      weight: "900",
      style: "normal",
    },
    {
      path: "./fonts/HelveticaNeueCyr-BlackItalic.woff2",
      weight: "900",
      style: "italic",
    },
  ],
  variable: "--font-helvetica",
  display: "swap",
});

const robotoSlab = Roboto_Slab({
  subsets: ["latin", "cyrillic"],
  variable: "--font-roboto-slab",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Управління інформаційно-комунікаційною діяльністю | Магістерська програма",
  description: "Освітньо-професійна програма другого (магістерського) рівня вищої освіти. Галузь: 02 Культура і мистецтво. Спеціальність: 029 Інформаційна, бібліотечна та архівна справа.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uk">
      <body
        className={`${helveticaNeue.variable} ${robotoSlab.variable} antialiased`}
        style={{ fontFamily: 'var(--font-helvetica)' }}
      >
        {children}
      </body>
    </html>
  );
}
