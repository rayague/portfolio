"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter, useEffect } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";

import {
  faFacebook,
  faTwitter,
  faInstagram,
  faLinkedin,
  faWhatsapp,
  faGithub
} from "@fortawesome/free-brands-svg-icons";

export default function Page() {
  const router = useRouter();
  const handleBack = () => {
    router.back();
  };

  return (
    <main className="flex flex-col items-center min-h-screen font-sans transition ease-in bg-slate-950">
      <div className="top-0 flex flex-row items-center justify-between w-full h-auto gap-6 px-3 py-6 mb-5 shadow-2xl backdrop-blur-md bg-white/5 sm:px-5 lg:px-20 md:px-10 ">
        <button
          onClick={handleBack}
          className="text-4xl font-black text-gray-50"
        >
          &larr;
        </button>
        <nav className="flex flex-row justify-end gap-4 font-extrabold text-gray-200 decoration-none text-md/6">
          <Link href="/home" className="hover:text-gray-50">
            Home
          </Link>
          <Link href="/blog" className="hover:text-gray-50">
            Blog
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
            <h1 className="text-5xl font-black text-gray-50">Projects</h1>
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
            <p className="text-lg text-white/75">
              Every project is an opportunity to explore, innovate, and create
              something meaningful. I&apos;m passionate about bringing ideas to
              life and sharing my vision through unique and impactful work.
            </p>
          </motion.div>
        </div>

        <div className="w-full h-px my-16 bg-gray-800"></div>
        <div className="grid grid-cols-1 gap-8 pb-32 sm:grid-cols-2 lg:grid-cols-3 text-white/65">
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
                  delay: 1.2
                }
              }
            }}
          >
            <a href="https://rayague.github.io/simpleFolio/">
              <div className="w-auto h-auto duration-100 delay-150 shadow-2xl bg-slate-900/60 rounded-xl shadow-slate-800/50 hover:-translate-y-1 hover:scale-110 hover:bg-slate-600/60 ">
                <Image
                  src="/portofolio.jpeg"
                  width={500}
                  height={500}
                  alt="Portfolio"
                  className="object-cover w-full"
                />
                <h2 className="mx-3 mt-2 text-2xl text-white">Portfolio</h2>
                <h3 className="mx-3 mb-3 font-bold">Apr. 2024</h3>
                <p className="p-3">
                  I created a personal portfolio to enhance my programming
                  skills. This project allowed me to explore various web
                  development techniques. The portfolio showcases my creativity
                  and technical abilities. It reflects my growth as a developer
                  and highlights my projects.
                </p>
              </div>
            </a>
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
                  delay: 1.6
                }
              }
            }}
          >
            <a href="https://rayague.github.io/amas-precision/">
              <div className="w-auto h-auto duration-100 delay-150 shadow-2xl bg-slate-900/60 rounded-xl shadow-slate-800/50 hover:-translate-y-1 hover:scale-110 hover:bg-slate-600/60 ">
                <Image
                  src="/amasPrecision.png"
                  width={500}
                  height={500}
                  alt="Amas Precision"
                  className="object-cover w-full"
                />
                <h2 className="mx-3 mt-2 text-2xl text-white">
                  Amas Precision
                </h2>
                <h3 className="mx-3 mb-3 font-bold">Mar. 2024</h3>
                <p className="p-3">
                  I managed the development of a website for Amas Precision.
                  This company specializes in statistical analysis. They provide
                  customized data solutions in Cotonou, Benin. The site
                  showcases their services and enhances client engagement. It
                  helps clients make informed decisions through data
                  understanding.
                </p>
              </div>
            </a>
          </motion.div>

          {/* <motion.div
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
                  delay: 2
                }
              }
            }}
          >
            <a href="">
              <div className="w-auto h-auto duration-100 delay-150 shadow-2xl bg-slate-900/60 rounded-xl shadow-slate-800/50 hover:-translate-y-1 hover:scale-110 hover:bg-slate-600/60 ">
                <Image
                  src="/unavaible.png"
                  width={500}
                  height={500}
                  alt="Oluwatobi Trans"
                  className="object-cover w-full"
                />
                <h2 className="mx-3 mt-2 text-2xl text-white">
                  Oluwatobi Trans
                </h2>
                <h3 className="mx-3 mb-3 font-bold">Apr. 2024</h3>
                <p className="p-3">
                  I developed a website for Oluwatobi Trans. My friend in the
                  transit industry requested this project. The goal was to
                  create an online platform to showcase his achievements. The
                  site enhances his visibility on the internet. I designed a
                  user-friendly interface that highlights his services. This
                  website serves as a tool to attract new customers.
                </p>
              </div>
            </a>
          </motion.div> */}

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
                  delay: 2.4
                }
              }
            }}
          >
            <a href="https://rayague.github.io/fadoul-global-industry/">
              <div className="w-auto h-auto duration-100 delay-150 shadow-2xl bg-slate-900/60 rounded-xl shadow-slate-800/50 hover:-translate-y-1 hover:scale-110 hover:bg-slate-600/60 ">
                <Image
                  src="/fadoolGlobal.jpeg"
                  width={500}
                  height={500}
                  alt="Fadoul Global Industry"
                  className="object-cover w-full"
                />
                <h2 className="mx-3 mt-2 text-2xl text-white">
                  Fadoul Global Industry
                </h2>
                <h3 className="mx-3 mb-3 font-bold">Apr. 2024</h3>April
                <p className="p-3">
                  I developed a website for Fadoul Global Industry at the
                  request of a friend. The goal was to present his company and
                  its operations. The website highlights the services offered by
                  the company. It showcases their expertise and helps attract
                  new clients. This project enhances their online presence and
                  visibility.
                </p>
              </div>
            </a>
          </motion.div>

          {/* <motion.div
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
                  delay: 3.2
                }
              }
            }}
          >
            <a href="">
              <div className="w-auto h-auto duration-100 delay-150 shadow-2xl bg-slate-900/60 rounded-xl shadow-slate-800/50 hover:-translate-y-1 hover:scale-110 hover:bg-slate-600/60 ">
                <Image
                  src="/unavaible.png"
                  width={500}
                  height={500}
                  alt="Le Digitalemaster"
                  className="object-cover w-full"
                />
                <h2 className="mx-3 mt-2 text-2xl text-white">
                  Le Digitalemaster
                </h2>
                <h3 className="mx-3 mb-3 font-bold">Mar. 2024</h3>
                <p className="p-3">
                  I am currently working on the Le Digitalemaster project. This
                  project is in progress at the request of an individual. The
                  aim is to provide online services for students. It will help
                  students find courses and access other resources. The goal is
                  to create a comprehensive platform that meets the needs of
                  learners.
                </p>
              </div>
            </a>
          </motion.div> */}

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
                  delay: 3.6
                }
              }
            }}
          >
            <a href="https://rayague.github.io/OnlineCvRayAgueEn/">
              <div className="w-auto h-auto duration-100 delay-150 shadow-2xl bg-slate-900/60 rounded-xl shadow-slate-800/50 hover:-translate-y-1 hover:scale-110 hover:bg-slate-600/60 ">
                <Image
                  src="/CVen.png"
                  width={500}
                  height={500}
                  alt="My CV"
                  className="object-cover w-full"
                />
                <h2 className="mx-3 mt-2 text-2xl text-white">My CV</h2>
                <h3 className="mx-3 mb-3 font-bold">Jul. 2024</h3>
                <p className="p-3">
                  I coded my CV using HTML and CSS. This project was done to
                  evaluate my programming skills. I aim to create a
                  well-structured and appealing CV. I still have some basics to
                  solidify and improve the overall design. This project helps me
                  enhance my web development abilities.
                </p>
              </div>
            </a>
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
                  delay: 4
                }
              }
            }}
          >
            <a href="/https://portfolio-cnkp.vercel.app">
              <div className="w-auto h-auto duration-100 delay-150 shadow-2xl bg-slate-900/60 rounded-xl shadow-slate-800/50 hover:-translate-y-1 hover:scale-110 hover:bg-slate-600/60 ">
                <Image
                  src="/portfolioRay.png "
                  width={500}
                  height={500}
                  alt="Portfolio"
                  className="object-cover w-full"
                />
                <h2 className="mx-3 mt-2 text-2xl text-white">My Portfolio</h2>
                <h3 className="mx-3 mb-3 font-bold">Aug. 2024</h3>
                <p className="p-3">
                  I am working on my portfolio website again, this time using a
                  framework. The goal is to present my activities and projects
                  more effectively. This project allows me to showcase my skills
                  and experience in a professional manner. I aim to create an
                  engaging user experience and highlight my work.
                </p>
              </div>
            </a>
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
                  delay: 4
                }
              }
            }}
          >
            <a href="/https://prototype-self.vercel.app/">
              <div className="w-auto h-auto duration-100 delay-150 shadow-2xl bg-slate-900/60 rounded-xl shadow-slate-800/50 hover:-translate-y-1 hover:scale-110 hover:bg-slate-600/60 ">
                <Image
                  src="/prototype.png "
                  width={500}
                  height={500}
                  alt="Portfolio"
                  className="object-cover w-full"
                />
                <h2 className="mx-3 mt-2 text-2xl text-white">Prototype</h2>
                <h3 className="mx-3 mb-3 font-bold">Aug. 2024</h3>
                <p className="p-3">
                  I am working on my portfolio website again, this time using a
                  framework. The goal is to present my activities and projects
                  more effectively. This project allows me to showcase my skills
                  and experience in a professional manner. I aim to create an
                  engaging user experience and highlight my work.
                </p>
              </div>
            </a>
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
                  delay: 2.8
                }
              }
            }}
          >
            <a href="https://rayague.github.io/vroc-creation/">
              <div className="w-auto h-auto duration-100 delay-150 shadow-2xl bg-slate-900/60 rounded-xl shadow-slate-800/50 hover:-translate-y-1 hover:scale-110 hover:bg-slate-600/60 ">
                <Image
                  src="/vrocCreation.jpeg"
                  width={500}
                  height={500}
                  alt="vroc-creation"
                  className="object-cover w-full"
                />
                <h2 className="mx-3 mt-2 text-2xl text-white">VROC-CREATION</h2>
                <h3 className="mx-3 mb-3 font-bold">Oct - 2024</h3>
                <p className="p-3">
                  As the lead developer at VROC-CRÉATION, I was responsible for
                  the development and design of our website. I closely
                  collaborated with the team to ensure that every element of the
                  site reflects our shared vision. My commitment helped create a
                  platform that embodies our passion for innovation and
                  creativity.
                </p>
              </div>
            </a>
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
                  delay: 2.8
                }
              }
            }}
          >
            <a href="https://dossoumarcel.vercel.app/">
              <div className="w-auto h-auto duration-100 delay-150 shadow-2xl bg-slate-900/60 rounded-xl shadow-slate-800/50 hover:-translate-y-1 hover:scale-110 hover:bg-slate-600/60 ">
                <Image
                  src="/doctor.png"
                  width={500}
                  height={500}
                  alt="Portfolio"
                  className="object-cover w-full"
                />
                <h2 className="mx-3 mt-2 text-2xl text-white">Portfolio</h2>
                <h3 className="mx-3 mb-3 font-bold">Dec - 2024</h3>
                <p className="p-3">
                  I had the privilege of designing and developing a personalized
                  portfolio website for a distinguished doctor. The project was
                  focused on creating an elegant, user-friendly platform that
                  effectively showcased the doctor&apos;s expertise,
                  accomplishments, and medical services. By closely working with
                  the doctor to capture their vision, I created a website that
                  not only looks professional but also provides patients with a
                  seamless and informative experience.
                </p>
              </div>
            </a>
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
                  delay: 2.8
                }
              }
            }}
          >
            <a href="https://appli.successco.africa/">
              <div className="w-auto h-auto duration-100 delay-150 shadow-2xl bg-slate-900/60 rounded-xl shadow-slate-800/50 hover:-translate-y-1 hover:scale-110 hover:bg-slate-600/60 ">
                <Image
                  src="/succesSco.png"
                  width={500}
                  height={500}
                  alt="Succesco"
                  className="object-cover w-full"
                />
                <h2 className="mx-3 mt-2 text-2xl text-white">SuccèsSco</h2>
                <h3 className="mx-3 mb-3 font-bold">Dec - 2024</h3>
                <p className="p-3">
                  SuccèsSco is a web application developed for Révélateur SA
                  Bénin, aimed at providing parents with a platform to track and
                  monitor their children&apos;s academic progress. I had the
                  opportunity to work as a web developer, collaborating with a
                  designer to implement the UI based on provided mockups and
                  with my supervisor for data management. This project allowed
                  me to deepen my knowledge of Tailwind CSS and improve my
                  skills in web development, all while contributing to an
                  important educational tool.
                </p>
              </div>
            </a>
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
                  delay: 2.8
                }
              }
            }}
          >
            <a href="https://tipiac-agency.vercel.app/">
              <div className="w-auto h-auto duration-100 delay-150 shadow-2xl bg-slate-900/60 rounded-xl shadow-slate-800/50 hover:-translate-y-1 hover:scale-110 hover:bg-slate-600/60 ">
                <Image
                  src="/tourism.png"
                  width={500}
                  height={500}
                  alt="Tourism"
                  className="object-cover w-full"
                />
                <h2 className="mx-3 mt-2 text-2xl text-white">
                  Tourism Tipiac-Agency
                </h2>
                <h3 className="mx-3 mb-3 font-bold">Jan - 2024</h3>
                <p className="p-3">
                  Tourism Tipiac-Agency is a website I developed for a group of
                  students who wanted to present an exhibition on the
                  &quote;Road of Fish&quote;. The project was time-sensitive, so
                  the focus was primarily on delivering the site quickly, which
                  limited the opportunity to fully optimize the user experience
                  for a tourism website. However, I am committed to improving
                  the site by adding more content and refining its design. You
                  will undoubtedly see updates in the near future.
                </p>
              </div>
            </a>
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
                  delay: 2.8
                }
              }
            }}
          >
            <a href="https://dossoumarcel.vercel.app/">
              <div className="w-auto h-auto duration-100 delay-150 shadow-2xl bg-slate-900/60 rounded-xl shadow-slate-800/50 hover:-translate-y-1 hover:scale-110 hover:bg-slate-600/60 ">
                <Image
                  src="/laundgram.png"
                  width={500}
                  height={500}
                  alt="vroc-creation"
                  className="object-cover w-full"
                />
                <h2 className="mx-3 mt-2 text-2xl text-white">Laundgram</h2>
                <h3 className="mx-3 mb-3 font-bold">Feb - 2024</h3>
                <p className="p-3">
                  Laundgram is a web application designed by me for managing
                  laundry services. It allows users to generate accurate
                  invoices, send them via WhatsApp for quick payments, and track
                  orders seamlessly. With features like transaction history,
                  notifications, and order status updates, Laundgram ensures a
                  smooth and efficient experience for both service providers and
                  their customers. The app is set to be completed and delivered
                  by the end of March 2024.
                </p>
              </div>
            </a>
          </motion.div>
        </div>
        <section class="mb-8 p-6 duration-100 delay-150 bg-slate-900/50 rounded-lg shadow-lg w-full mx-auto hover:bg-slate-600/60 shadow-slate-800/50 hover:-translate-y-1 hover:scale-100">
          <h2 class="text-3xl text-white font-semibold text-center mb-6">
            My Journey and Continuous Growth
          </h2>
          <p class="text-lg text-white leading-relaxed">
            Throughout my university studies, I focused primarily on web
            technologies, which led me to work on numerous projects. While I
            still don't consider myself an expert in web development, this
            journey has been an incredible learning experience. I&apos;m
            continuously developing personal projects that will soon be added to
            my portfolio as they are completed, all with the goal of improving
            my skills and expertise. Once I&apos;ve fully explored the web
            technologies, I plan to venture into new domains, always aiming to
            bring my personal projects to life. You will see updates in my
            portfolio as I reach new milestones along this exciting path.
          </p>
        </section>
      </div>
      <div className="relative bottom-0 flex flex-row items-center justify-center w-full h-auto gap-3 p-3 ">
        <a
          href="https://www.facebook.com/profile.php?id=100084755843013"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white "
        >
          <FontAwesomeIcon className="size-8" icon={faFacebook} />
        </a>
        <a
          href="https://www.instagram.com/rayague03?igsh=MTg3eWNnN2hzdnI0Zg=="
          target="_blank"
          rel="noopener noreferrer"
          className="text-white "
        >
          <FontAwesomeIcon className="size-8" icon={faInstagram} />
        </a>
        <a
          href="https://www.linkedin.com/in/ray-ague-2066b4247?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white "
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
      <p className="mt-4 mb-8 text-sm text-center text-white">
        © copyright -{" "}
        <Link href="https://portfolio-cnkp.vercel.app">Ray Ague</Link> All
        rights reserved.
      </p>
    </main>
  );
}
