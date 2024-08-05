"use client";
import React from "react";
import Link from "next/link";

export default function SuccessPage() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-slate-950 font-sans">
      <h1 className="text-gray-50 font-black text-5xl">
        Form Submitted Successfully!
      </h1>
      <Link href="/form" className="text-blue-500 underline">
        Go back to form
      </Link>
    </main>
  );
}
