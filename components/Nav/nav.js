"use client";
import { useState, useEffect } from "react";
import Drawer from "../Drawer/drawer";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCursor } from "../../context/CursorContext";
import useDarkMode from '../utils/useDarkMode';

const infoImg = require("../../src/img/info_img.svg");

export default function Nav() {
  const { setCursorText, setCursorVariant } = useCursor();
  const [isDrawerActive, setIsDrawerActive] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false); // Estado para manejar el fondo del navbar
  const path = usePathname();

  const { isDarkMode, toggleDarkMode } = useDarkMode();

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
        <Link
          onMouseEnter={linkEnter}
          onMouseLeave={linkLeave}
          href="portfolio"
          className="text-4xl sm:text-5xl xl:text-7xl font-France text-primary"
        >
          WORK
        </Link>

        <div className="flex flex-col items-center">
          <Link
            href={`${links[0].path}#contact`}
            onMouseEnter={availableEnter}
            onMouseLeave={availableLeave}
            className={`${isScrolled ? 'text-primary' : 'text-dark'} text-md font-Adam hidden sm:flex justify-center items-center`}
          >
            AVAILABLE FOR WORK
          </Link>
          {path !== "/" && (
            <Link
              href="/"
              onMouseEnter={linkEnter}
              onMouseLeave={linkLeave}
              className="mt-2 text-primary font-bold hover:underline"
            >
              &#x27F5; Go Home
            </Link>
          )}
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
            className={`text-right break-word leading-8 text-3xl md:text-4xl xl:text-5xl 2xl:text-8xl`}
          >
            OscarRojas
          </h1>
          <p className={`subtitle text-right text-sm md:text-base`}>
            WebDeveloper / Photographer
          </p>
          <p
            className={`z-10 w-[70%] block text-right max-xxs:text-xs text-sm md:text-base mt-3 text-neutral-100`}
          >
            Colombian-born publicist focused on development. Big sense of
            responsibility, leadership oriented and really good communicative
            skills that highlights my great team work. Not only that, my
            artish background helps me to create pretty impressive layouts in
            detail.
          </p>
          <Image
            src={infoImg}
            className={`z-0 w-[35%] block absolute -bottom-0 left-2`}
            alt="Portrait"
          />
        </Drawer>
      </nav>
    </div>
  );
}
