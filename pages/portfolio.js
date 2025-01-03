import Nav from "../components/Nav/nav";
import Layout from '../components/Layout/layout';
import Card from "../components/Card/card";
import Badge from "../components/Badge/badge";
import Button from "../components/Button/button";
import Image from "next/image";
import Footer from "../components/Footer/footer";
import HorizontalScroll from '../components/HorizontalScroll/horizontalScroll';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileAlt } from "@fortawesome/free-solid-svg-icons";

const caseStudy1 = require('../src/img/lce_card.png');
const caseStudy2 = require('../src/img/toro_card.png');
const caseStudy3 = require('../src/img/monarch_card.png');

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

                <section className="w-full bg-light px-4 2xl:px-0 py-24 lg:py-48 flex flex-col gap-24 lg:gap-48 bg-[linear-gradient(to_right,#80808010_1px,transparent_1px),linear-gradient(to_bottom,#80808010_1px,transparent_1px)] bg-[size:50px_50px]">
                    <div className="container flex flex-col items-center justify-end mx-auto">
                        <h2 className='font-Unbounded font-black text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl text-dark flex sm:hidden mb-8 w-full'>More, but not least interesting projects</h2>
                        <h2 className='font-Unbounded font-black text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl text-dark hidden sm:flex mb-8'>More, but not</h2>
                        <h2 className='font-Unbounded font-black text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl text-dark hidden sm:flex'>least<span className='px-8 py-4 text-4xl lg:text-5xl xl:text-6xl text-light bg-primary hover:bg-accent font-black transition-all duration-300 rounded-full border-2 border-dark -mx-4 -rotate-12'>interesting</span>projects</h2>
                    </div>
                    <div className="container mx-auto flex flex-col-reverse lg:flex-row-reverse space-y-8 space-y-reverse lg:space-y-0 space-x-0 lg:space-x-8 2xl:space-x-0">
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
                                className='rounded-full hover:rounded-xl transition-all duration-300 ease-in-out w-[300px] sm:w-[400px] h-[300px] sm:h-[400px] hover:w-[100%] hover:h-[450px] hover:object-cover border-2 hover:border-0 border-dark object-cover'
                            />
                        </div>
                    </div>
                    <div className="container mx-auto flex flex-col-reverse lg:flex-row space-y-8 space-y-reverse lg:space-y-0 lg:space-x-8 2xl:space-x-0">
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
                                src={caseStudy2}
                                alt='case study1'
                                objectFit='cover'
                                className='rounded-full hover:rounded-xl transition-all duration-300 ease-in-out w-[300px] sm:w-[400px] h-[300px] sm:h-[400px] hover:w-[100%] hover:h-[450px] hover:object-cover border-2 hover:border-0 border-dark object-cover'
                            />
                        </div>
                    </div>
                    <div className="container mx-auto flex flex-col-reverse lg:flex-row-reverse space-y-8 space-y-reverse lg:space-y-0 space-x-0 lg:space-x-8 2xl:space-x-0">
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
                                src={caseStudy3}
                                alt='case study1'
                                objectFit='cover'
                                className='rounded-full hover:rounded-xl transition-all duration-300 ease-in-out w-[300px] sm:w-[400px] h-[300px] sm:h-[400px] hover:w-[100%] hover:h-[450px] hover:object-cover border-2 hover:border-0 border-dark object-cover'
                            />
                        </div>
                    </div>
                </section>

                <section className='w-full bg-primary hover:bg-warning transition-colors duration-1000 py-24 px-4 2xl:px-0'>
                    <div className='container mx-auto text-center flex flex-col items-center gap-8'>

                        <div className='w-8/12 flex flex-col justify-center items-center'>
                            <h2 className='font-Unbounded font-black text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl text-dark flex mb-2 lg:mb-8'>Do you wanna</h2>
                            <h2 className='font-Unbounded font-black text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl text-dark flex'>
                                <span className='px-8 py-2 text-4xl lg:text-5xl xl:text-7xl text-warning hover:text-dark bg-dark hover:bg-warning transition-all duration-300 rounded-full border-2 border-dark -mt-3 mr-4'>
                                    see
                                </span>
                                more?
                            </h2>
                        </div>
                        <Button
                            onClick={() => {
                                router.push('#work')
                            }}
                            className={`w-80 text-center flex justify-center hoverable bg-warning hover:bg-primary shadow-dark border-dark`}
                        >
                            Download my CV <FontAwesomeIcon icon={faFileAlt} style={{ fontSize: 20 }} className="text-dark translate-x-2 2xl:translate-x-5 transition duration-300" />
                        </Button>
                    </div>
                </section>
            </div>

            <Footer />
        </Layout>
    );
}

export default Portfolio;