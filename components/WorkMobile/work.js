
import { useCursor } from '../../context/CursorContext';
import Image from 'next/image';

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


const WorkMobile = () => {
    const { setCursorText, setCursorVariant } = useCursor();

    const router = useRouter()

    function contactEnter() {
        setCursorText("👁️");
        setCursorVariant("contact");
    }

    function contactLeave() {
        setCursorText("");
        setCursorVariant("default");
    }


    return (
        <div className="w-screen mx-auto lg:min-h-[800vh] relative px-5 2xl:px-0 py-48 pb-24 lg:pb-0">

            <div className="relative lg:sticky lg:top-0 lg:min-h-screen flex flex-col gap-48 pb-24 ">

                {/* Section #1 */}
                <section className="relative">
                    <div className="container mx-auto flex flex-col lg:h-full lg:flex-row gap-24">
                        <div className="flex-1 flex items-center lg:opacity-[var(--stick-visibility)] transition-opacity duration-300 order-1 lg:order-none">
                            <div className="w-full flex flex-col gap-8">

                                <Card width="w-auto bg-light relative">
                                    <div className='w-full flex justify-start items-center'>
                                        <h3 className="text-3xl md:text-6xl text-dark font-bold leading-[100px] font-Wobblezz">Goo Hub</h3>

                                        <Badge text='freelance' className='h-auto bg-secondary border-dark -rotate-12 -translate-x-12 translate-y-6' />
                                    </div>
                                    <hr className='w-3/6 mt-6 h-2 bg-primary' />
                                    <p className="text-dark my-10 text-sm font-Unbounded font-light text-justify z-0">
                                        Goo Hub is a digital marketing agency where quality and affordability come together, offering services such as UX/UI design, fullstack web development, and tailored digital marketing strategies.
                                    </p>
                                    <p className="text-dark my-10 text-sm font-Unbounded font-light text-justify z-0">
                                        From crafting unique logos to designing impactful and functional websites, Goo was a fascinating project filled with interactivity, creativity, and technical challenges.
                                    </p>

                                    <Button
                                        onClick={() => {
                                            router.push('/portfolio/goo')
                                        }}
                                        className="bg-accent hover:bg-secondary border-dark shadow-dark place-self-end"
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
                <section className="relative">
                    <div className="container mx-auto flex flex-col lg:h-full lg:flex-row gap-24">
                        <div className="flex-1 flex items-center lg:opacity-[var(--stick-visibility)] transition-opacity duration-300 order-1 lg:order-none">
                            <div className="w-full flex flex-col gap-8">

                                <Card width="w-auto bg-light relative">
                                    <div className='w-full flex justify-start items-center'>
                                        <h3 className="text-3xl md:text-6xl text-dark font-bold leading-[100px] font-Wobblezz">Audi Spain</h3>
                                        <Badge text='DDB Colombia' className='h-auto bg-secondary border-dark -rotate-12 -translate-x-12 translate-y-6' />
                                    </div>

                                    <hr className='w-3/6 mt-6 h-2 bg-primary' />
                                    <p className="text-dark my-10 text-sm font-Unbounded font-light text-justify z-0">
                                        During my time at DDB Colombia, I worked with globally recognized brands like Audi, Estée Lauder, Tom Ford, and others. These experiences taught me the importance of attention to detail and prepared me to face complex challenges head-on.
                                    </p>
                                    <p className="text-dark my-10 text-sm font-Unbounded font-light text-justify z-0">
                                        In these collaborations, I was responsible for designing landing pages, creating email campaigns, and managing projects across multiple CMS platforms, ensuring high-quality results at every step.
                                    </p>
                                    <Button
                                        onClick={() => {
                                            router.push('/portfolio/ddb')
                                        }}
                                        className="bg-accent hover:bg-secondary border-dark shadow-dark place-self-end"
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
                <section className="relative">
                    <div className="container mx-auto flex flex-col lg:h-full lg:flex-row gap-24">
                        <div className="flex-1 flex items-center lg:opacity-[var(--stick-visibility)] transition-opacity duration-300 order-1 lg:order-none">
                            <div className="w-full flex flex-col gap-8">

                                <Card width="w-auto bg-light relative">
                                    <div className='w-full flex justify-start items-center'>
                                        <h3 className="text-3xl md:text-6xl text-dark font-bold leading-[100px] font-Wobblezz">Incrustes</h3>
                                        <Badge text='portfolio' className='h-auto bg-secondary border-dark -rotate-12 -translate-x-6 translate-y-6' />
                                    </div>

                                    <hr className='w-3/6 mt-6 h-2 bg-primary' />
                                    <p className="text-dark my-10 text-sm font-Unbounded font-light text-justify z-0">
                                        Incrustes, one of my colleagues specializing in UX/UI design, created a detailed prototype in Figma for this project. I collaborated with him to bring his vision to life using React, Tailwind, and GSAP, ensuring every element was faithfully implemented.
                                    </p>
                                    <p className="text-dark my-10 text-sm font-Unbounded font-light text-justify z-0">
                                        The final result was a highly interactive website that stood out for its striking use of color, bold typography, and seamless navigation. It’s definitely worth checking out to see the impact of our combined efforts!
                                    </p>

                                    <Button
                                        onClick={() => {
                                            router.push('/portfolio/incrustes')
                                        }}
                                        className="bg-accent hover:bg-secondary border-dark shadow-dark place-self-end"
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

export default WorkMobile;

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
        <div className='absolute right-0 sm:right-24 md:right-32 lg:right-0 xl:right-16 2xl:right-32 top-[40%]'>
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
        <div className='absolute left-0 sm:left-24 md:left-36 bottom-[20%]'>
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
        <div className='absolute right-[10%] sm:right-20 md:right-48 -bottom-4 '>
            <Image
                src={dots}
                alt='estrella'
                width={100}
            />
        </div>
    )
}

export const Dotted = () => {
    return (
        <div className='absolute left-8 sm:left-20 md:left-40 top-0 md:top-10'>
            <Image
                src={dotted}
                alt='estrella'
                width={80}
            />
        </div>
    )
}