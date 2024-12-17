import { motion, useTransform, useScroll } from "framer-motion";
import Image from "next/image";
import { useEffect, useState, useRef } from "react";

const card1 = require('../../src/img/lce_card.png')

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
            <div className="container mb-8 lg:mb-24 xl:mb-32 mt-24 flex flex-col items-center sm:items-start justify-end mx-auto">
                <h2 className='font-Unbounded font-black text-4xl lg:text-5xl xl:text-6xl 2xl:text-8xl text-light flex sm:hidden mb-8 w-full'>I provide world class service</h2>
                <h2 className='font-Unbounded font-black text-4xl lg:text-5xl xl:text-6xl 2xl:text-8xl text-light hidden sm:flex mb-8'>I provide world</h2>
                <h2 className='font-Unbounded font-black text-4xl lg:text-5xl xl:text-6xl 2xl:text-8xl text-light hidden sm:flex'>class<span className='px-8 py-4 text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl text-dark bg-warning hover:bg-accent font-black transition-all duration-300 rounded-full border-2 border-light -mx-4 -rotate-12'>services</span>for you</h2>
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

    return (
        <div className="flex gap-4 items-stretch">

            <section className="w-full relative mt-8 2xl:mt-12 px-0 flex flex-col gap-0">
                <Image
                    src={card1}
                    className="z-0"
                    objectFit="cover"
                    fill
                    alt="caso de estudio #1"
                />
                <div className="flex z-10 min-h-[500px] sm:min-h-[600px] md:min-h-[800px] lg:min-h-[450px] 2xl:min-h-[600px] min-w-[80vw] md:min-w-[40vw] rounded-xl shadow-dark items-between justify-start gap-20 mx-auto border-2 border-dark hover:bg-light-purple-goo hover:text-white p-5 group">
                    <div className='flex flex-col justify-between gap-8 md:gap-0'>
                        <h2 className='text-light-purple-goo group-hover:text-white font-Wobblezz text-5xl font-bold uppercase'>01</h2>
                        <div className="flex flex-col h-[55%] sm:h-[25%] md:h-[35%] lg:h-[50%] xl:h-[55%] 2xl:h-[48%] items-start justify-start">
                            <h3 className="text-3xl lg:text-2xl xl:text-3xl font-bold w-full sm:w-4/6 md:w-full xl:w-4/6 2xl:w-3/6">Innovación: </h3>
                            <p className="text-lg w-full sm:w-4/6 md:w-full xl:w-4/6 2xl:w-3/6">
                                Estamos constantemente en la búsqueda de nuevas ideas y enfoques innovadores para ofrecer soluciones creativas y efectivas.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="w-full relative mt-8 2xl:mt-12 px-0 flex flex-col gap-0">
                <Image
                    src={card1}
                    className="z-0"
                    objectFit="cover"
                    fill
                    alt="caso de estudio #2"
                />
                <div className="flex z-10 min-h-[500px] sm:min-h-[700px] md:min-h-[800px] lg:min-h-[450px] 2xl:min-h-[600px] min-w-[80vw] md:min-w-[40vw] rounded-xl shadow-dark items-between justify-start gap-20 mx-auto border-2 border-dark hover:bg-light-purple-goo hover:text-white p-5 group">
                    <div className='flex flex-col justify-between gap-8 md:gap-0'>
                        <h2 className='text-light-purple-goo group-hover:text-white font-Wobblezz text-5xl font-bold uppercase'>01</h2>
                        <div className="flex flex-col h-[55%] sm:h-[25%] md:h-[35%] lg:h-[50%] xl:h-[55%] 2xl:h-[48%] items-start justify-start">
                            <h3 className="text-3xl lg:text-2xl xl:text-3xl font-bold w-full sm:w-4/6 md:w-full xl:w-4/6 2xl:w-3/6">Innovación: </h3>
                            <p className="text-lg w-full sm:w-4/6 md:w-full xl:w-4/6 2xl:w-3/6">
                                Estamos constantemente en la búsqueda de nuevas ideas y enfoques innovadores para ofrecer soluciones creativas y efectivas.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="w-full relative mt-8 2xl:mt-12 px-0 flex flex-col gap-0">
                <Image
                    src={card1}
                    className="z-0"
                    objectFit="cover"
                    fill
                    alt="caso de estudio #3"
                />
                <div className="flex z-10 min-h-[500px] sm:min-h-[600px] md:min-h-[800px] lg:min-h-[450px] 2xl:min-h-[600px] min-w-[80vw] md:min-w-[40vw] rounded-xl shadow-dark items-between justify-start gap-20 mx-auto border-2 border-dark hover:bg-light-purple-goo hover:text-white p-5 group">
                    <div className='flex flex-col justify-between gap-8 md:gap-0'>
                        <h2 className='text-light-purple-goo group-hover:text-white font-Wobblezz text-5xl font-bold uppercase'>01</h2>
                        <div className="flex flex-col h-[55%] sm:h-[25%] md:h-[35%] lg:h-[50%] xl:h-[55%] 2xl:h-[48%] items-start justify-start">
                            <h3 className="text-3xl lg:text-2xl xl:text-3xl font-bold w-full sm:w-4/6 md:w-full xl:w-4/6 2xl:w-3/6">Innovación: </h3>
                            <p className="text-lg w-full sm:w-4/6 md:w-full xl:w-4/6 2xl:w-3/6">
                                Estamos constantemente en la búsqueda de nuevas ideas y enfoques innovadores para ofrecer soluciones creativas y efectivas.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="w-full relative mt-8 2xl:mt-12 px-0 flex flex-col gap-0">
                <Image
                    src={card1}
                    className="z-0"
                    objectFit="cover"
                    fill
                    alt="caso de estudio #4"
                />
                <div className="flex z-10 min-h-[500px] sm:min-h-[600px] md:min-h-[800px] lg:min-h-[450px] 2xl:min-h-[600px] min-w-[80vw] md:min-w-[40vw] rounded-xl shadow-dark items-between justify-start gap-20 mx-auto border-2 border-dark hover:bg-light-purple-goo hover:text-white p-5 group">
                    <div className='flex flex-col justify-between gap-8 md:gap-0'>
                        <h2 className='text-light-purple-goo group-hover:text-white font-Wobblezz text-5xl font-bold uppercase'>01</h2>
                        <div className="flex flex-col h-[55%] sm:h-[25%] md:h-[35%] lg:h-[50%] xl:h-[55%] 2xl:h-[48%] items-start justify-start">
                            <h3 className="text-3xl lg:text-2xl xl:text-3xl font-bold w-full sm:w-4/6 md:w-full xl:w-4/6 2xl:w-3/6">Innovación: </h3>
                            <p className="text-lg w-full sm:w-4/6 md:w-full xl:w-4/6 2xl:w-3/6">
                                Estamos constantemente en la búsqueda de nuevas ideas y enfoques innovadores para ofrecer soluciones creativas y efectivas.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
}