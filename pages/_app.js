import { useState, useEffect, useRef } from "react";
import useMouse from "@react-hook/mouse-position";
import localFont from 'next/font/local'

const France = localFont({
    src: '../src/fonts/France/France.ttf',
    weight: '400',
    variable: '--font-france'
})

const Adam = localFont({
    src: [
        {
            path: '../src/fonts/Adam/Adam-Light.ttf',
            weight: '200'
        },
        {
            path: '../src/fonts/Adam/Adam-Medium.ttf',
            weight: '500'
        },
        {
            path: '../src/fonts/Adam/Adam-Bold.ttf',
            weight: '700'
        }
    ],
    variable: '--font-adam'
})

import { motion, useTransform, AnimatePresence } from "framer-motion";

import { LocomotiveScrollProvider } from 'react-locomotive-scroll'

import "../styles/global.css";
import "tailwindcss/tailwind.css";
import SmoothScrolling from "../components/SmoothScrolling/smoothScrolling";

import MyContext from "../context/myContext"
import { CursorProvider } from "../context/CursorContext";

export default function App({ Component, pageProps, router }) {
    const [gooInSession, setGooInSession] = useState({ id: "" })
    const [cursorText, setCursorText] = useState("");
    const [cursorVariant, setCursorVariant] = useState("default");

    const ref = useRef(null);
    const mouse = useMouse(ref, {
        enterDelay: 0,
        leaveDelay: 0
    });

    let mouseXPosition = 0;
    let mouseYPosition = 0;

    if (mouse.x !== null) {
        mouseXPosition = mouse.clientX;
    }

    if (mouse.y !== null) {
        mouseYPosition = mouse.clientY;
    }

    const variants = {
        default: {
            opacity: 1,
            height: 10,
            width: 10,
            fontSize: "16px",
            backgroundColor: "#555",
            x: mouseXPosition,
            y: mouseYPosition,
            transition: {
                type: "spring",
                mass: 0.5
            }
        },
        hoverable: {
            opacity: 1,
            // backgroundColor: "rgba(255, 255, 255, 0.6)",
            backgroundColor: "#b37dff",
            color: "#fff001",
            height: 20,
            width: 20,
            fontSize: "18px",
            x: mouseXPosition - 15,
            y: mouseYPosition - 15
        },
        hoverableAlt: {
            opacity: 1,
            // backgroundColor: "rgba(255, 255, 255, 0.6)",
            backgroundColor: "#76f7ae",
            height: 35,
            width: 35,
            x: mouseXPosition - 32,
            y: mouseYPosition - 32
        },
        contact: {
            opacity: 1,
            backgroundColor: "#ff5454",
            color: "#000",
            height: 64,
            width: 64,
            fontSize: "32px",
            x: mouseXPosition - 48,
            y: mouseYPosition - 48
        },

        photo: {
            opacity: 1,
            backgroundColor: "#b37dff",
            color: "#000",
            height: 64,
            width: 64,
            fontSize: "32px",
            x: mouseXPosition - 48,
            y: mouseYPosition - 48
        }
    };

    const spring = {
        type: "spring",
        stiffness: 500,
        damping: 28
    };
    return (
        <div ref={ref} className={`${France.className + Adam.className} font-sans`}>
            <MyContext.Provider value={{ state: gooInSession, setState: setGooInSession }}>
                <CursorProvider
                    cursorText={cursorText}
                    setCursorText={setCursorText}
                    cursorVariant={cursorVariant}
                    setCursorVariant={setCursorVariant}
                >
                    <motion.div
                        variants={variants}
                        className="circle"
                        animate={cursorVariant}
                        transition={spring}
                    >
                        <span className="cursorText">{cursorText}</span>
                    </motion.div>

                    <AnimatePresence mode="popLayout" initial={false}>
                        <SmoothScrolling>
                            <div id="drawer"></div>
                            <Component {...pageProps} key={router.asPath} />
                        </SmoothScrolling>
                    </AnimatePresence>
                </CursorProvider>
            </MyContext.Provider>
        </div>
    );
}