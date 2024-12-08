import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

import Button from '../Button/button'
import { useRouter } from 'next/navigation'
import Badge from '../Badge/badge';
import Card from '../Card/card'

const caseStudy1 = require('../../src/img/hero_bg.jpg')

const star = require('../../src/img/star.svg')

gsap.registerPlugin(ScrollTrigger);

const Work = () => {

    const router = useRouter()
    const section1Ref = useRef(null);
    const section2Ref = useRef(null);
    const section3Ref = useRef(null);
    const progressBarRef = useRef(null);

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
                start: 'bottom top',
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
        <div className="w-screen mx-auto lg:min-h-[800vh] relative px-5 2xl:px-0 pb-24 lg:pb-0" id="sticky" data-sticky-sections>

            <div className="relative lg:sticky lg:top-0 lg:min-h-screen space-y-16 lg:space-y-0 pb-24 ">

                <div ref={progressBarRef} className="progress-bar absolute sm:right-0 md:right-12 lg:right-0 xl:right-0 2xl:right-32 top-0 w-1 bg-light-purple-goo z-900 translate-y-48 xl:translate-y-52 2xl:translate-y-56 rounded-xl hidden lg:block"></div>
                <div className="absolute sm:right-0 md:right-12 lg:right-0 xl:right-0 2xl:right-32 h-[50%] top-0 w-1 bg-white-goo z-50 translate-y-48 xl:translate-y-52 2xl:translate-y-56 rounded-xl hidden lg:block"></div>
                {/* Section #1 */}
                <section ref={section1Ref} className="lg:absolute lg:inset-0 lg:z-[var(--stick-visibility)] left-0 relative z-30">
                    <div className="container mx-auto flex flex-col lg:h-full lg:flex-row space-y-8 space-y-reverse lg:space-y-0 lg:space-x-8 2xl:space-x-20">
                        <div className="flex-1 flex items-center lg:opacity-[var(--stick-visibility)] transition-opacity duration-300 order-1 lg:order-none">
                            <div className="w-full flex flex-col gap-8">

                                <Card width="w-auto bg-light relative">
                                    <div className='w-full flex justify-start items-center'>
                                        <h3 className="text-3xl md:text-7xl text-dark font-bold leading-[100px] font-Wobblezz">Audi</h3>

                                        <Badge text='DDB Colombia' className='h-auto bg-secondary border-dark -rotate-12 -translate-x-12 translate-y-6' />
                                    </div>
                                    <hr className='w-3/6 mt-6 h-2 bg-primary' />
                                    <p className="text-dark my-10 font-Montserrat text-justify z-0">
                                        ¿Buscas una agencia de marketing digital en Colombia que te ofrezca soluciones de diseño excepcionales? En nuestra agencia, te ayudamos a <strong>transformar tu presencia</strong> en línea con un diseño innovador y efectivo.
                                    </p>
                                    <p className="text-dark my-10 font-Montserrat text-justify z-0">
                                        Desde la creación de logotipos hasta el diseño de sitios web, nuestro <strong>enfoque personalizado</strong> asegura que tu marca destaque. Descubre cómo nuestra experiencia como agencia de marketing en Colombia puede llevar tu negocio al siguiente nivel. ¡Contáctanos hoy y haz que tu marca brille!
                                    </p>
                                    <Button
                                        onClick={() => {
                                            router.push('/portfolio/audi')
                                        }}
                                        className="bg-accent hover:bg-secondary border-dark shadow-dark place-self-end"
                                    >
                                        View more
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
                                alt='case study1'
                                objectFit='cover'
                                className='rounded-full w-[400px] h-[400px] border-2 border-dark object-cover'
                            />
                            <Dots />
                            <Dotted />
                        </div>
                    </div>
                </section>

                {/* Section #2 */}
                <section ref={section2Ref} className="lg:absolute lg:inset-0 lg:z-[var(--stick-visibility)] left-0 relative z-30">
                    <div className="container mx-auto flex flex-col lg:h-full lg:flex-row space-y-8 space-y-reverse lg:space-y-0 lg:space-x-8 2xl:space-x-20">
                        <div className="flex-1 flex items-center lg:opacity-[var(--stick-visibility)] transition-opacity duration-300 order-1 lg:order-none">
                            <div className="w-full flex flex-col gap-8">

                                <Card width="w-auto bg-light relative">
                                    <div className='w-full flex justify-start items-center'>
                                        <h3 className="text-3xl md:text-7xl text-dark font-bold leading-[100px] font-Wobblezz">La Cima Ecohotel</h3>
                                        {/* <Badge text='DDB Colombia' className='h-auto bg-secondary border-dark -rotate-12 -translate-x-12 translate-y-6' /> */}
                                    </div>

                                    <hr className='w-3/6 mt-6 h-2 bg-primary' />
                                    <p className="text-dark my-10 font-Montserrat text-justify z-0">
                                        ¿Buscas una agencia de marketing digital en Colombia que te ofrezca soluciones de diseño excepcionales? En nuestra agencia, te ayudamos a <strong>transformar tu presencia</strong> en línea con un diseño innovador y efectivo.
                                    </p>
                                    <p className="text-dark my-10 font-Montserrat text-justify z-0">
                                        Desde la creación de logotipos hasta el diseño de sitios web, nuestro <strong>enfoque personalizado</strong> asegura que tu marca destaque. Descubre cómo nuestra experiencia como agencia de marketing en Colombia puede llevar tu negocio al siguiente nivel. ¡Contáctanos hoy y haz que tu marca brille!
                                    </p>
                                    <Button
                                        onClick={() => {
                                            router.push('/portfolio/audi')
                                        }}
                                        className="bg-accent hover:bg-secondary border-dark shadow-dark place-self-end"
                                    >
                                        View more
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
                                alt='case study1'
                                objectFit='cover'
                                className='rounded-full w-[400px] h-[400px] border-2 border-dark object-cover'
                            />
                            <Dots />
                            <Dotted />
                        </div>
                    </div>
                </section>

                {/* Section #3 */}
                <section ref={section3Ref} className="lg:absolute lg:inset-0 lg:z-[var(--stick-visibility)] left-0 relative z-30">
                    <div className="container mx-auto flex flex-col lg:h-full lg:flex-row space-y-8 space-y-reverse lg:space-y-0 lg:space-x-8 2xl:space-x-20">
                        <div className="flex-1 flex items-center lg:opacity-[var(--stick-visibility)] transition-opacity duration-300 order-1 lg:order-none">
                            <div className="w-full flex flex-col gap-8">

                                <Card width="w-auto bg-light relative">
                                    <div className='w-full flex justify-start items-center'>
                                        <h3 className="text-3xl md:text-7xl text-dark font-bold leading-[100px] font-Wobblezz">HelpGo</h3>
                                        <Badge text='DDB Colombia' className='h-auto bg-secondary border-dark -rotate-12 -translate-x-12 translate-y-6' />
                                    </div>

                                    <hr className='w-3/6 mt-6 h-2 bg-primary' />
                                    <p className="text-dark my-10 font-Montserrat text-justify z-0">
                                        ¿Buscas una agencia de marketing digital en Colombia que te ofrezca soluciones de diseño excepcionales? En nuestra agencia, te ayudamos a <strong>transformar tu presencia</strong> en línea con un diseño innovador y efectivo.
                                    </p>
                                    <p className="text-dark my-10 font-Montserrat text-justify z-0">
                                        Desde la creación de logotipos hasta el diseño de sitios web, nuestro <strong>enfoque personalizado</strong> asegura que tu marca destaque. Descubre cómo nuestra experiencia como agencia de marketing en Colombia puede llevar tu negocio al siguiente nivel. ¡Contáctanos hoy y haz que tu marca brille!
                                    </p>
                                    <Button
                                        onClick={() => {
                                            router.push('/portfolio/audi')
                                        }}
                                        className="bg-accent hover:bg-secondary border-dark shadow-dark place-self-end"
                                    >
                                        View more
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
                                alt='case study1'
                                objectFit='cover'
                                className='rounded-full w-[400px] h-[400px] border-2 border-dark object-cover'
                            />
                            <Dots />
                            <Dotted />
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Work;

export const Dots = () => {
    return (
        <>
            <div className='bg-accent rounded-full w-24 h-24 border-2 border-dark absolute bottom-16 right-[20%]'></div>
            <div className='bg-accent rounded-full w-6 h-6 border-2 border-dark absolute bottom-40 right-[30%]'></div>
            <div className='bg-accent rounded-full w-12 h-12 border-2 border-dark absolute bottom-4 right-[30%]'></div>
        </>
    )
}

export const Dotted = () => {
    return (
        <div className='absolute left-[23%] top-[40%]'>
            <div className='bg-warning rounded-full w-12 h-12 border-2 border-dark absolute bottom-20 left-8'></div>
            <div className='bg-transparent rounded-full w-24 h-24 border-2 border-dotted border-dark absolute bottom-14 left-2'></div>
        </div>
    )
}