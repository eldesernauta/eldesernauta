import Image from "next/image";
import { motion } from "framer-motion";
import { useState, useRef } from "react";
import { gsap } from "gsap";

import Nav from "../../components/Nav/nav";

import mainImg from '../../src/img/goo_card.jpg';
import secondImg from '../../src/img/goo_card.png';
import mainImgMobile from '../../src/img/goo_card.jpg';
import Footer from "../../components/Footer/footer";
import Link from "next/link";

// import studyCaseImg2 from '../../src/img/goo-study_case-4.mp4'
// import studyCaseImg1 from '../../src/img/goo-study_case-1.mp4'

let tabs = [
    { id: "desafio", label: "Challenge" },
    { id: "proceso", label: "Process" },
    { id: "solucion", label: "Solution" },
    { id: "resultado", label: "Result" },
];

// import img1 from '../../src/img/la-cima-1.png'
// import img2 from '../../src/img/la-cima-2.png'
// import img3 from '../../src/img/la-cima-3.png'
// import img4 from '../../src/img/la-cima-4.png'
// import img5 from '../../src/img/la-cima-5.png'
// import img6 from '../../src/img/la-cima-6.png'

// const images = [
//     { src: img1, alt: 'Image 1' },
//     { src: img2, alt: 'Image 2' },
//     { src: img3, alt: 'Image 3' },
//     { src: img4, alt: 'Image 4' },
//     { src: img5, alt: 'Image 5' },
//     { src: img6, alt: 'Image 6' },
// ]

const Goo = () => {
    const section1Ref = useRef(null);
    const section2Ref = useRef(null);
    const section3Ref = useRef(null);
    const section4Ref = useRef(null);

    const [activeTab, setActiveTab] = useState(tabs[0].id);

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

    // const studyCases = [
    //     {
    //         title: "Monarch Cleaning Group",
    //         image: studyCaseImg1,
    //         tags: ['Tag 1', 'Tag 2'],
    //         description: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de  ',
    //         buttonText: 'Revisar',
    //         buttonLink: '/portafolio/monarch-cleaning-group',
    //         transform: 'translate-0 md:translate-y-24',
    //         colorMode: 'light'
    //     },
    //     {
    //         title: "Toro Handyman Services",
    //         image: studyCaseImg2,
    //         tags: ['Tag 4', 'Tag 5'],
    //         description: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de  ',
    //         buttonText: 'Revisar',
    //         buttonLink: '/portafolio/toro-handyman-services',
    //         transform: 'translate-y-0',
    //         colorMode: 'light'
    //     }
    // ];


    return (
        <>
            <Nav />
            <section className="bg-white pt-40 lg:pt-48 flex flex-col gap-12 pb-0">
                <div className="container mx-auto flex flex-col gap-8 justify-start items-start px-5 sm:px-0 lg:px-5 2xl:px-0">
                    <h1 className="text-dark font-Unbounded text-left text-4xl sm:text-5xl lg:text-6xl font-bold leading-[30px] md:leading-[60px] w-full">
                        Goo Hub case study
                    </h1>
                    <h3 className="text-2xl font-bold text-dark">Revolutionizing Digital Marketing with Interactivity and Innovation</h3>
                    <p className="text-black text-lg text-justify">Goo Hub, a digital marketing agency, needed a cutting-edge online presence to reflect its dynamic services, including UX/UI design, full-stack web development, and digital marketing strategies. From crafting unique logos to designing impactful websites, this project was built from scratch to deliver a fully interactive experience.</p>
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
                                className={`${activeTab === tab.id ? "" : "hover:text-white/60"} relative rounded-full px-3 py-1.5 text-xs md:text-sm font-medium text-white font-Montserrat outline-sky-400 transition focus-visible:outline-2`}
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
                            <p className="text-white text-center lg:text-justify text-lg"><strong>Goo Hub</strong> approached us with a vision to showcase their services in a way that stood out in the competitive digital marketing space. The challenge was to create a website that combined seamless interactivity with bold, modern visuals while maintaining excellent performance and usability.</p>
                        </div>
                        <div className="w-6/6 lg:w-3/6 flex items-center justify-center">
                            <Image
                                src={secondImg}
                                width={400}
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
                                <li className="text-white text-center lg:text-justify text-lg my-2"><strong>Conceptualization: </strong>
                                    We started by analyzing Goo Hub’s unique selling points and crafting a design that reflected their innovative approach to digital marketing.</li>
                                <li className="text-white text-center lg:text-justify text-lg my-2"><strong>Tools and Technologies: </strong>
                                    The project utilized Next.js for server-rendered performance, Tailwind CSS for responsive design, and GSAP alongside Framer Motion to bring dynamic animations to life. Spline and Matter.js were employed to create interactive 3D elements and physics-based interactions.</li>
                                <li className="text-white text-center lg:text-justify text-lg my-2"><strong>Prototyping: </strong>
                                    Detailed wireframes and prototypes were developed to align the design with Goo Hub's goals, ensuring a user-friendly interface.</li>
                                <li className="text-white text-center lg:text-justify text-lg my-2"><strong>Development: </strong>
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
                            <p className="text-white text-center lg:text-justify text-lg">We addressed the challenge by integrating advanced interactive elements such as 3D models and smooth, immersive animations. Matter.js was used for physics-based interactions, ensuring a playful yet professional feel. GSAP and Framer Motion brought life to transitions, making every user interaction intuitive and engaging.</p>
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
                            <p className="text-white text-center lg:text-justify text-lg">The final product was a visually stunning and highly interactive website that not only captured Goo Hub's brand essence but also elevated the user experience. With seamless navigation, responsive design, and bold animations, the site now serves as a testament to Goo Hub's creativity and commitment to quality.</p>
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
            <section className="w-full max-w-full bg-dark flex flex-col py-24">
                <div className="container mx-auto z-10 flex justify-end items-center">
                    <Link href={'/portfolio/ddb'} className="font-Unbounded text-4xl text-primary md:text-7xl font-bold leading-tight md:leading-snug">
                        Next case &#8594;
                    </Link>
                </div>
            </section>
            <Footer />
        </>
    );
};

export default Goo;