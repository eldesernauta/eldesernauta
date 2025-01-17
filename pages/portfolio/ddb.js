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

import mainImg from '../../src/img/ddb_card.png';

import challenge from '../../src/img/ddb_challenge.jpg';
import process from '../../src/img/ddb_process.png';
import solution from '../../src/img/ddb_solution.jpg';
import result1 from '../../src/img/ddb_result_1.jpg';
import result2 from '../../src/img/ddb_result_2.jpg';
import result3 from '../../src/img/ddb_result_3.jpg';

import 'swiper/css';
import 'swiper/css/pagination';

let tabs = [
    { id: "desafio", label: "Challenge" },
    { id: "proceso", label: "Process" },
    { id: "solucion", label: "Solution" },
    { id: "resultado", label: "Result" },
];

const DDB = () => {
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

    function nextEnter() {
        setCursorText("Next");
        setCursorVariant("cases");
    }

    function nextLeave() {
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
                        DDB Colombia case study
                    </h1>
                    <h3 className="text-2xl font-bold text-dark">Crafting innovation for globally recognized brands</h3>
                    <p className="text-black text-lg text-justify font-Adam">During my time at <strong>DDB Colombia</strong>, I had the privilege of working with iconic brands like Audi, Estée Lauder, and Tom Ford. These experiences sharpened my attention to detail and equipped me to tackle complex challenges in the fast-paced world of advertising. One standout project was developing DDB Colombia's main landing page—a showcase of creativity and precision.</p>
                </div>
                <div className="hidden lg:block container mx-auto z-10 p-0 px-5 pb-0">
                    <iframe src="https://ddbcol.com.co" frameBorder="0" width="100%" height="800px" allowFullScreen className="rounded-xl"></iframe>
                </div>
                <div className="block lg:hidden container mx-auto z-10 p-0 px-5 pb-0">
                    <Image
                        src={mainImg}
                        autoPlay
                        muted
                        loop
                        className="w-full h-[600px] mx-auto rounded-2xl"
                    />
                </div>
            </section>

            <div className="w-full h-[50vh] lg:h-[60vh] bg-[#ffd81e] -mt-[40vh] lg:-mt-[50vh]"></div>

            <section className="h-[70vh] bg-dark transition-colors duration-300 w-full flex flex-col justify-start items-center py-12 2xl:py-24 px-5 2xl:px-0 gap-24 ">
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
                            <p className="text-white text-center lg:text-justify text-lg font-Adam">DDB Colombia needed a sleek, scroll-free landing page to serve as a bold statement of their brand. The design, provided as a Figma prototype, featured a full-screen layout divided into three interactive sections. Each section revealed its content on hover, creating a dynamic and immersive user experience. The challenge was to bring this vision to life using only <strong>HTML, CSS</strong>, and <strong>vanilla JavaScript</strong>, ensuring flawless interactivity and performance.</p>
                        </div>
                        <div className="w-6/6 lg:w-3/6 flex items-center justify-center">
                            <Image
                                src={challenge}
                                className=""
                                alt='Goo Hub'
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
                                <li className="text-white text-center lg:text-justify text-lg my-2 font-Adam"><strong>Design Analysis: </strong>
                                    The Figma prototype was carefully analyzed to understand the desired layout, animations, and interactions.</li>
                                <li className="text-white text-center lg:text-justify text-lg my-2 font-Adam"><strong>Development Framework: </strong>
                                    Without the support of frameworks or libraries, I structured the page using semantic <strong>HTML</strong>, styled it with modular <strong>CSS</strong>, and implemented hover-based interactions with <strong>vanilla JavaScript</strong>.</li>
                                <li className="text-white text-center lg:text-justify text-lg my-2 font-Adam"><strong>Interactive Elements: </strong>
                                    Each section was crafted to react to user interactions seamlessly, with transitions and animations enhancing the experience while maintaining simplicity.</li>
                                <li className="text-white text-center lg:text-justify text-lg my-2 font-Adam"><strong>Testing: </strong>
                                    Rigorous testing was conducted across multiple devices and browsers to ensure consistent functionality and performance.</li>
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
                            <p className="text-white text-center lg:text-justify text-lg font-Adam">By leveraging a deep understanding of core web technologies, I developed a landing page that stayed true to the Figma prototype’s vision. The hover interactions were crafted to be smooth and intuitive, offering users an engaging way to explore DDB Colombia’s message without overwhelming complexity.</p>
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
                            <p className="text-white text-center lg:text-justify text-lg font-Adam">The final landing page was a testament to DDB Colombia’s bold and innovative approach to advertising. With its immersive design and flawless interactivity, the site captured the essence of the agency’s global reputation, leaving a lasting impression on its visitors.</p>
                        </div>
                        <div className="w-6/6 lg:w-3/6 flex items-center justify-center">
                            <Swiper
                                direction="horizontal"
                                pagination={{
                                    clickable: true,
                                }}
                                modules={[Pagination]}
                                onSlideChange={() => console.log('slide change')}
                                style={{
                                    "--swiper-pagination-color": "#9735ED",
                                    "--swiper-pagination-bullet-inactive-color": "#999999",
                                    "--swiper-pagination-bullet-inactive-opacity": "1",
                                    "--swiper-pagination-bullet-size": "10px",
                                    "--swiper-pagination-bullet-horizontal-gap": "6px",
                                    "--swiper-pagination-bullet-cursor": 'none'
                                }}
                            >
                                <SwiperSlide className="flex justify-center items-center pb-12">
                                    <Image
                                        src={result1}
                                        className="mx-auto"
                                        alt='process'
                                    />
                                </SwiperSlide>
                                <SwiperSlide className="flex justify-center items-center pb-12">
                                    <Image
                                        src={result2}
                                        className="mx-auto"
                                        alt='process'
                                    />
                                </SwiperSlide>
                                <SwiperSlide className="flex justify-center items-center pb-12">
                                    <Image
                                        src={result3}
                                        className="mx-auto"
                                        alt='process'
                                    />
                                </SwiperSlide>
                            </Swiper>
                        </div>
                    </motion.div>

                </div>
            </section>
            <section className="w-full max-w-full bg-dark flex flex-col px-4 2xl:px-0 py-24">
                <div className="container mx-auto z-10 flex gap-8 lg:gap-0 justify-between items-center">
                    <Link
                        onMouseEnter={prevEnter}
                        onMouseLeave={prevLeave}
                        onClick={handleClick}
                        href={'/portfolio/goo'} className="w-16 sm:w-24 h-16 sm:h-24 bg-primary rounded-full flex justify-center items-center text-2xl text-dark md:text-4xl">
                        &#8592;
                    </Link>
                    <Link
                        onMouseEnter={sectionEnter}
                        onMouseLeave={sectionLeave}
                        onClick={handleClick}
                        href={'/portfolio/'} className="font-France uppercase text-center text-4xl sm:text-5xl text-primary md:text-7xl">
                        All cases
                    </Link>
                    <Link
                        onMouseEnter={nextEnter}
                        onMouseLeave={nextLeave}
                        onClick={handleClick}
                        href={'/portfolio/incrustes'} className="w-16 sm:w-24 h-16 sm:h-24 bg-primary rounded-full flex justify-center items-center text-2xl text-dark md:text-4xl">
                        &#8594;
                    </Link>
                </div>
            </section>
            <Footer />
        </>
    );
};

export default DDB;