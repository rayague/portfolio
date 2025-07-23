"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCoffee,
  faPhone,
  faEnvelope,
  faMapMarkerAlt
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faLinkedin,
  faWhatsapp,
  faGithub
} from "@fortawesome/free-brands-svg-icons";

export default function BlogClient() {
  return (
    <main className="flex flex-col min-h-screen items-center justify-center bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800">
      <Navbar />
      <div className="flex-1 flex flex-col items-center justify-center w-full">
        <h1 className="text-4xl font-bold text-white mt-24">Blog coming soon</h1>
      </div>
    </main>
  );
} 