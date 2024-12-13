import { useEffect, useRef } from 'react';
import Nav from "../components/Nav/nav";
import Layout from '../components/Layout/layout';
import Card from "../components/Card/card";
import Badge from "../components/Badge/badge";
import Button from "../components/Button/button";
import Image from "next/image";
import Footer from "../components/Footer/footer";
import HorizontalScroll from '../components/HorizontalScroll/horizontalScroll';

const caseStudy1 = require('../src/img/goo_card.jpg');

const Portfolio = () => {
    return (
        <Layout>
            <Nav />{/* Horizontal Scroll Section */}
            <div
                className="w-screen relative bg-light flex justify-start items-center flex-col"
            >

                <section className="px-4 2xl:px-0 pt-12 lg:pt-24">
                    <div className="container mx-auto flex flex-col relative">
                        <HorizontalScroll />
                    </div>
                </section>
                {/* <section className="w-full mt-12 mb-24">
                    <div className="container mx-auto flex flex-col lg:flex-row space-y-8 space-y-reverse lg:space-y-0 lg:space-x-8 2xl:space-x-0">
                        <div className="flex-1 flex items-center ">
                            <div className="w-full flex flex-col gap-8">

                                <Card width="w-auto bg-light relative">
                                    <div className='w-full flex justify-start items-center'>
                                        <h3 className="text-3xl md:text-7xl text-dark font-bold leading-[100px] font-Wobblezz">Goo Hub</h3>

                                        <Badge text='freelance' className='h-auto bg-accent border-dark -rotate-12 -translate-x-12 translate-y-6' />
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

                                </Card>

                            </div>
                        </div>
                        <div className="w-full flex-1 flex items-center justify-center transition duration-300 relative self-center">
                            <Image
                                src={caseStudy1}
                                alt='case study1'
                                objectFit='cover'
                                className='rounded-full hover:rounded-none transition-all duration-300 ease-in-out w-[400px] h-[400px] hover:w-[700px] hover:scale-110 border-2 border-dark object-cover'
                            />
                        </div>
                    </div>
                </section>

                <section className="w-full my-24">
                    <div className="container mx-auto flex flex-col lg:flex-row-reverse space-y-8 space-y-reverse lg:space-y-0 lg:space-x-8 2xl:space-x-0">
                        <div className="flex-1 flex items-center">
                            <div className="w-full flex flex-col gap-8">

                                <Card width="w-auto bg-light relative">
                                    <div className='w-full flex justify-start items-center'>
                                        <h3 className="text-3xl md:text-7xl text-dark font-bold leading-[100px] font-Wobblezz">Goo Hub</h3>

                                        <Badge text='freelance' className='h-auto bg-accent border-dark -rotate-12 -translate-x-12 translate-y-6' />
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

                                </Card>

                            </div>
                        </div>
                        <div className="flex-1 flex items-center justify-center transition duration-300 relative self-center">
                            <Image
                                src={caseStudy1}
                                alt='case study1'
                                objectFit='cover'
                                className='rounded-full hover:rounded-none transition-all duration-300 ease-in-out w-[400px] h-[400px] hover:w-[700px] hover:scale-110 border-2 border-dark object-cover'
                            />
                        </div>
                    </div>
                </section>

                <section className="w-full my-24">
                    <div className="container mx-auto flex flex-col lg:flex-row space-y-8 space-y-reverse lg:space-y-0 lg:space-x-8 2xl:space-x-0">
                        <div className="flex-1 flex items-center ">
                            <div className="w-full flex flex-col gap-8">

                                <Card width="w-auto bg-light relative">
                                    <div className='w-full flex justify-start items-center'>
                                        <h3 className="text-3xl md:text-7xl text-dark font-bold leading-[100px] font-Wobblezz">Goo Hub</h3>

                                        <Badge text='freelance' className='h-auto bg-accent border-dark -rotate-12 -translate-x-12 translate-y-6' />
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

                                </Card>

                            </div>
                        </div>
                        <div className="w-full flex-1 flex items-center justify-center transition duration-300 relative self-center">
                            <Image
                                src={caseStudy1}
                                alt='case study1'
                                objectFit='cover'
                                className='rounded-full hover:rounded-none transition-all duration-300 ease-in-out w-[400px] h-[400px] hover:w-[700px] hover:scale-110 border-2 border-dark object-cover'
                            />
                        </div>
                    </div>
                </section>

                <section className="w-full mt-24">
                    <div className="container mx-auto flex flex-col lg:flex-row-reverse space-y-8 space-y-reverse lg:space-y-0 lg:space-x-8 2xl:space-x-0">
                        <div className="flex-1 flex items-center">
                            <div className="w-full flex flex-col gap-8">

                                <Card width="w-auto bg-light relative">
                                    <div className='w-full flex justify-start items-center'>
                                        <h3 className="text-3xl md:text-7xl text-dark font-bold leading-[100px] font-Wobblezz">Goo Hub</h3>

                                        <Badge text='freelance' className='h-auto bg-accent border-dark -rotate-12 -translate-x-12 translate-y-6' />
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

                                </Card>

                            </div>
                        </div>
                        <div className="flex-1 flex items-center justify-center transition duration-300 relative self-center">
                            <Image
                                src={caseStudy1}
                                alt='case study1'
                                objectFit='cover'
                                className='rounded-full hover:rounded-none transition-all duration-300 ease-in-out w-[400px] h-[400px] hover:w-[700px] hover:scale-110 border-2 border-dark object-cover'
                            />
                        </div>
                    </div>
                </section> */}

            </div>

            {/* Vertical Scroll Section */}
            <div
                className="vertical bg-dark flex justify-center items-center flex-col py-28 h-screen w-screen overflow-y-scroll pointer-events-none"

            >
                <h2 className="text-4xl font-Wobblezz text-dark text-center">Vertical Scroll Section</h2>
                <section className="w-full mt-12 mb-24">
                </section>
            </div>
            <Footer />
        </Layout>
    );
}

export default Portfolio;