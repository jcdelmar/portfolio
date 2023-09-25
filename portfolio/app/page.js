"use client";
import { useState } from "react";
import Head from "next/head";
import { BsFillMoonStarsFill } from "react-icons/bs";
import {
  AiFillLinkedin,
  AiFillTwitterCircle,
  AiFillFacebook,
  AiFillFileText,
} from "react-icons/ai";

import Image from "next/image";

import capyNoBg from "../public/capyNoBg.png";
import accenture from "../public/accenture.png";
import hatchit from "../public/hatchit.png";

//tech stack
import codeigniter from "../public/codeigniter.svg";
import bootstrap from "../public/bootstrap.png";
import mysql from "../public/mysql.png";
import node from "../public/node.png";
import node2 from "../public/node2.png";
import php from "../public/php.png";
import react from "../public/react.png";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const resumeURL = "/resume.pdf";

  const App = () => {};

  return (
    <div className={darkMode ? "dark" : ""}>
      <Head></Head>
      <main className="bg-white px-10 dark:bg-gray-900">
        <section className="">
          <nav className="py-10 mb-12 flex justify-between">
            <h1 className="text-3xl font-mono dark:text-gray-200">JCDM</h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill
                  onClick={() => {
                    setDarkMode(!darkMode);
                    console.log("Dark Mode toggled.");
                  }}
                  className="cursor-pointer text-xl dark:text-gray-200"
                />
              </li>
              <li>
                <a
                  className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8"
                  href="/resume.pdf"
                  target="_blank"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>

          <div className="text-center p-10">
            <h2 className="text-5xl py-2 text-teal-600 dark:text-teal-400">
              John del Mar
            </h2>
            <h3 className="text-2xl py-2 dark:text-gray-100">
              Software Developer
            </h3>
            <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200">
              Hi! I'm a full-stack software developer specializing in developing
              applications using Javascript and PHP.
            </p>
          </div>

          <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600">
            <a href="https://twitter.com/jcdelmar7" target="_blank">
              <AiFillTwitterCircle className="dark:text-gray-300" />
            </a>
            <a
              href="https://www.linkedin.com/in/john-clarence-del-mar-034b06215/"
              target="_blank"
            >
              <AiFillLinkedin className="dark:text-gray-300" />
            </a>
            <a href="https://www.facebook.com/jcdelmar7/" target="_blank">
              <AiFillFacebook className="dark:text-gray-300" />
            </a>
          </div>
          <div className="relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20">
            <Image src={capyNoBg} fill objectFit="cover" />
          </div>
        </section>

        <div class="inline-flex items-center justify-center w-full">
          <hr class="w-64 h-1 my-8 bg-gray-200 border-0 rounded dark:bg-gray-700" />
          <div class="absolute px-4 -translate-x-1/2 bg-white left-1/2 dark:bg-gray-900">
            <svg
              aria-hidden="true"
              class="w-5 h-5 text-gray-700 dark:text-gray-300"
              viewBox="0 0 24 27"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
                fill="currentColor"
              />
            </svg>
          </div>
        </div>

        <section className="mt-14">
          <div className="px-20">
            <h3 className="text-3xl py-1 dark:text-gray-200">About</h3>
            <p className="text-md py-2 leading-6 text-gray-800 dark:text-gray-300">
              I am a highly motivated professional with a Bachelor's degree in{" "}
              <span className="text-cyan-500 dark:text-cyan-400">
                Information Technology
              </span>
              . My journey in the tech industry began as a software engineering
              intern at{" "}
              <span className="text-cyan-500 dark:text-cyan-400">
                {" "}
                Hatchit Solutions
              </span>
              , where I gained hands-on experience and deepened my skills in
              Full-Stack Development. After proving my abilities, I was offered
              a full-time position as a Full-Stack Developer. During my time at
              Hatchit Solutions, I worked on various projects utilizing the
              Codeigniter framework, PHP, jQuery, JavaScript, and AJAX. Seeking
              further growth and challenges, I later joined{" "}
              <span className="text-cyan-500 dark:text-cyan-400">
                {" "}
                Accenture Inc.
              </span>{" "}
              as an Associate Software Engineer. In this role, I specialized in
              React.js and Node development, contributing to the development of
              innovative solutions.
            </p>
          </div>
        </section>

        <section className="mt-14">
          <div className="px-20">
            <h3 className="text-3xl py-1 dark:text-gray-200">Experience</h3>

            <div className="pt-4">
              <h3 className="text-xl text-cyan-500">
                Associate Software Engineer
              </h3>
              <h4 className="text-sm dark:text-gray-300">Accenture Inc.</h4>
              <h4 className="text-gray-500 text-xs">09/2021 - 10/2022</h4>
              <h4 className="text-m mt-2 leading-6 dark:text-gray-200">
                I gained valuable experience as a React.js and Node developer at
                Accenture Inc. and later joined the Google team, leveraging my
                technical expertise. Thriving in fast-paced environments, I
                continually sought new challenges and opportunities to grow.
              </h4>
            </div>

            <div className="pt-8">
              <h3 className="text-xl text-cyan-500">Full-Stack Developer</h3>
              <h4 className="text-sm dark:text-gray-300">HatchIT Solutions</h4>
              <h4 className="text-gray-500 text-xs">5/2020 - 8/2020</h4>
              <h4 className="text-m mt-2 leading-6 dark:text-gray-200">
                I transitioned from an internship to a full-time role as a
                full-stack developer at Hatchit Solutions, working on multiple
                projects. This experience enhanced my skills and prepared me for
                diverse challenges in software development.
              </h4>
            </div>

            <div className="pt-8">
              <h3 className="text-xl text-cyan-500">
                Software Developer Intern
              </h3>
              <h4 className="text-sm dark:text-gray-300">HatchIT Solutions</h4>
              <h4 className="text-gray-500 text-xs">1/2020 - 5/2020</h4>
              <h4 className="text-m mt-2 leading-6 dark:text-gray-200">
                As a software development intern at Hatchit Solutions, I had the
                opportunity to work on my first project using PHP, CodeIgniter,
                jQuery, and AJAX. This hands-on experience deepened my
                understanding of these technologies and sparked my passion for
                web development.
              </h4>
            </div>
          </div>
        </section>

        <section className="mt-14">
          <div className="px-20">
            <h3 className="text-3xl py-1 dark:text-gray-200">Tech Stack</h3>
          </div>

          {/* <div className="px-40">
            <div className="flex flex-row mt-6">
              <div className="pr-6">
                <Image src={bootstrap} className="object-fill w-20 h-20" />
              </div>
              <div className="pr-6">
                <Image src={php} className="object-fill w-20 h-20" />
              </div>
              <div className="pr-6">
                <Image src={codeigniter} className="object-fill w-20 h-20" />
              </div>
              <div className="pr-6">
                <Image src={react} className="object-fill w-20 h-30 " />
              </div>
              <div className="pr-6">
                <Image src={node2} className="object-fill w-20 h-20" />
              </div>

              <div className="pr-6">
                <Image src={mysql} className="object-fill w-20 h-20 " />
              </div>
            </div>
          </div> */}

          <div className="mx-20 flex flex-row mt-10">
            <div className="w-1/6 ">
              {" "}
              <Image src={react} className="object-fill w-full h-full p-8" />
            </div>
            <div className="w-1/6 ">
              {" "}
              <Image src={node2} className="object-fill w-full h-full p-8" />
            </div>
            <div className="w-1/6  ">
              {" "}
              <Image src={mysql} className="object-fill w-full h-full  p-8" />
            </div>
            <div className="w-1/6  ">
              {" "}
              <Image
                src={codeigniter}
                className="object-fill w-full h-full p-8"
              />
            </div>
            <div className="w-1/6  ">
              {" "}
              <Image
                src={bootstrap}
                className="object-fill w-full h-full p-8"
              />
            </div>
            <div className="w-1/6  ">
              {" "}
              <Image src={php} className="object-fill w-full h-full p-8" />
            </div>
          </div>
        </section>

        <footer class="bg-neutral-200 text-center dark:bg-blue-950 lg:text-left mt-10">
          <div class="p-4 text-center text-neutral-700 dark:text-neutral-200">
            John del Mar :{" "}
            <a
              class="text-neutral-800 dark:text-neutral-400"
              href="https://tailwind-elements.com/"
            >
              contactjohndelmar@gmail.com
            </a>
          </div>
        </footer>
      </main>
    </div>
  );
}
