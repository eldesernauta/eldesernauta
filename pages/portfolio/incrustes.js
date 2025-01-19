import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import Link from "next/link";
import Image from "next/image";

import { useCursor } from "../../context/CursorContext";

import Nav from "../../components/Nav/nav";
import Footer from "../../components/Footer/footer";

import challenge from '../../src/img/incrustes_challenge.jpg';
import process from '../../src/img/incrustes_process.jpg';
import solution from '../../src/img/incrustes_solution.png';
import result from '../../src/img/incrustes_result.png';

let tabs = [
    { id: "desafio", label: "Challenge" },
    { id: "proceso", label: "Process" },
    { id: "solucion", label: "Solution" },
    { id: "resultado", label: "Result" },
];

const Incrustes = () => {
    const { setCursorText, setCursorVariant } = useCursor();
    const [activeTab, setActiveTab] = useState(tabs[0].id);

    const section1Ref = useRef(null);
    const section2Ref = useRef(null);
    const section3Ref = useRef(null);
    const section4Ref = useRef(null);

    function sectionEnter() {
        setCursorText("");
        setCursorVariant("hoverable");
    }

    function sectionLeave() {
        setCursorText("");
        setCursorVariant("default");
    }

    function prevEnter() {
        setCursorText("Prev");
        setCursorVariant("cases");
    }

    function prevLeave() {
        setCursorText("");
        setCursorVariant("default");
    }

    function handleClick() {
        setCursorText("");
        setCursorVariant("default");
    }

    const handleTabChange = (tabId) => {
        setActiveTab(tabId);

        const sections = {
            desafio: section1Ref.current,
            proceso: section2Ref.current,
            solucion: section3Ref.current,
            resultado: section4Ref.current,
        };

        const activeSection = sections[tabId];

        gsap.to(Object.values(sections), {
            duration: 0.1,
            opacity: 1,
            x: "-110%",
            onComplete: () => {
                gsap.set(activeSection, { opacity: 1, x: "100%" });
                gsap.to(activeSection, { duration: 0.3, opacity: 1, x: "0%" });
            }
        });
    };

    return (
        <>
            <Nav />
            <section className="bg-white pt-40 lg:pt-48 flex flex-col gap-12 pb-0">
                <div className="container mx-auto flex flex-col gap-8 justify-start items-start px-5 sm:px-0 lg:px-5 2xl:px-0">
                    <h1 className="text-dark font-Unbounded text-left text-4xl sm:text-5xl lg:text-6xl font-bold leading-[30px] md:leading-[60px] w-full">
                        Incrustes case study
                    </h1>
                    <h3 className="text-2xl font-bold text-dark">Transforming vision into interactive excellence</h3>
                    <p className="text-black text-lg text-justify font-Adam">In collaboration with <strong>Incrustes</strong> (Andres Sanchez), a talented UX/UI designer, I developed a website that flawlessly captured the bold and creative essence of his Figma prototype. Utilizing <strong>React, Tailwind, GSAP</strong>, and <strong>Framer Motion</strong>, we created an immersive and highly interactive site that stands out for its sleek functionality and thoughtful design elements.</p>
                </div>
                <div className="hidden lg:block container mx-auto z-10 p-0 px-5 pb-0">
                    <iframe src="https://incrustesdesign.com" frameBorder="0" width="100%" height="800px" allowFullScreen className="rounded-xl"></iframe>
                </div>
                <div className="block lg:hidden container mx-auto z-10 p-0 px-5 pb-0">
                    <iframe src="https://incrustesdesign.com" frameBorder="0" width="100%" allowFullScreen className="h-[600px] sm:h-[800px] md:h-[900px] rounded-xl"></iframe>
                </div>
            </section>

            <div className="w-full h-[50vh] lg:h-[60vh] bg-[#BDFA03] -mt-[40vh] lg:-mt-[50vh]"></div>

            <section className="h-auto min-h-[80vh] bg-dark transition-colors duration-300 w-full flex flex-col justify-start items-center py-12 lg:py-24 2xl:py-40 px-5 2xl:px-0 gap-24 ">
                <div className="container mx-auto flex flex-col justify-center items-center text-center z-10">
                    <div className="w-auto px-2 md:px-12 py-2 rounded-full flex justify-center items-center gap-2 md:gap-12 border md:border-2 bg-dark  border-white">
                        {tabs.map((tab) => (
                            <button
                                key={tab.id}
                                onMouseEnter={sectionEnter}
                                onMouseLeave={sectionLeave}
                                onClick={() => handleTabChange(tab.id)}
                                className={`${activeTab === tab.id ? "" : "hover:text-white/60"} relative font-Adam font-Medium rounded-full px-3 py-1.5 text-xs md:text-sm font-medium text-white font-Montserrat outline-sky-400 transition focus-visible:outline-2`}
                                style={{ WebkitTapHighlightColor: "transparent" }}
                            >
                                {activeTab === tab.id && (
                                    <motion.span
                                        layoutId="bubble"
                                        className="absolute inset-0 z-10 bg-warning mix-blend-difference"
                                        style={{ borderRadius: 9999 }}
                                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                    />
                                )}
                                {tab.label}
                            </button>
                        ))}
                    </div>
                </div>
                <div className="container mx-auto flex flex-col items-center">
                    <motion.div
                        ref={section1Ref}
                        className={`container flex flex-col-reverse lg:flex-row items-top justify-center gap-8 md:gap-20 mx-auto overflow-hidden ${activeTab === "desafio" ? "block" : "hidden"}`}
                    >
                        <div className="w-6/6 lg:w-3/6 flex flex-col items-start justify-center gap-5">
                            <h3 className="text-2xl text-center lg:text-left w-full font-bold text-white">Challenge</h3>
                            <p className="text-white text-center lg:text-justify text-lg font-Adam">The primary challenge for this project was implementing a <strong>horizontal scroll cards section</strong> that relied on natural scroll interactions. The goal was to ensure smooth functionality across devices while maintaining a fully responsive design. Additionally, the project required unique features such as a <strong>custom pointer, stylized text selection</strong>, a <strong>custom scroll bar</strong>, a creative <strong>404 page</strong>, and seamless integration of a form powered by the EmailJS API.</p>
                        </div>
                        <div className="w-6/6 lg:w-3/6 flex items-center justify-center">
                            <Image
                                src={challenge}
                                className=""
                                alt='challenge'
                            />
                        </div>
                    </motion.div>
                    <motion.div
                        ref={section2Ref}
                        className={`container flex flex-col-reverse lg:flex-row items-top justify-center gap-8 md:gap-20 mx-auto overflow-hidden ${activeTab === "proceso" ? "block" : "hidden"}`}
                    >
                        <div className="w-6/6 lg:w-3/6 flex flex-col items-start justify-center gap-5">
                            <h3 className="text-2xl text-center lg:text-left w-full font-bold text-white">Process</h3>
                            <ol className="list-decimal">
                                <li className="text-white text-center lg:text-justify text-lg my-2 font-Adam"><strong>Prototype analysis: </strong>
                                    I meticulously reviewed the Figma prototype, paying close attention to the interactive elements, animations, and stylistic details.</li>
                                <li className="text-white text-center lg:text-justify text-lg my-2 font-Adam"><strong>Core technologies: </strong>
                                    <ul className="list-disc">
                                        <li><strong>&#8729; React</strong> was chosen for its component-based architecture and reusability.</li>
                                        <li><strong>&#8729; Tailwind CSS</strong> ensured a streamlined styling process with a utility-first approach.</li>
                                        <li><strong>&#8729; GSAP</strong> and <strong>Framer Motion</strong> powered the animations, providing smooth transitions and engaging interactions.</li>
                                    </ul>
                                </li>
                                <li className="text-white text-center lg:text-justify text-lg my-2 font-Adam"><strong>Horizontal scroll implementation: </strong>
                                    The horizontal scroll cards section was built using a combination of CSS and JavaScript, carefully optimized to deliver a smooth scrolling experience.</li>
                                <li className="text-white text-center lg:text-justify text-lg my-2 font-Adam"><strong>Custom features: </strong>
                                    Elements like the text selection, scroll bar, and custom pointer were designed to enhance the overall experience, aligning perfectly with the project’s creative vision.</li>
                            </ol>
                        </div>
                        <div className="w-6/6 lg:w-3/6 flex items-center justify-center">
                            <Image
                                src={process}
                                className=""
                                alt='process'
                            />
                        </div>
                    </motion.div>

                    <motion.div
                        ref={section3Ref}
                        className={`container flex flex-col-reverse lg:flex-row items-top justify-center gap-8 md:gap-20 mx-auto overflow-hidden ${activeTab === "solucion" ? "block" : "hidden"}`}
                    >
                        <div className="w-6/6 lg:w-3/6 flex flex-col items-start justify-center gap-5">
                            <h3 className="text-2xl text-center lg:text-left w-full font-bold text-white">Solution</h3>
                            <p className="text-white text-center lg:text-justify text-lg font-Adam">By leveraging a robust tech stack and adhering to meticulous design principles, I successfully implemented the horizontal scroll section and stylized features. The EmailJS API was integrated seamlessly into the form, ensuring efficient and reliable communication. Every detail, from animations to navigation, was optimized for a responsive and immersive user experience.</p>
                        </div>
                        <div className="w-6/6 lg:w-3/6 flex items-center justify-center">
                            <Image
                                src={solution}
                                className=""
                                alt='solution'
                            />
                        </div>
                    </motion.div>

                    <motion.div
                        ref={section4Ref}
                        className={`container flex flex-col-reverse lg:flex-row items-top justify-center gap-8 md:gap-20 mx-auto overflow-hidden ${activeTab === "resultado" ? "block" : "hidden"}`}
                    >
                        <div className="w-6/6 lg:w-3/6 flex flex-col items-start justify-center gap-5">
                            <h3 className="text-2xl text-center lg:text-left w-full font-bold text-white">Result</h3>
                            <p className="text-white text-center lg:text-justify text-lg font-Adam">The final product is a visually striking, interactive website that highlights <strong>Incrustes</strong>’ creative vision. The horizontal scroll section works flawlessly, and the additional design touches, such as the custom pointer and 404 page, elevate the site’s uniqueness. This project stands as a testament to the power of collaboration and attention to detail.</p>
                        </div>
                        <div className="w-6/6 lg:w-3/6 flex items-center justify-center">
                            <Image
                                src={result}
                                className=""
                                alt='result'
                            />
                        </div>
                    </motion.div>

                </div>
            </section>
            <section className="w-full max-w-full bg-dark flex flex-col px-4 2xl:px-0 pt-12">
                <div className="container mx-auto z-10 flex justify-between items-center">
                    <Link
                        onMouseEnter={prevEnter}
                        onMouseLeave={prevLeave}
                        onClick={handleClick}
                        href={'/portfolio/ddb'} className="w-16 sm:w-24 h-16 sm:h-24 bg-primary rounded-full flex justify-center items-center text-2xl text-dark md:text-4xl">
                        &#8592;
                    </Link>
                    <Link
                        onMouseEnter={sectionEnter}
                        onMouseLeave={sectionLeave}
                        onClick={handleClick}
                        href={'/portfolio/'} className="font-France uppercase text-4xl sm:text-5xl text-primary md:text-7xl">
                        All cases
                    </Link>
                </div>
            </section>
            <Footer />
        </>
    );
};

export default Incrustes;