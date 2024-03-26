import "../styles/globals.css";

import { fontHeading, fontSans, fontUrban } from "@/assets/fonts";
// import { siteConfig } from "../config/site";


import { Analytics } from "@repo/ui/general/analytics";
import { Providers } from "@repo/ui/general/providers";
import { TailwindIndicator } from "@repo/ui/general/tailwind-indicator";

import { ModalProvider } from "@repo/ui/general/modal-provider";

import { Toaster } from "@repo/ui/components/ui/toaster";

import { siteConfig } from "@/config/site";
import { cn } from "@repo/ui/lib/utils";

// import {  } from "@config";;

interface RootLayoutProps {
  children: React.ReactNode;
}

export const metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: ["Projectx keywords"],
  authors: [
    {
      name: "christer",
    },
  ],
  creator: "simplesempresa",
  metadataBase: new URL(siteConfig.url),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: "@simplesempresa",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: `${siteConfig.url}/site.webmanifest`,
};


export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased  no-scrollbar",
          fontSans.variable,
          fontUrban.variable,
          fontHeading.variable,
        )}
      >
        {/* <Providers attribute="class" defaultTheme="system" enableSystem> */}
          {/* <EdgeStoreProvider>{children}</EdgeStoreProvider> */}
          {children}
          {/* <Analytics /> */}
          {/* <Toaster /> */}
          {/* <ModalProvider /> */}
          {/* <TailwindIndicator /> */}
        {/* </Providers> */}
      </body>
    </html>
  );
}
