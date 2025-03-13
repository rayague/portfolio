"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

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
  // faPhone,
  // faEnvelope,
  // faMapMarkerAlt
} from "@fortawesome/free-brands-svg-icons";

export default function Page() {
  const router = useRouter();
  const handleBack = () => {
    router.back();
  };

  const posts = [
    {
      id: 1,
      title: "Post 1",
      author: "Ray Ague",
      date: "Aug. 2024",
      content:
        "Nous qui sommes des personnes tout à fait normales, nous n’avons généralement pas eu une vie comblée, une vie désirée. Dans la plupart des cas, notre vie est une succession d’obstacles plus ou moins à notre portée, que....",
      image: "/post1.jpg"
    },
    {
      id: 2,
      title: "Post 2",
      author: "Ray Ague",
      date: "Aug. 2024",
      content:
        "L’Homme, qu’est-il en réalité ? Il n’est point rare d’entendre dire que “l’Homme est un éternel insatisfait” ou “l’Homme est un loup pour l’Homme”, et j’en passe… Toutes ces affirmations sont vraies, mais la vraie question qu’il faut se poser est celle-ci : “Est-ce qu’on peut  ...",
      image: "/post2.jpg"
    },
    {
      id: 3,
      title: "Post 1",
      author: "Ray Ague",
      date: "Aug. 2024",
      content:
        "L’amour est ce sentiment profond qu’on éprouve pour une personne et non pour une chose, car pour moi, on ne tombe pas amoureux d’une chose. Je ne définirai peut-être pas l’amour de la même manière que les autres, car...",
      image: "/post3.jpg"
    },
    {
      id: 4,
      title: "Post 2",
      author: "Ray Ague",
      date: "Aug. 2024",
      content:
        "C’est fait de telle sorte que chaque infime pensée, chaque acte que tu poseras influencera ta destinée. Bien avant même la genèse, ceux qui ont existé avant nous, ceux d’aujourd’hui et ceux qui arriveront, étions tous là, auprès de ...",
      image: "/post10.jpg"
    },
    {
      id: 5,
      title: "Post 1",
      author: "Ray Ague",
      date: "Aug. 2024",
      content:
        "Dans la vie, il faut que tu connaisses ta position, que tu suives le tunnel qui te mènera à la réussite, à ton succès, à ton bonheur. Thanos disait dans le film Marvel Endgame : « S’il existe des gens qui s’attachent toujours à leur passé, c’est qu’il ...",
      image: "/post5.jpg"
    },
    {
      id: 6,
      title: "Post 2",
      author: "Ray Ague",
      date: "Aug. 2024",
      content:
        "Qui est Dieu ? Dieu n’est pas une personne, ni un esprit ou quoi que ce soit. Dans notre tête, nous craignons tous quelqu’un ou quelque chose ; nous savons qu’il y a un être...",
      image: "/post6.jpg"
    },
    {
      id: 7,
      title: "Post 1",
      author: "Ray Ague",
      date: "Aug. 2024",
      content:
        "Parfois, il suffit qu’une petite situation se présente pour que nous commencions à nous poser plusieurs questions. Nous nous demandons pourquoi la vie est ainsi, pourquoi nous devons subir à la place des autres, pourquoi nous sommes nés si nous ne pouvons pas être ...",
      image: "/post7.jpg"
    },
    {
      id: 8,
      title: "Post 2",
      author: "Internet",
      date: "Aug. 2024",
      content:
        "L'homme a été créé pour exercer son autorité. Il n'aime pas faire le chef, il est CHEF. Il n'aime pas commander, mais il est un commandant. Il n'y a jamais eu de petit mari et il n'y en aura jamais. Peu importe si la femme est plus ...",
      image: "/couple4.jpg"
    },
    {
      id: 9,
      title: "Post 1",
      author: "Internet",
      date: "Aug. 2024",
      content:
        "Depuis des siècles, les femmes ont été manipulées pour croire qu'elles sont « hystériques », « émotives », « folles » et « dépendantes » pour avoir des besoins ...",
      image: "/couple8.jpg"
    },
    {
      id: 10,
      title: "Post 2",
      author: "Internet",
      date: "Aug. 2024",
      content:
        "Souvent, lorsque nous parlons des relations toxiques que les femmes subissent, nous nous concentrons uniquement sur les hommes malsains qui agissent agressivement envers elles, ce qui est tout à fait justifié. Mais nous ...",
      image: "/friend10.jpg"
    },
    {
      id: 11,
      title: "Post 2",
      author: "Internet",
      date: "Aug. 2024",
      content:
        "SInternet est en émoi depuis que The Times a couvert plus en profondeur l'histoire de Ballerina Farm, une histoire initialement présentée dans The New York Times, à propos d'un couple influent très populaire, comprenant une ...",
      image: "/couple6.jpg"
    }
    // Ajoute d'autres posts ici
  ];

  return (
    <main className="flex flex-col items-center min-h-screen font-sans transition ease-in bg-slate-950">
      <div className="flex flex-row items-center justify-between w-full h-auto gap-6 px-3 py-6 mb-5 shadow-2xl backdrop-blur-md bg-white/5 sm:px-5 lg:px-20 md:px-10 ">
        <button
          onClick={handleBack}
          className="text-4xl font-black text-gray-50"
        >
          &larr;
        </button>
        <nav className="flex flex-row justify-end gap-4 font-extrabold text-gray-200 decoration-none text-md/6 ">
          <Link href="/home" className="hover:text-gray-50">
            Home
          </Link>
          <Link href="/projects" className="hover:text-gray-50">
            Projects
          </Link>
          <Link href="/contact" className="hover:text-gray-50">
            Contact
          </Link>
        </nav>
      </div>
      <div className="container px-5 sm:px-8 md:px-12 xl:px24 2xl:px44 lg:px16">
        <div className="flex flex-col w-full h-auto gap-6 my-11">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {
                scale: 1,
                opacity: 0
              },
              visible: {
                scale: 1,
                opacity: 1,
                transition: {
                  delay: 0.3
                }
              }
            }}
          >
            <h1 className="text-6xl font-black text-gray-50">Blog</h1>
          </motion.div>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {
                scale: 1,
                opacity: 0
              },
              visible: {
                scale: 1,
                opacity: 1,
                transition: {
                  delay: 0.8
                }
              }
            }}
          >
            <p className="text-xl text-white leading-relaxed">
              In a world full of stories, I strive to share insights and
              experiences that inspire growth and creativity. Join me as we
              explore ideas, reflect on challenges, and celebrate the journey of
              learning together.{" "}
            </p>
          </motion.div>
        </div>

        <div className="w-full h-px my-16 bg-gray-800"></div>
        <div className="container flex flex-row gap-6 text-white "></div>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {
              scale: 1,
              opacity: 0
            },
            visible: {
              scale: 1,
              opacity: 1,
              transition: {
                delay: 1.4
              }
            }
          }}
        >
          <div className="grid grid-cols-1 gap-8 pb-40 sm:grid-cols-2 lg:grid-cols-3 text-white/65">
            {posts.map((post) => (
              <Link key={post.id} href={`/posts/${post.id}`}>
                <div className="w-auto h-auto duration-100 delay-150 border shadow-2xl bg-slate-900/60 rounded-xl shadow-slate-800/50 hover:-translate-y-3 hover:scale-100 hover:bg-slate-600/60 ">
                  <Image
                    src={post.image}
                    width={500}
                    height={500}
                    alt="Picture"
                    className="object-cover w-full rounded-t-xl"
                  />
                  <h2 className="mx-3 mt-2 text-2xl text-white">
                    Posted by :{" "}
                    <span className="text-3xl font-bold tracking-tighter ">
                      {post.author}{" "}
                    </span>
                  </h2>
                  <h3 className="mx-3 mb-3 font-bold">{post.date}</h3>
                  <p className="p-3">{post.content} ... see more.</p>
                </div>
              </Link>
            ))}
          </div>
        </motion.div>
      </div>
      <div className="relative bottom-0 flex flex-row items-center justify-center w-full h-auto gap-3 p-3 ">
       <Link
          href="https://www.facebook.com/profile.php?id=100084755843013"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white "
        >
          <FontAwesomeIcon className="size-8" icon={faFacebook} />
        </Link>
       <Link
          href="https://www.instagram.com/rayague03?igsh=MTg3eWNnN2hzdnI0Zg=="
          target="_blank"
          rel="noopener noreferrer"
          className="text-white "
        >
          <FontAwesomeIcon className="size-8" icon={faInstagram} />
        </Link>
       <Link
          href="https://www.linkedin.com/in/ray-ague-2066b4247?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white "
        >
          <FontAwesomeIcon className="size-8" icon={faLinkedin} />
        </Link>
       <Link
          href="https://wa.me/22960932967"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white"
        >
          <FontAwesomeIcon className="size-8" icon={faWhatsapp} />
        </Link>
       <Link
          href="https://github.com/rayague"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white"
        >
          <FontAwesomeIcon className="size-8" icon={faGithub} />
        </Link>
      </div>
      <p className="mt-4 mb-8 text-sm text-center text-white">
        © copyright -{" "}
        <Link href="https://portfolio-cnkp.vercel.app">Ray Ague</Link> All
        rights reserved.
      </p>
    </main>
  );
}
