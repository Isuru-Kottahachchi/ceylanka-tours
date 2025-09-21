"use client";
import dynamic from "next/dynamic";
const AdBanner = dynamic(() => import("@/components/ad-banner").then(mod => mod.AdBanner), { ssr: false });

export default AdBanner;
