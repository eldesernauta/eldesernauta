import { useEffect, useRef } from 'react';
import { useCursor } from '../../context/CursorContext';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import MotionImage from '../MotionImage/motionImage';

import Button from '../Button/button'
import { useRouter } from 'next/navigation'
import Badge from '../Badge/badge';
import Card from '../Card/card'

const caseStudy1 = require('../../src/img/goo_card.png')
const caseStudy2 = require('../../src/img/DDB_logo.svg')
const caseStudy3 = require('../../src/img/incrustes_card.png')

const star = require('../../src/img/star.svg')
const dotted = require('../../src/img/dotted.svg')
const dots = require('../../src/img/dots.svg')
const bar = require('../../src/img/bar.svg')
const cursor = require('../../src/img/cursor.svg')
const flower = require('../../src/img/flower.svg')

gsap.registerPlugin(ScrollTrigger);

const Work = () => {
    const { setCursorText, setCursorVariant } = useCursor();

    const router = useRouter()
    const section1Ref = useRef(null);
    const section2Ref = useRef(null);
    const section3Ref = useRef(null);
    const progressBarRef = useRef(null);

    function contactEnter() {
        setCursorText("👁️");
        setCursorVariant("contact");
    }

    function contactLeave() {
        setCursorText("");
        setCursorVariant("default");
    }

    useEffect(() => {
        const section1 = section1Ref.current;
        const section2 = section2Ref.current;
        const section3 = section3Ref.current;
        const progressBar = progressBarRef.current;

        // Set initial opacity states
        gsap.set([section2, section3], { x: 0, pointerEvents: 'none' });

        // GSAP timeline
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: section1,
                start: 'bottom 100px',
                end: () => window.innerWidth * 4,
                scrub: true,
                onUpdate: self => {
                    const progress = self.progress;
                    progressBar.style.height = `${progress * 50}%`;

                    // Control pointer events based on visibility
                    if (progress < 0.33) {
                        gsap.set(section1, { pointerEvents: 'auto' });
                        gsap.set([section2, section3], { pointerEvents: 'none' });
                    } else if (progress >= 0.33 && progress < 0.66) {
                        gsap.set(section2, { pointerEvents: 'auto' });
                        gsap.set([section1, section3], { pointerEvents: 'none' });
                    } else {
                        gsap.set(section3, { pointerEvents: 'auto' });
                        gsap.set([section1, section2], { pointerEvents: 'none' });
                    }
                }
            }
        });

        // Animate section 2 opacity
        tl.to(section1, 200, { opacity: 0 })
            .fromTo(section2, 1000, { y: -20, opacity: 0 }, { y: 0, opacity: 1 });



        // Animate section 3 opacity
        tl.to(section2, 200, { opacity: 0 })
            .fromTo(section3, 1000, { y: -20, opacity: 0 }, { y: 0, opacity: 1 });


        return () => {
            tl.kill(); // Kill the timeline on unmount
        };
    }, []);


    return (
        <div className="w-screen mx-auto lg:min-h-[800vh] relative px-5 2xl:px-0 pb-24 2xl:pb-0 translate-y-[100px]" id="sticky" data-sticky-sections>

            <div className="relative lg:sticky lg:top-0 lg:min-h-screen space-y-16 lg:space-y-0 pb-24 ">

                <div ref={progressBarRef} className="progress-bar absolute sm:right-0 md:right-12 lg:right-0 xl:right-0 2xl:right-32 top-0 w-1 bg-light-purple-goo z-900 translate-y-48 xl:translate-y-52 2xl:translate-y-56 rounded-xl hidden lg:block"></div>
                <div className="absolute sm:right-0 md:right-12 lg:right-0 xl:right-0 2xl:right-32 h-[50%] top-0 w-1 bg-white-goo z-50 translate-y-48 xl:translate-y-52 2xl:translate-y-56 rounded-xl hidden lg:block"></div>
                {/* Section #1 */}
                <section ref={section1Ref} className="stickycard lg:absolute lg:inset-0 lg:z-[var(--stick-visibility)] left-0 relative z-30">
                    <div className="container mx-auto flex flex-col lg:h-full lg:flex-row space-y-8 space-y-reverse lg:space-y-0 lg:space-x-8 2xl:space-x-20">
                        <div className="flex-1 flex items-center lg:opacity-[var(--stick-visibility)] transition-opacity duration-300 order-1 lg:order-none">
                            <div className="w-full flex flex-col gap-8">

                                <Card width="w-auto bg-light relative">
                                    <div className='w-full flex justify-start items-center'>
                                        <h3 className="text-3xl md:text-6xl text-dark font-bold leading-[100px] font-Wobblezz">Goo Hub</h3>

                                        <Badge text='freelance' className='h-auto bg-warning border-dark -rotate-12 -translate-x-12 translate-y-6' />
                                    </div>
                                    <hr className='w-3/6 mt-6 h-2 bg-primary' />
                                    <p className="text-dark my-10 text-lg font-Unbounded font-light text-justify z-0">
                                        Goo Hub is a digital marketing agency where quality and affordability come together, offering services such as UX/UI design, fullstack web development, and tailored digital marketing strategies.
                                    </p>

                                    <Button
                                        onClick={() => {
                                            router.push('/portfolio/goo')
                                        }}
                                        className="bg-accent hover:bg-warning border-dark shadow-dark place-self-end"
                                    >
                                        Take a look
                                    </Button>
                                    <Image
                                        src={star}
                                        alt='estrella'
                                        width={50}
                                        className='absolute top-8 right-8'
                                    />
                                </Card>

                            </div>
                        </div>

                        <div className="w-full flex-1 flex items-center justify-center lg:scale-[var(--stick-scale)] lg:opacity-[var(--stick-visibility)] transition duration-300 relative self-center">
                            <Image
                                src={caseStudy1}
                                onMouseEnter={contactEnter}
                                onMouseLeave={contactLeave}
                                alt='case study1'
                                objectFit='cover'
                                className='rounded-full hover:-rotate-12 transition-all duration-1000 bg-dark w-[300px] sm:w-[400px] h-[300px] sm:h-[400px] border-2 border-dark object-contain'
                            />
                            <Dots />
                            <Dotted />
                            <Bar />
                            <Cursor />
                            <Flower />
                        </div>
                    </div>
                </section>

                {/* Section #2 */}
                <section ref={section2Ref} className="stickycard lg:absolute lg:inset-0 lg:z-[var(--stick-visibility)] left-0 relative z-30">
                    <div className="container mx-auto flex flex-col lg:h-full lg:flex-row space-y-8 space-y-reverse lg:space-y-0 lg:space-x-8 2xl:space-x-20">
                        <div className="flex-1 flex items-center lg:opacity-[var(--stick-visibility)] transition-opacity duration-300 order-1 lg:order-none">
                            <div className="w-full flex flex-col gap-8">

                                <Card width="w-auto bg-light relative">
                                    <div className='w-full flex justify-start items-center'>
                                        <h3 className="text-3xl md:text-6xl text-dark font-bold leading-[100px] font-Wobblezz">DDB Colombia</h3>
                                        <Badge text='DDB Colombia' className='h-auto bg-warning border-dark -rotate-12 -translate-x-12 translate-y-6' />
                                    </div>

                                    <hr className='w-3/6 mt-6 h-2 bg-primary' />
                                    <p className="text-dark my-10 text-lg font-Unbounded font-light text-justify z-0">
                                        During my time at DDB Colombia, I've worked with globally recognized brands like Audi, Estée Lauder, Tom Ford, and others. These experiences taught me the importance of attention to detail and prepared me to face complex challenges head-on.
                                    </p>

                                    <Button
                                        onClick={() => {
                                            router.push('/portfolio/ddb')
                                        }}
                                        className="bg-accent hover:bg-warning border-dark shadow-dark place-self-end"
                                    >
                                        Take a look
                                    </Button>
                                    <Image
                                        src={star}
                                        alt='estrella'
                                        width={50}
                                        className='absolute top-8 right-8'
                                    />
                                </Card>

                            </div>
                        </div>
                        <div className="w-full flex-1 flex items-center justify-center lg:scale-[var(--stick-scale)] lg:opacity-[var(--stick-visibility)] transition duration-300 relative self-center">
                            <Image
                                src={caseStudy2}
                                onMouseEnter={contactEnter}
                                onMouseLeave={contactLeave}
                                alt='case study1'
                                objectFit='cover'
                                className='rounded-full bg-dark hover:scale-105 transition-all duration-1000 w-[300px] sm:w-[400px] h-[300px] sm:h-[400px] border-2 border-dark object-contain'
                            />
                            <Dots />
                            <Dotted />
                            <Bar />
                            <Cursor />
                            <Flower />
                        </div>
                    </div>
                </section>

                {/* Section #3 */}
                <section ref={section3Ref} className="stickycard lg:absolute lg:inset-0 lg:z-[var(--stick-visibility)] left-0 relative z-30">
                    <div className="container mx-auto flex flex-col lg:h-full lg:flex-row space-y-8 space-y-reverse lg:space-y-0 lg:space-x-8 2xl:space-x-20">
                        <div className="flex-1 flex items-center lg:opacity-[var(--stick-visibility)] transition-opacity duration-300 order-1 lg:order-none">
                            <div className="w-full flex flex-col gap-8">

                                <Card width="w-auto bg-light relative">
                                    <div className='w-full flex justify-start items-center'>
                                        <h3 className="text-3xl md:text-6xl text-dark font-bold leading-[100px] font-Wobblezz">Incrustes</h3>
                                        <Badge text='portfolio' className='h-auto bg-warning border-dark -rotate-12 -translate-x-6 translate-y-6' />
                                    </div>

                                    <hr className='w-3/6 mt-6 h-2 bg-primary' />
                                    <p className="text-dark my-10 text-lg font-Unbounded font-light text-justify z-0">
                                        Incrustes, one of my colleagues specializing in UX/UI design, created a detailed prototype in Figma for this project. I collaborated with him to bring his vision to life using React, Tailwind, and GSAP, ensuring every element was faithfully implemented.
                                    </p>
                                    <Button
                                        onClick={() => {
                                            router.push('/portfolio/incrustes')
                                        }}
                                        className="bg-accent hover:bg-warning border-dark shadow-dark place-self-end"
                                    >
                                        Take a look
                                    </Button>
                                    <Image
                                        src={star}
                                        alt='estrella'
                                        width={50}
                                        className='absolute top-8 right-8'
                                    />
                                </Card>

                            </div>
                        </div>
                        <div className="w-full flex-1 flex items-center justify-center lg:scale-[var(--stick-scale)] lg:opacity-[var(--stick-visibility)] transition duration-300 relative self-center">
                            <Image
                                src={caseStudy3}
                                onMouseEnter={contactEnter}
                                onMouseLeave={contactLeave}
                                alt='case study1'
                                objectFit='cover'
                                className='rounded-full bg-dark hover:rotate-45 transition-all duration-1000 w-[300px] sm:w-[400px] h-[300px] sm:h-[400px] border-2 border-dark object-contain'
                            />
                            <Dots />
                            <Dotted />
                            <Bar />
                            <Cursor />
                            <Flower />
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Work;

export const Bar = () => {
    return (
        <div className='absolute left-0 sm:left-[20%] lg:left-[10%] 2xl:left-[20%] -top-20'>
            <Image
                src={bar}
                alt='estrella'
                width={300}
            />
        </div>
    )
}

export const Cursor = () => {
    return (
        <div className='absolute right-0 sm:right-20 md:right-32 lg:right-0 xl:right-16 2xl:right-32 top-[40%]'>
            <Image
                src={cursor}
                alt='estrella'
                width={80}
            />
        </div>
    )
}

export const Flower = () => {
    return (
        <div className='absolute left-36 bottom-[20%]'>
            <Image
                src={flower}
                alt='estrella'
                width={80}
            />
        </div>
    )
}

export const Dots = () => {
    return (
        <div className='absolute right-[25%] -bottom-[10%]'>
            <Image
                src={dots}
                alt='estrella'
                width={150}
            />
        </div>
    )
}

export const Dotted = () => {
    return (
        <div className='absolute left-[20%] top-[10%]'>
            <Image
                src={dotted}
                alt='estrella'
                width={100}
            />
        </div>
    )
}