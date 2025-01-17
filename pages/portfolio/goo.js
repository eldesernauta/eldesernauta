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

import mainImg from '../../src/img/goo_card.jpg';
import secondImg from '../../src/img/goo_challenge_1.jpg';

import 'swiper/css';
import 'swiper/css/pagination';

let tabs = [
    { id: "desafio", label: "Challenge" },
    { id: "proceso", label: "Process" },
    { id: "solucion", label: "Solution" },
    { id: "resultado", label: "Result" },
];

const Goo = () => {
    const { setCursorText, setCursorVariant } = useCursor();

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
    
    function handleClick() {
        setCursorText("");
        setCursorVariant("default");
    }

    const [activeTab, setActiveTab] = useState(tabs[0].id);
    const section1Ref = useRef(null);
    const section2Ref = useRef(null);
    const section3Ref = useRef(null);
    const section4Ref = useRef(null);


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
                        Goo Hub case study
                    </h1>
                    <h3 className="text-2xl font-bold text-dark">Revolutionizing digital marketing with interactivity and innovation</h3>
                    <p className="text-black font-Adam text-lg text-justify">Goo Hub, a digital marketing agency, needed a cutting-edge online presence to reflect its dynamic services, including UX/UI design, full-stack web development, and digital marketing strategies. From crafting unique logos to designing impactful websites, this project was built from scratch to deliver a fully interactive experience.</p>
                </div>
                <div className="hidden lg:block container mx-auto z-10 p-0 px-5 pb-0">
                    <iframe src="https://dev.goohub.digital" frameBorder="0" width="100%" height="800px" allowFullScreen className="rounded-xl"></iframe>
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

            <div className="w-full h-[50vh] lg:h-[60vh] bg-[#8E32E3] -mt-[40vh] lg:-mt-[50vh]"></div>

            <section className="bg-dark transition-colors duration-300 w-full flex flex-col justify-center items-center py-12 2xl:py-24 px-5 2xl:px-0 gap-24 ">
                <div className="container mx-auto flex flex-col justify-center items-center text-center z-10">
                    <div className="w-auto px-2 md:px-12 py-2 rounded-full flex justify-center items-center gap-2 md:gap-12 border md:border-2 bg-dark  border-white">
                        {tabs.map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => handleTabChange(tab.id)}
                                onMouseEnter={sectionEnter}
                                onMouseLeave={sectionLeave}
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
                            <p className="text-white text-center lg:text-justify text-lg font-Adam"><strong>Goo Hub</strong> approached us with a vision to showcase their services in a way that stood out in the competitive digital marketing space. The challenge was to create a website that combined seamless interactivity with bold, modern visuals while maintaining excellent performance and usability.</p>
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
                                        src={secondImg}
                                        width={400}
                                        className="mx-auto"
                                        alt='astronauta'
                                    />
                                </SwiperSlide>
                                <SwiperSlide className="flex justify-center items-center pb-12">
                                    <Image
                                        src={secondImg}
                                        width={400}
                                        className="mx-auto"
                                        alt='astronauta'
                                    />
                                </SwiperSlide>
                                <SwiperSlide className="flex justify-center items-center pb-12">
                                    <Image
                                        src={secondImg}
                                        width={400}
                                        className="mx-auto"
                                        alt='astronauta'
                                    />
                                </SwiperSlide>
                                <SwiperSlide className="flex justify-center items-center pb-12">
                                    <Image
                                        src={secondImg}
                                        width={400}
                                        className="mx-auto"
                                        alt='astronauta'
                                    />
                                </SwiperSlide>
                            </Swiper>
                        </div>
                    </motion.div>
                    <motion.div
                        ref={section2Ref}
                        className={`container flex flex-col-reverse lg:flex-row items-top justify-center gap-8 md:gap-20 mx-auto overflow-hidden ${activeTab === "proceso" ? "block" : "hidden"}`}
                    >
                        <div className="w-6/6 lg:w-3/6 flex flex-col items-start justify-center gap-5">
                            <h3 className="text-2xl text-center lg:text-left w-full font-bold text-white">Process</h3>
                            <ol className="list-decimal">
                                <li className="text-white text-center lg:text-justify text-lg my-2 font-Adam"><strong>Conceptualization: </strong>
                                    We started by analyzing Goo Hub’s unique selling points and crafting a design that reflected their innovative approach to digital marketing.</li>
                                <li className="text-white text-center lg:text-justify text-lg my-2 font-Adam"><strong>Tools and Technologies: </strong>
                                    The project utilized <strong>Next.js</strong> for server-rendered performance, <strong>Tailwind CSS</strong> for responsive design, and <strong>GSAP</strong> alongside <strong>Framer Motion</strong> to bring dynamic animations to life. <strong>Splin</strong>e and <strong>Matter.js</strong> were employed to create interactive 3D elements and physics-based interactions.</li>
                                <li className="text-white text-center lg:text-justify text-lg my-2 font-Adam"><strong>Prototyping: </strong>
                                    Detailed wireframes and prototypes were developed to align the design with Goo Hub's goals, ensuring a user-friendly interface.</li>
                                <li className="text-white text-center lg:text-justify text-lg my-2 font-Adam"><strong>Development: </strong>
                                    Every line of code was meticulously written, implementing the designs and animations to deliver a flawless experience across all devices.</li>
                            </ol>
                        </div>
                        <div className="w-6/6 lg:w-3/6 flex items-center justify-center">
                            {/* <Image
                                src={astronauta}
                                width={400}
                                className=""
                                alt='astronauta'
                            /> */}
                        </div>
                    </motion.div>

                    <motion.div
                        ref={section3Ref}
                        className={`container flex flex-col-reverse lg:flex-row items-top justify-center gap-8 md:gap-20 mx-auto overflow-hidden ${activeTab === "solucion" ? "block" : "hidden"}`}
                    >
                        <div className="w-6/6 lg:w-3/6 flex flex-col items-start justify-center gap-5">
                            <h3 className="text-2xl text-center lg:text-left w-full font-bold text-white">Solution</h3>
                            <p className="text-white text-center lg:text-justify text-lg font-Adam">We addressed the challenge by integrating advanced interactive elements such as 3D models and smooth, immersive animations. Matter.js was used for physics-based interactions, ensuring a playful yet professional feel. GSAP and Framer Motion brought life to transitions, making every user interaction intuitive and engaging.</p>
                        </div>
                        <div className="w-6/6 lg:w-3/6 flex items-center justify-center">
                            {/* <Image
                                src={astronauta}
                                width={400}
                                className=""
                                alt='astronauta'
                            /> */}
                        </div>
                    </motion.div>

                    <motion.div
                        ref={section4Ref}
                        className={`container flex flex-col-reverse lg:flex-row items-top justify-center gap-8 md:gap-20 mx-auto overflow-hidden ${activeTab === "resultado" ? "block" : "hidden"}`}
                    >
                        <div className="w-6/6 lg:w-3/6 flex flex-col items-start justify-center gap-5">
                            <h3 className="text-2xl text-center lg:text-left w-full font-bold text-white">Result</h3>
                            <p className="text-white text-center lg:text-justify text-lg font-Adam">The final product was a visually stunning and highly interactive website that not only captured Goo Hub's brand essence but also elevated the user experience. With seamless navigation, responsive design, and bold animations, the site now serves as a testament to Goo Hub's creativity and commitment to quality.</p>
                        </div>
                        <div className="w-6/6 lg:w-3/6 flex items-center justify-center">
                            {/* <Image
                                src={astronauta}
                                width={400}
                                className=""
                                alt='astronauta'
                            /> */}
                        </div>
                    </motion.div>

                </div>
            </section>
            <section className="w-full max-w-full bg-dark flex flex-col px-4 2xl:px-0 py-24">
                <div className="container mx-auto z-10 flex justify-between items-center">
                    <Link
                        onMouseEnter={sectionEnter}
                        onMouseLeave={sectionLeave}
                        onClick={handleClick}
                        href={'/portfolio/'}
                        className="font-France uppercase text-4xl sm:text-5xl text-primary md:text-7xl">
                        All cases
                    </Link>
                    <Link
                        onMouseEnter={nextEnter}
                        onMouseLeave={nextLeave}
                        onClick={handleClick}
                        href={'/portfolio/ddb'}
                        className="w-16 sm:w-24 h-16 sm:h-24 bg-primary rounded-full flex justify-center items-center text-2xl text-dark md:text-4xl">
                        &#8594;
                    </Link>
                </div>
            </section>
            <Footer />
        </>
    );
};

export default Goo;