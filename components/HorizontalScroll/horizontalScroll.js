import { motion, useTransform, useScroll } from "framer-motion";
import Image from "next/image";
import Button from "../Button/button";
import { useEffect, useState, useRef } from "react";
import { useRouter } from 'next/navigation'

const logo1 = require('../../src/img/goo_logo.svg')
const logo2 = require('../../src/img/audi_logo.svg')
const logo3 = require('../../src/img/incrustes_card.png')

const HorizontalScroll = () => {
    return (
        <div className="w-full px-0 flex flex-col gap-0">
            <HorizontalScrollCarousel />
        </div>
    );
};

export default HorizontalScroll;

const HorizontalScrollCarousel = () => {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    const [endValue, setEndValue] = useState("-50%");

    useEffect(() => {
        const handleResize = () => {
            const isMobile = window.innerWidth <= 768; // Ajuste para dispositivos móviles
            setEndValue(isMobile ? "-80%" : "-50%");
        };

        handleResize(); // Establece el valor inicial
        window.addEventListener("resize", handleResize); // Escucha los cambios de tamaño

        return () => {
            window.removeEventListener("resize", handleResize); // Limpieza al desmontar
        };
    }, []);

    const x = useTransform(scrollYProgress, [0, 1], ["0", endValue]);
    return (
        <section ref={targetRef} className="relative h-[650vh] md:h-[400vh] w-[100vw] lg:w-full px-4 2xl:px-0">
            <div className="container mb-8 mt-24 flex flex-col items-center sm:items-start justify-end mx-auto">
                <h2 className='font-Unbounded font-black text-4xl lg:text-5xl xl:text-6xl 2xl:text-8xl text-light hidden sm:flex mb-8'>The most interesting</h2>
                <h2 className='font-Unbounded font-black text-4xl lg:text-5xl xl:text-6xl 2xl:text-8xl text-light hidden sm:flex'>projects<span className='px-12 py-4 text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl text-dark bg-warning hover:bg-accent font-bold transition-all duration-300 rounded-full border-2 border-light -mx-4 -rotate-12'>I've</span>worked on</h2>
            </div>
            <div className="sticky container mx-auto top-36 md:top-48 flex flex-col gap-0 h-auto md:h-screen items-start">

                <motion.div style={{ x }} className="flex gap-8">
                    <Lenis />
                </motion.div>
            </div>
        </section>
    );
};

function Lenis() {

    const router = useRouter()

    return (
        <div className="flex gap-8 items-stretch">

            <section className="w-full relative mt-8 2xl:mt-12 px-0 flex flex-col gap-0">

                <div className="flex bg-primary hover:bg-accent transition-all duration-700 z-10 min-h-[500px] sm:min-h-[700px] md:min-h-[600px] lg:min-h-[500px] 2xl:min-h-[500px] min-w-[80vw] md:min-w-[50vw] rounded-xl shadow-light items-between justify-start gap-20 mx-auto border-2 border-light p-12">
                    <div className='w-full flex flex-col justify-between gap-8 md:gap-0'>
                        <div className="w-full flex justify-between items-start">
                            <Image
                                src={logo1}
                                width={150}
                                className="brightness-0"
                                alt="logo goo"
                            />
                            <h2 className='text-dark font-Unbounded text-5xl font-bold uppercase'>01</h2>
                        </div>
                        <div className="w-full flex flex-col 2xl:flex-row justify-between items-end">

                            <div className="w-full 2xl:w-[50%] flex flex-col items-start justify-start">
                                <h3 className="text-3xl lg:text-2xl xl:text-3xl font-bold w-full">Goo Hub:</h3>
                                <p className="mt-4 font-Unbounded font-Light w-full">
                                    Goo Hub is a digital marketing agency where quality and affordability come together, offering services such as UX/UI design, fullstack web development, and tailored digital marketing strategies.
                                </p>
                            </div>
                            <Button
                                onClick={() => {
                                    router.push('/portfolio/goo')
                                }}
                                className={`w-full 2xl:w-80 mt-8 2xl:mt-0 text-center flex justify-center hoverable bg-warning hover:bg-primary shadow-dark border-dark`}
                            >
                                Wanne see?
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            <section className="w-full relative mt-8 2xl:mt-12 px-0 flex flex-col gap-0">

                <div className="flex bg-warning hover:bg-accent transition-all duration-700 z-10 min-h-[500px] sm:min-h-[700px] md:min-h-[600px] lg:min-h-[500px] 2xl:min-h-[500px] min-w-[80vw] md:min-w-[50vw] rounded-xl shadow-light items-between justify-start gap-20 mx-auto border-2 border-light p-12">
                    <div className='w-full flex flex-col justify-between gap-8 md:gap-0'>
                        <div className="w-full flex justify-between items-start">
                            <Image
                                src={logo2}
                                width={150}
                                className="brightness-0"
                                alt="logo goo"
                            />
                            <h2 className='text-dark font-Unbounded text-5xl font-bold uppercase'>02</h2>
                        </div>
                        <div className="w-full flex flex-col 2xl:flex-row justify-between items-end">

                            <div className="w-full 2xl:w-[50%] flex flex-col items-start justify-start">
                                <h3 className="text-3xl lg:text-2xl xl:text-3xl font-bold w-full">DDB Colombia:</h3>
                                <p className="mt-4 font-Unbounded font-Light w-full">
                                    During my time at DDB Colombia, I worked with globally recognized brands like Audi, Estée Lauder, Tom Ford, and others. These experiences taught me the importance of attention to detail and,,,
                                </p>
                            </div>
                            <Button
                                onClick={() => {
                                    router.push('/portfolio/ddb')
                                }}
                                className={`w-full 2xl:w-80 mt-8 2xl:mt-0 text-center flex justify-center hoverable bg-primary hover:bg-warning shadow-dark border-dark`}
                            >
                                Wanne see?
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            <section className="w-full relative mt-8 2xl:mt-12 px-0 flex flex-col gap-0">

                <div className="flex bg-primary hover:bg-accent transition-all duration-700 z-10 min-h-[500px] sm:min-h-[700px] md:min-h-[600px] lg:min-h-[500px] 2xl:min-h-[500px] min-w-[80vw] md:min-w-[50vw] rounded-xl shadow-light items-between justify-start gap-20 mx-auto border-2 border-light p-12">
                    <div className='w-full flex flex-col justify-between gap-8 md:gap-0'>
                        <div className="w-full flex justify-between items-start">
                            <Image
                                src={logo3}
                                width={150}
                                className="brightness-0 -translate-x-8 -translate-y-8"
                                alt="logo goo"
                            />
                            <h2 className='text-dark font-Unbounded text-5xl font-bold uppercase'>03</h2>
                        </div>
                        <div className="w-full flex flex-col 2xl:flex-row justify-between items-end">

                            <div className="w-full 2xl:w-[50%] flex flex-col items-start justify-start">
                                <h3 className="text-3xl lg:text-2xl xl:text-3xl font-bold w-full">Incrustes:</h3>
                                <p className="mt-4 font-Unbounded font-Light w-full">
                                    Incrustes, one of my colleagues specializing in UX/UI design, created a detailed prototype in Figma for this project. I collaborated with him to bring his vision to life using React, Tailwind, and...
                                </p>
                            </div>
                            <Button
                                onClick={() => {
                                    router.push('/portfolio/incrustes')
                                }}
                                className={`w-full 2xl:w-80 mt-8 2xl:mt-0 text-center flex justify-center hoverable bg-warning hover:bg-primary shadow-dark border-dark`}
                            >
                                Wanne see?
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
}