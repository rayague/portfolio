"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "../../firebaseConfig";
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
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const unsubscribe = onSnapshot(
      collection(db, "formResponses"),
      (snapshot) => {
        const postsData = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data()
        }));
        setPosts(postsData);
      }
    );

    // Clean up the subscription on unmount
    return () => unsubscribe();
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center  bg-slate-950 font-sans transition ease-in">
      <div className="h-auto w-full flex flex-row backdrop-blur-md bg-white/5 shadow-2xl justify-between items-center px-3 sm:px-5 lg:px-20 md:px-10 gap-6 py-6 mb-5 ">
        <button
          onClick={handleBack}
          className="text-gray-50 font-black text-4xl"
        >
          &larr;
        </button>
        <nav className="text-gray-200 flex flex-row justify-end  decoration-none text-md/6 font-extrabold gap-4 ">
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
        <div className="h-auto w-full flex my-11 flex-col gap-6">
          <h1 className="text-gray-50 font-black text-5xl">Blog</h1>
          <p className="text-white/75 text-lg">
            In a world full of stories, I strive to share insights and
            experiences that inspire growth and creativity. Join me as we
            explore ideas, reflect on challenges, and celebrate the journey of
            learning together.{" "}
            <Link
              href="/form"
              className="text-sky-400/90 underline underline-offset-3"
            >
              Click here to post
            </Link>
          </p>
        </div>

        <div className="h-px w-full bg-gray-800 my-16"></div>
        <div className="container flex flex-row text-white gap-6 "></div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-white/65 pb-40">
          {posts.map((post) => (
            <Link key={post.id} href={`/posts/${post.id}`}>
              <div className="w-auto h-auto bg-slate-900/60 rounded-xl shadow-2xl shadow-slate-800/50 delay-150 hover:-translate-y-1 hover:scale-110 border hover:bg-slate-600/60 duration-100 m-4">
                <Image
                  src="/programming1.jpg"
                  width={500}
                  height={500}
                  alt="Picture"
                  className="object-cover w-full rounded-t-xl"
                />
                <h2 className="text-white text-2xl mt-2 mx-3">
                  Posted by:{" "}
                  <span className="italic text-3xl font-extrabold">
                    {post.formFirstName} {post.formLastName}
                  </span>
                </h2>
                <h3 className="mb-3 mx-3 font-bold">
                  {new Date(post.postDate).toLocaleDateString()}
                </h3>
                <p className="p-3">
                  {post.formThoughts.length > 100
                    ? post.formThoughts.substring(0, 100) + "... see more."
                    : post.formThoughts}
                </p>
              </div>
            </Link>
          ))}
          <Link href="">
            <div className="w-auto h-auto bg-slate-900/60 rounded-xl shadow-2xl shadow-slate-800/50 delay-150 hover:-translate-y-1 hover:scale-110 border hover:bg-slate-600/60 duration-100 ">
              <Image
                src="/programming1.jpg"
                width={500}
                height={500}
                alt="Picture"
                className=" object-cover w-full rounded-t-xl"
              />
              <h2 className="text-white text-2xl mt-2 mx-3">
                Posted by :{" "}
                <span className="italic text-3xl font-extrabold">
                  Roberd Kingsman{" "}
                </span>
              </h2>
              <h3 className="mb-3 mx-3 font-bold">Jul.12 - 2024</h3>
              <p className="p-3">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi
                adipisci illum vel tempora pariatur? Dolorem molestias nihil
                alias sapiente cumque quaerat aliquid omnis expedita! Amet natus
                doloribus quas ex magni! ... see more.
              </p>
            </div>
          </Link>
          <Link href="">
            <div className="w-auto h-auto bg-slate-900/60 rounded-xl shadow-2xl shadow-slate-800/50 delay-150 hover:-translate-y-1 hover:scale-110 border hover:bg-slate-600/60 duration-100 ">
              <Image
                src="/programming1.jpg"
                width={500}
                height={500}
                alt="Picture"
                className=" object-cover w-full rounded-t-xl"
              />
              <h2 className="text-white text-2xl mt-2 mx-3">
                Posted by :{" "}
                <span className="italic text-3xl font-extrabold">
                  Roberd Kingsman{" "}
                </span>
              </h2>
              <h3 className="mb-3 mx-3 font-bold">Jul.12 - 2024</h3>
              <p className="p-3">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi
                adipisci illum vel tempora pariatur? Dolorem molestias nihil
                alias sapiente cumque quaerat aliquid omnis expedita! Amet natus
                doloribus quas ex magni! ... see more.
              </p>
            </div>
          </Link>
          <Link href="">
            <div className="w-auto h-auto bg-slate-900/60 rounded-xl shadow-2xl shadow-slate-800/50 delay-150 hover:-translate-y-1 hover:scale-110 border hover:bg-slate-600/60 duration-100 ">
              <Image
                src="/programming1.jpg"
                width={500}
                height={500}
                alt="Picture"
                className=" object-cover w-full rounded-t-xl"
              />
              <h2 className="text-white text-2xl mt-2 mx-3">
                Posted by :{" "}
                <span className="italic text-3xl font-extrabold">
                  Roberd Kingsman{" "}
                </span>
              </h2>
              <h3 className="mb-3 mx-3 font-bold">Jul.12 - 2024</h3>
              <p className="p-3">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi
                adipisci illum vel tempora pariatur? Dolorem molestias nihil
                alias sapiente cumque quaerat aliquid omnis expedita! Amet natus
                doloribus quas ex magni! ... see more.
              </p>
            </div>
          </Link>
          <Link href="">
            <div className="w-auto h-auto bg-slate-900/60 rounded-xl shadow-2xl shadow-slate-800/50 delay-150 hover:-translate-y-1 hover:scale-110 border hover:bg-slate-600/60 duration-100 ">
              <Image
                src="/programming1.jpg"
                width={500}
                height={500}
                alt="Picture"
                className=" object-cover w-full rounded-t-xl"
              />
              <h2 className="text-white text-2xl mt-2 mx-3">
                Posted by :{" "}
                <span className="italic text-3xl font-extrabold">
                  Roberd Kingsman{" "}
                </span>
              </h2>
              <h3 className="mb-3 mx-3 font-bold">Jul.12 - 2024</h3>
              <p className="p-3">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi
                adipisci illum vel tempora pariatur? Dolorem molestias nihil
                alias sapiente cumque quaerat aliquid omnis expedita! Amet natus
                doloribus quas ex magni! ... see more.
              </p>
            </div>
          </Link>
        </div>
      </div>
      <div className=" h-auto w-full relative bottom-0 flex justify-center items-center flex-row gap-3 p-3">
        <a
          href="https://www.facebook.com/profile.php?id=100084755843013"
          target="_blank"
          rel="noopener noreferrer"
          className=" text-white"
        >
          <FontAwesomeIcon className="size-8" icon={faFacebook} />
        </a>
        <a
          href="https://www.instagram.com/rayague03?igsh=MTg3eWNnN2hzdnI0Zg=="
          target="_blank"
          rel="noopener noreferrer"
          className=" text-white"
        >
          <FontAwesomeIcon className="size-8" icon={faInstagram} />
        </a>
        <a
          href="https://www.linkedin.com/in/ray-ague-2066b4247?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
          target="_blank"
          rel="noopener noreferrer"
          className=" text-white"
        >
          <FontAwesomeIcon className="size-8" icon={faLinkedin} />
        </a>
        <a
          href="https://wa.me/22960932967"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white"
        >
          <FontAwesomeIcon className="size-8" icon={faWhatsapp} />
        </a>
        <a
          href="https://github.com/rayague"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white"
        >
          <FontAwesomeIcon className="size-8" icon={faGithub} />
        </a>
      </div>
    </main>
  );
}
