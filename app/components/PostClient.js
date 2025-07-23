"use client";
import React, { useState, useEffect } from "react";
import { useParams, useRouter, notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import Navbar from "../../components/Navbar";
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
// ... tout le code React et JSX de l'ancienne page posts/[id]/page.js ici ... 