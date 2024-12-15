import { useEffect, useRef } from 'react';
import Nav from "../components/Nav/nav";
import Layout from '../components/Layout/layout';
import Card from "../components/Card/card";
import Badge from "../components/Badge/badge";
import Button from "../components/Button/button";
import Image from "next/image";
import Footer from "../components/Footer/footer";
import HorizontalScroll from '../components/HorizontalScroll/horizontalScroll';

const caseStudy1 = require('../src/img/lce_card.png');

const Portfolio = () => {
    return (
        <Layout>
            <Nav />{/* Horizontal Scroll Section */}
            <div
                className="w-screen relative bg-dark flex justify-start items-center flex-col bg-[linear-gradient(to_right,#80808010_1px,transparent_1px),linear-gradient(to_bottom,#80808010_1px,transparent_1px)] bg-[size:50px_50px]"
            >

                <section className="px-4 2xl:px-0 pt-12 lg:pt-40">
                    <div className="container mx-auto flex flex-col relative">
                        <HorizontalScroll />
                    </div>
                </section>


                <section className="w-full bg-light py-48 -mt-24 flex flex-col gap-48 bg-[linear-gradient(to_right,#80808010_1px,transparent_1px),linear-gradient(to_bottom,#80808010_1px,transparent_1px)] bg-[size:50px_50px]">
                    <div className="container mx-auto flex flex-col lg:flex-row-reverse space-y-8 space-y-reverse lg:space-y-0 lg:space-x-8 2xl:space-x-0">
                        <div className="flex-1 flex items-center">
                            <div className="w-full flex flex-col gap-8">

                                <Card width="w-auto bg-accent relative">
                                    <div className='w-full flex justify-start items-center'>
                                        <h3 className="text-3xl md:text-7xl text-dark font-bold leading-[100px]">La Cima</h3>

                                        <Badge text='Wordpress' className='h-auto bg-primary border-dark -rotate-12 -translate-x-12 translate-y-6' />
                                    </div>
                                    <hr className='w-3/6 mt-6 h-2 bg-primary' />
                                    <p className="text-dark my-10 font-Montserrat text-justify z-0">
                                        ¿Buscas una agencia de marketing digital en Colombia que te ofrezca soluciones de diseño excepcionales? En nuestra agencia, te ayudamos a <strong>transformar tu presencia</strong> en línea con un diseño innovador y efectivo.
                                    </p>
                                    <p className="text-dark my-10 font-Montserrat text-justify z-0">
                                        Desde la creación de logotipos hasta el diseño de sitios web, nuestro <strong>enfoque personalizado</strong> asegura que tu marca destaque. Descubre cómo nuestra experiencia como agencia de marketing en Colombia puede llevar tu negocio al siguiente nivel. ¡Contáctanos hoy y haz que tu marca brille!
                                    </p>

                                </Card>

                            </div>
                        </div>
                        <div className="flex-1 flex items-center justify-center transition duration-300 relative self-center px-4 overflow-hidden">
                            <Image
                                src={caseStudy1}
                                alt='case study1'
                                objectFit='cover'
                                className='rounded-full hover:rounded-xl transition-all duration-300 ease-in-out w-[400px] h-[400px] hover:w-[100%] hover:h-[450px] hover:object-cover border-2 hover:border-0 border-dark object-cover'
                            />
                        </div>
                    </div>
                    <div className="container mx-auto flex flex-col lg:flex-row space-y-8 space-y-reverse lg:space-y-0 lg:space-x-8 2xl:space-x-0">
                        <div className="flex-1 flex items-center">
                            <div className="w-full flex flex-col gap-8">

                                <Card width="w-auto bg-warning relative">
                                    <div className='w-full flex justify-start items-center'>
                                        <h3 className="text-3xl md:text-7xl text-dark font-bold leading-[100px]">Toro</h3>

                                        <Badge text='Wordpress' className='h-auto bg-primary border-dark -rotate-12 -translate-x-12 translate-y-6' />
                                    </div>
                                    <hr className='w-3/6 mt-6 h-2 bg-primary' />
                                    <p className="text-dark my-10 font-Montserrat text-justify z-0">
                                        ¿Buscas una agencia de marketing digital en Colombia que te ofrezca soluciones de diseño excepcionales? En nuestra agencia, te ayudamos a <strong>transformar tu presencia</strong> en línea con un diseño innovador y efectivo.
                                    </p>
                                    <p className="text-dark my-10 font-Montserrat text-justify z-0">
                                        Desde la creación de logotipos hasta el diseño de sitios web, nuestro <strong>enfoque personalizado</strong> asegura que tu marca destaque. Descubre cómo nuestra experiencia como agencia de marketing en Colombia puede llevar tu negocio al siguiente nivel. ¡Contáctanos hoy y haz que tu marca brille!
                                    </p>

                                </Card>

                            </div>
                        </div>
                        <div className="flex-1 flex items-center justify-center transition duration-300 relative self-center px-4 overflow-hidden">
                            <Image
                                src={caseStudy1}
                                alt='case study1'
                                objectFit='cover'
                                className='rounded-full hover:rounded-xl transition-all duration-300 ease-in-out w-[400px] h-[400px] hover:w-[100%] hover:h-[450px] hover:object-cover border-2 hover:border-0 border-dark object-cover'
                            />
                        </div>
                    </div>
                    <div className="container mx-auto flex flex-col lg:flex-row-reverse space-y-8 space-y-reverse lg:space-y-0 lg:space-x-8 2xl:space-x-0">
                        <div className="flex-1 flex items-center">
                            <div className="w-full flex flex-col gap-8">

                                <Card width="w-auto bg-primary relative">
                                    <div className='w-full flex justify-start items-center'>
                                        <h3 className="text-3xl md:text-7xl text-dark font-bold leading-[100px]">Monarch</h3>

                                        <Badge text='Wordpress' className='h-auto bg-accent border-dark -rotate-12 -translate-x-12 translate-y-6' />
                                    </div>
                                    <hr className='w-3/6 mt-6 h-2 bg-accent' />
                                    <p className="text-dark my-10 font-Montserrat text-justify z-0">
                                        ¿Buscas una agencia de marketing digital en Colombia que te ofrezca soluciones de diseño excepcionales? En nuestra agencia, te ayudamos a <strong>transformar tu presencia</strong> en línea con un diseño innovador y efectivo.
                                    </p>
                                    <p className="text-dark my-10 font-Montserrat text-justify z-0">
                                        Desde la creación de logotipos hasta el diseño de sitios web, nuestro <strong>enfoque personalizado</strong> asegura que tu marca destaque. Descubre cómo nuestra experiencia como agencia de marketing en Colombia puede llevar tu negocio al siguiente nivel. ¡Contáctanos hoy y haz que tu marca brille!
                                    </p>

                                </Card>

                            </div>
                        </div>
                        <div className="flex-1 flex items-center justify-center transition duration-300 relative self-center px-4 overflow-hidden">
                            <Image
                                src={caseStudy1}
                                alt='case study1'
                                objectFit='cover'
                                className='rounded-full hover:rounded-xl transition-all duration-300 ease-in-out w-[400px] h-[400px] hover:w-[100%] hover:h-[450px] hover:object-cover border-2 hover:border-0 border-dark object-cover'
                            />
                        </div>
                    </div>
                </section>

            </div>

            <Footer />
        </Layout>
    );
}

export default Portfolio;