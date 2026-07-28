import type { Metadata } from "next";
import "./globals.css";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
const basePath = process.env.PAGES_BASE_PATH ?? "";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Fastiv — виробничо-складський комплекс",
  description:
    "Виробничо-складський комплекс площею 7 000 м² у Фастівському напрямку, приблизно за годину від Києва.",
  openGraph: {
    title: "Fastiv — виробничо-складський комплекс",
    description:
      "7 000 м² для виробництва, зберігання та щоденної роботи підприємства.",
    images: [`${basePath}/property/hero.jpeg`],
  },
  twitter: {
    card: "summary_large_image",
    title: "Fastiv — виробничо-складський комплекс",
    description:
      "7 000 м² для виробництва, зберігання та щоденної роботи підприємства.",
    images: [`${basePath}/property/hero.jpeg`],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uk">
      <body>{children}</body>
    </html>
  );
}
