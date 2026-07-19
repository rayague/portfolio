"use client";
import dynamic from "next/dynamic";
import SmoothScroll from "./animations/SmoothScroll";
import Preloader from "./animations/Preloader";

const CustomCursor = dynamic(() => import("./animations/CustomCursor"), {
  ssr: false,
});

export default function ClientShell({ children }) {
  return (
    <SmoothScroll>
      <Preloader />
      <CustomCursor />
      <div className="noise-overlay" aria-hidden="true" />
      {children}
    </SmoothScroll>
  );
}
