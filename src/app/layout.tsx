import "./globals.css";
import type { Metadata } from "next";
import { Gabarito } from "next/font/google";
import { Providers } from "./providers";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";

const gabarito = Gabarito({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jason Dichoso | Portfolio",
  description:
    "The portfolio website of Jason Dichoso, a web developer from the Philippines.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <link rel="manifest" href="/pwa/manifest.json" />
      <meta name="theme-color" content="#E0E4E5" />
      <body
        className={`${gabarito.className} relative max-w-[1440px] w-full my-0 mx-auto theme`}
      >
        <Providers>
          <Header />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
