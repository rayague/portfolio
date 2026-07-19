"use client";
import React from "react";
import Navbar from "../components/Navbar";

export default function BlogClient() {
  return (
    <main className="flex flex-col min-h-screen items-center justify-center bg-slate-950">
      <Navbar />
      <div className="flex-1 flex flex-col items-center justify-center w-full">
        <h1 className="text-4xl font-bold text-white mt-24">Blog coming soon</h1>
      </div>
    </main>
  );
}
