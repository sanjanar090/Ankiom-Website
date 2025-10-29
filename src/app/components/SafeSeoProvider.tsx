"use client";

import dynamic from "next/dynamic";
import React from "react";

const SeoProvider = dynamic(() => import("./SeoProvider"), {
  ssr: false, 
});

export default function SafeSeoProvider({ children }: { children: React.ReactNode }) {
  return <SeoProvider>{children}</SeoProvider>;
}
