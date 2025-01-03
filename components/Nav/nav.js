"use client";
import { useState, useEffect } from "react";
import Drawer from "../Drawer/drawer";
import Image from "next/image";
import Link from "next/link";
import { faLinkedin, faGithub, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { usePathname } from "next/navigation";
import { useCursor } from "../../context/CursorContext";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHomeAlt } from "@fortawesome/free-solid-svg-icons";

const infoImg = require("../../src/img/info_img.svg");

export default function Nav() {
  const { setCursorText, setCursorVariant } = useCursor();
  const [isDrawerActive, setIsDrawerActive] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false); // Estado para manejar el fondo del navbar
  const path = usePathname();

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 120) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function linkEnter() {
    setCursorText("");
    setCursorVariant("hoverable");
  }

  function linkLeave() {
    setCursorText("");
    setCursorVariant("default");
  }

  function availableEnter() {
    setCursorText("");
    setCursorVariant("hoverableAlt");
  }

  function availableLeave() {
    setCursorText("");
    setCursorVariant("default");
  }

  const links = [
    {
      path: "/",
      text: "Home",
    }
  ];

  return (
    <div
      className={`fixed left-0 top-0 z-40 w-full h-20 sm:h-24 xl:h-28 2xl:h-32 flex justify-center items-center transition-colors duration-300 ${isScrolled ? "bg-dark" : "bg-transparent"}`}
    >
      <nav className="w-full h-full px-4 md:px-12 flex justify-between items-center">

        {path == "/" && (
          <Link
            onMouseEnter={linkEnter}
            onMouseLeave={linkLeave}
            href="/portfolio"
            className="text-4xl sm:text-5xl xl:text-7xl font-France text-primary"
          >
            WORK
          </Link>
        )}
        {path !== "/" && (
          <Link
            onMouseEnter={linkEnter}
            onMouseLeave={linkLeave}
            href="/"
            className="text-4xl sm:text-5xl xl:text-7xl font-France text-primary"
          >
            HOME
          </Link>
        )}
        <div className="flex flex-col items-center">


          <Link
            href={`${links[0].path}#contact`}
            onMouseEnter={availableEnter}
            onMouseLeave={availableLeave}
            className={`${isScrolled ? 'text-primary' : 'text-light'} text-md font-Adam hidden sm:flex justify-center items-center`}
          >
            AVAILABLE FOR WORK
          </Link>

        </div>

        <button
          onMouseEnter={linkEnter}
          onMouseLeave={linkLeave}
          onClick={() => setIsDrawerActive(true)}
          className="text-4xl sm:text-5xl xl:text-7xl font-France text-primary"
        >
          INFO
        </button>
        <Drawer active={isDrawerActive} setActive={setIsDrawerActive}>
          <h1
            className={`text-right break-word leading-8 text-5xl 2xl:text-8xl`}
          >
            Oscar Rojas
            <br />
          </h1>
          <p className={`text-white font-bold text-right text-sm md:text-base`}>
            Web developer / Film photographer
          </p>
          <div className="flex flex-col justify-end text-right items-end w-full xl:w-5/6 2xl:w:4/6 mt-3x">
            <div className="py-2 hover:bg-transparent lg:hover:bg-[rgba(255,255,255,0.5)] hover:px-0 lg:hover:px-4 flex flex-col items-end hover:-translate-x-0 lg:hover:-translate-x-12 transition-all duration-300">
              <h3 className="text-accent font-bold">FRONTEND DEVELOPER</h3>
              <p className={`w-full md:w-5/6 2xl:w-4/6 text-sm my-1 md:my-2 text-right font-bold`}>
                Building email campaigns using HTML5 + Braze, creating animated banners using Javascript libraries such as GSAP and continuous maintenance of a code that optimizes these processes.
                <br />
                (Spain client) - (Medellín, Antioquia - Colombia)
              </p>
              <h6 className={`text-warning text-sm font-semibold`}>
                DDB Colombia
                <br />
                Jun. 2023 - Present
              </h6>
            </div>
            <div className="py-2 hover:bg-transparent lg:hover:bg-[rgba(255,255,255,0.5)] hover:px-0 lg:hover:px-4 flex flex-col items-end hover:-translate-x-0 lg:hover:-translate-x-12 transition-all duration-300">
              <h3 className="text-accent font-bold">WEB DEVELOPER</h3>
              <p className={`w-full md:w-5/6 2xl:w-4/6 text-sm my-1 md:my-2 text-right font-bold`}>
                Developing and integrating user interfaces using programming languages and new frontend technologies as HTML + CSS, Javascript, ReacJS, Tailwind, Webpack, AWS (S3, EC2, Cloudfront), Git and others.
                <br />
                (Bilingual) - (Austin, Texas - USA)
              </p>
              <h6 className={`text-warning text-sm font-semibold`}>
                Howdy Inc.
                <br />
                Mar. 2022 - Jan. 2023
              </h6>
            </div>
            <div className="py-2 hover:bg-transparent lg:hover:bg-[rgba(255,255,255,0.5)] hover:px-0 lg:hover:px-4 hidden sm:flex flex-col items-end hover:-translate-x-0 lg:hover:-translate-x-12 transition-all duration-300">
              <h3 className="text-accent font-bold">FRONTEND DEVELOPER</h3>
              <p className={`w-5/6 2xl:w-4/6 text-sm my-1 md:my-2 text-right font-bold`}>
                Design, develop and manage companie's partnerships websites (33). Create and customize Wordpress plugins and themes. Building responsive layouts using Wordpress, HTML, CSS, Javascript, React, GIT and PHP.
                <br />
                (Bilingual) - (Medellin, Antioquia)
              </p>
              <h6 className={`text-warning text-sm font-semibold`}>
                Solvo Global
                <br />
                Jul. 2020 - Mar. 2022
              </h6>
            </div>

          </div>
          <div className=" absolute bottom-8 right-8 w-full flex gap-8 justify-end items-center order-3">
            <h6>Found me at:</h6>
            <Link href="https://linkedin.com/in/eldesernauta" target="_blank">
              <FontAwesomeIcon
                onMouseEnter={linkEnter}
                onMouseLeave={linkLeave}
                icon={faLinkedin}
                className="text-dark hover:text-accent transition-colors duration-700"
                style={{ fontSize: 30 }}
              />
            </Link>
            <Link href="https://github.com/eldesernauta" target="_blank">
              <FontAwesomeIcon
                onMouseEnter={linkEnter}
                onMouseLeave={linkLeave}
                icon={faGithub}
                className="text-dark hover:text-accent transition-colors duration-700"
                style={{ fontSize: 30 }}
              />
            </Link>
            <Link href="https://instagram.com/eldesernauta" target="_blank">
              <FontAwesomeIcon
                onMouseEnter={linkEnter}
                onMouseLeave={linkLeave}
                icon={faInstagram}
                className="text-dark hover:text-accent transition-colors duration-700"
                style={{ fontSize: 30 }}
              />
            </Link>
          </div>
          <Image
            src={infoImg}
            className={`z-0 w-[35%] block absolute bottom-10 2xl:bottom-20 left-[30%] sm:left-0 xl:left-2`}
            alt="Portrait"
          />
        </Drawer>
      </nav>
    </div>
  );
}
