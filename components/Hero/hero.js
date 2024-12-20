import { useCursor } from '../../context/CursorContext';
import { motion } from 'framer-motion';
import Button from '../Button/button';
import Badge from '../Badge/badge'
import Link from 'next/link';

import useDarkMode from '../utils/useDarkMode';

import { useRouter } from 'next/navigation'
import Image from 'next/image';

const heroImg = require('../../src/img/hero_img.svg')
const arrow = require('../../src/img/curl_arrow.svg')

const Hero = () => {
    const router = useRouter()
    const { setCursorText, setCursorVariant } = useCursor();

    const { isDarkMode, toggleDarkMode } = useDarkMode();

    const variants1 = {
        hidden: { filter: "blur(10px)", opacity: 0 },
        visible: { filter: "blur(0px)", opacity: 1 },
    };

    function contactEnter() {
        setCursorText("👋");
        setCursorVariant("contact");
    }

    function contactLeave() {
        setCursorText("");
        setCursorVariant("default");
    }

    function photoEnter() {
        setCursorText("📷");
        setCursorVariant("photo");
    }

    function photoLeave() {
        setCursorText("");
        setCursorVariant("default");
    }


    return (
        <section id="main" className={`w-full h-auto lg:h-[calc(100vh+50px)] 2xl:h-[calc(100vh+100px)] relative flex px-5 lg:px-8 2xl:px-0 pt-16 sm:pt-24 lg:pt-0 justify-center items-center ${isDarkMode ? 'bg-light' : 'bg-dark'} bg-[linear-gradient(to_right,#80808010_1px,transparent_1px),linear-gradient(to_bottom,#80808010_1px,transparent_1px)] bg-[size:50px_50px]`}>
            <div className='container relative mx-auto flex flex-col lg:flex-row gap-8 justify-center items-center -translate-y-[0px] lg:-translate-y-[50px]'>
                <div className='w-full lg:w-3/6 flex flex-col gap-4 items-center lg:items-start relative'>
                    <Badge text='Hey! I am' className={`z-10 bg-warning ${isDarkMode ? ' border-dark' : 'border-light'} -rotate-12 -translate-x-24 lg:-translate-x-6 translate-y-4`} />
                    <div
                        className="hoverable"
                        onMouseEnter={contactEnter}
                        onMouseLeave={contactLeave}
                    >

                        <motion.h1
                            initial="hidden"
                            animate="visible"
                            transition={{ duration: 1 }}
                            variants={variants1}
                            className="text-center lg:text-left z-0 text-7xl lg:text-9xl text-primary order-1"
                        >
                            Oscar I.<br />
                            Rojas
                        </motion.h1>

                    </div>
                    <div className='w-full flex flex-col lg:flex-row items-center lg:items-start relative'>
                        <h2 className={`${isDarkMode ? 'text-dark' : 'text-light'} text-center lg:text-left font-Adam uppercase text-xl lg:text-2xl z-10`}>Frontend Developer</h2>
                        <Link
                            onMouseEnter={photoEnter}
                            onMouseLeave={photoLeave}
                            href={'https://ph.eldesernauta.com'} target='_blank'>
                            <Badge text={`n' film photographer`} className={`hidden sm:block z-0 mt-2 lg:mt-0 bg-accent ${isDarkMode ? 'border-dark' : 'border-light'} rotate-0 lg:rotate-12 translate-0 lg:-translate-x-4 lg:-translate-y-4`} />
                        </Link>
                    </div>
                    <Button
                        onClick={() => {
                            router.push('#work')
                        }}
                        className={`hoverable bg-warning hover:bg-secondary ${isDarkMode ? 'shadow-dark border-dark' : 'shadow-light border-light'}`}
                    >
                        Wanne see?
                    </Button>
                    <Image
                        src={arrow}
                        width={'100'}
                        alt='hero arrow'
                        className={`hidden lg:block absolute -right-4 xl:right-[15%] 2xl:right-[35%] top-[35%] ${isDarkMode ? 'britness-0' : 'brightness-100'}`}
                    />
                </div>
                <div className='w-full lg:w-3/6 flex justify-center items-center scale-x-[-1]'>
                    <Image
                        src={heroImg}
                        width={'700'}
                        alt='hero image'
                        className="hero-img "
                    />
                </div>
            </div>

            <Button
                onClick={toggleDarkMode}
                className={`absolute w-12 h-12 flex justify-center items-center bottom-8 lg:bottom-[124px] outline-none right-8 px-4 py-2 text-xl rounded-full ${isDarkMode ? 'shadow-dark bg-light border-dark' : 'shadow-light bg-dark border-light'} hover:bg-primary transition-all`}
            >
                {isDarkMode ? '🌙' : '☀️'}
            </Button>

        </section>
    );
}

export default Hero;