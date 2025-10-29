"use client";

import { DefaultSeo } from "next-seo";
import React from "react";

export default function SeoProvider({ children }: { children: React.ReactNode }) {
  const defaultSEO = {
    title: "Ankiom | IoT, Flutter & Next.js Development",
    description: "Ankiom offers professional IoT, Flutter, and Next.js solutions with SEO-optimized web experiences.",
    openGraph: {
      type: "website",
      locale: "en_IE",
      url: "https://ankiom.vercel.app/",
      siteName: "Ankiom",
    },
    twitter: {
      handle: "@ankiom",
      site: "@ankiom",
      cardType: "summary_large_image",
    },
  };

  return (
    <>
      <DefaultSeo {...defaultSEO} />
      {children}
    </>
  );
}
