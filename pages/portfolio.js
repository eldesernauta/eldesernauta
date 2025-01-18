import { useRouter } from 'next/navigation'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileAlt } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import Image from "next/image";

import { useCursor } from '../context/CursorContext';

import Nav from "../components/Nav/nav";
import Layout from '../components/Layout/layout';
import Card from "../components/Card/card";
import Badge from "../components/Badge/badge";
import Button from "../components/Button/button";
import Footer from "../components/Footer/footer";
import HorizontalScroll from '../components/HorizontalScroll/horizontalScroll';

const caseStudy1 = require('../src/img/lce_card.png');
const caseStudy2 = require('../src/img/toro_card.png');
const caseStudy3 = require('../src/img/monarch_card.png');
const caseStudy4 = require('../src/img/audi_card.png');

const Portfolio = () => {
    const { setCursorText, setCursorVariant } = useCursor()

    function caseEnter() {
        setCursorText("");
        setCursorVariant("hoverable");
    }

    function casetLeave() {
        setCursorText("");
        setCursorVariant("default");
    }

    const router = useRouter()
    return (
        <Layout>
            <Nav />{/* Horizontal Scroll Section */}
            <div
                className="w-screen relative bg-dark flex justify-start items-center flex-col bg-[linear-gradient(to_right,#80808010_1px,transparent_1px),linear-gradient(to_bottom,#80808010_1px,transparent_1px)] bg-[size:50px_50px]"
            >

                <section className="w-full px-4 2xl:px-0 pt-12 lg:pt-40">
                    <div className="container mx-auto hidden lg:flex flex-col relative">
                        <HorizontalScroll />
                    </div>
                    <div className="w-full flex flex-col lg:hidden gap-8 py-24 items-stretch">

                        <h2 className='font-Unbounded font-black text-4xl lg:text-5xl xl:text-6xl 2xl:text-8xl text-light flex lg:hidden mb-8 w-full'>The most interesting projects I've worked on</h2>
                        <section className="w-full relative mt-8 2xl:mt-12 px-0 flex flex-col gap-0">

                            <div className="flex bg-primary hover:bg-accent transition-all duration-700 z-10 min-h-[500px] rounded-xl shadow-light items-between justify-start gap-20 mx-auto border-2 border-light p-8 sm:p-12">
                                <div className='w-full flex flex-col justify-between gap-8 md:gap-0'>
                                    <div className="w-full flex justify-between items-start">
                                        {/* <Image
                                                src={logo1}
                                                width={150}
                                                className="brightness-0"
                                                alt="logo goo"
                                            /> */}
                                        <h2 className='text-dark font-Unbounded text-5xl font-bold uppercase'>01</h2>
                                    </div>
                                    <div className="w-full flex flex-col justify-between items-end">

                                        <div className="w-full lg:w-[50%] flex flex-col items-start justify-start">
                                            <h3 className="text-3xl lg:text-2xl xl:text-3xl font-bold w-full">Goo Hub:</h3>
                                            <p className="mt-4 font-Unbounded text-justify w-full">
                                                Goo Hub is a digital marketing agency where quality and affordability come together, offering services such as UX/UI design, fullstack web development, and tailored digital marketing strategies.
                                            </p>
                                        </div>
                                        <Button
                                            onClick={() => {
                                                router.push('/portfolio/goo')
                                            }}
                                            className={`w-full mt-8 text-center flex justify-center hoverable bg-warning hover:bg-primary shadow-dark border-dark`}
                                        >
                                            Wanne see?
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section className="w-full relative mt-8 2xl:mt-12 px-0 flex flex-col gap-0">

                            <div className="flex bg-warning hover:bg-accent transition-all duration-700 z-10 min-h-[500px] rounded-xl shadow-light items-between justify-start gap-20 mx-auto border-2 border-light p-8 sm:p-12">
                                <div className='w-full flex flex-col justify-between gap-8 md:gap-0'>
                                    <div className="w-full flex justify-between items-start">
                                        {/* <Image
                                                src={logo2}
                                                width={150}
                                                className="brightness-0"
                                                alt="logo goo"
                                            /> */}
                                        <h2 className='text-dark font-Unbounded text-5xl font-bold uppercase'>02</h2>
                                    </div>
                                    <div className="w-full flex flex-col  justify-between items-end">

                                        <div className="w-full lg:w-[50%] flex flex-col items-start justify-start">
                                            <h3 className="text-3xl lg:text-2xl xl:text-3xl font-bold w-full">Audi Spain:</h3>
                                            <p className="mt-4 font-Unbounded text-justify w-full">
                                                During my time at DDB Colombia, I worked with globally recognized brands like Audi, Estée Lauder, Tom Ford, and others. These experiences taught me the importance of attention to detail and,,,
                                            </p>
                                        </div>
                                        <Button
                                            onClick={() => {
                                                router.push('/portfolio/ddb')
                                            }}
                                            className={`w-full mt-8 text-center flex justify-center hoverable bg-primary hover:bg-warning shadow-dark border-dark`}
                                        >
                                            Wanne see?
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section className="w-full relative mt-8 2xl:mt-12 px-0 flex flex-col gap-0">

                            <div className="flex bg-primary hover:bg-accent transition-all duration-700 z-10 min-h-[500px] rounded-xl shadow-light items-between justify-start gap-20 mx-auto border-2 border-light p-8 sm:p-12">
                                <div className='w-full flex flex-col justify-between gap-8 md:gap-0'>
                                    <div className="w-full flex justify-between items-start">
                                        {/* <Image
                                                src={logo3}
                                                width={150}
                                                className="brightness-0 -translate-x-8 -translate-y-8"
                                                alt="logo goo"
                                            /> */}
                                        <h2 className='text-dark font-Unbounded text-5xl font-bold uppercase'>03</h2>
                                    </div>
                                    <div className="w-full flex flex-col  justify-between items-end">

                                        <div className="w-full lg:w-[50%] flex flex-col items-start justify-start">
                                            <h3 className="text-3xl lg:text-2xl xl:text-3xl font-bold w-full">Incrustes:</h3>
                                            <p className="mt-4 font-Unbounded text-justify w-full">
                                                Incrustes, one of my colleagues specializing in UX/UI design, created a detailed prototype in Figma for this project. I collaborated with him to bring his vision to life using React, Tailwind, and...
                                            </p>
                                        </div>
                                        <Button
                                            onClick={() => {
                                                router.push('/portfolio/incrustes')
                                            }}
                                            className={`w-full mt-8 text-center flex justify-center hoverable bg-warning hover:bg-primary shadow-dark border-dark`}
                                        >
                                            Wanne see?
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </section>

                <section className="w-full bg-light px-4 2xl:px-0 py-24 2xl:py-48 flex flex-col gap-24 lg:gap-32 bg-[linear-gradient(to_right,#80808010_1px,transparent_1px),linear-gradient(to_bottom,#80808010_1px,transparent_1px)] bg-[size:50px_50px]">
                    <div className="container flex flex-col items-center justify-end mx-auto">
                        <h2 className='font-Unbounded font-black text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl text-dark flex sm:hidden mb-8 w-full'>More, but not least interesting projects</h2>
                        <h2 className='font-Unbounded font-black text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl text-dark hidden sm:flex mb-8'>More, but not</h2>
                        <h2 className='font-Unbounded font-black text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl text-dark hidden sm:flex'>least<span className='px-8 py-4 text-4xl lg:text-5xl xl:text-6xl text-light bg-primary hover:bg-accent font-black transition-all duration-300 rounded-full border-2 border-dark -mx-4 -rotate-12'>interesting</span>projects</h2>
                    </div>
                    <div className="container mx-auto flex flex-col lg:flex-row gap-8">
                        <div className="w-full lg:w-3/6 flex items-center">
                            <div className="w-full flex flex-col gap-8">

                                <Card width="w-auto bg-secondary relative">
                                    <div className='w-full flex justify-start items-center'>
                                        <h3 className="text-3xl md:text-7xl text-dark font-bold leading-[100px]">Audi Spain</h3>

                                        <Badge text='AEM' className='h-auto font-Adam font-medium bg-primary border-dark -rotate-12 -translate-x-12 translate-y-6' />
                                    </div>
                                    <hr className='w-3/6 mt-6 h-2 border-none bg-primary' />
                                    <p className="text-light my-10 font-Adam text-lg text-justify z-0">
                                        During my tyme at <strong>DDB Colombia</strong>, I had the opportunity to work with large companies like <strong>Audi, Estee Lauder, Tom Ford, MAC</strong> and much other companies that improved my attention to the detail.
                                    </p>
                                    <p className="text-light hidden 2xl:block my-10 font-Adam text-lg text-justify z-0">
                                        Not only developing but also working with several CMS, creating email campaings, HTML layouts or a bunch of other cool jobs that teached me a lot.
                                    </p>

                                </Card>

                            </div>
                        </div>
                        <div className="w-full lg:w-3/6 flex items-center justify-center transition duration-300 relative self-center px-4 overflow-hidden">
                            <Image
                                onMouseEnter={caseEnter}
                                onMouseLeave={casetLeave}
                                src={caseStudy4}
                                alt='case study1'
                                objectFit='contain'
                                className='rounded-full hover:rounded-xl transition-all duration-300 ease-in-out w-[300px] sm:w-[400px] h-[300px] sm:h-[400px] hover:w-[100%] hover:h-[450px] hover:object-contain border-2 hover:border-0 border-dark object-cover'
                            />
                        </div>
                    </div>
                    <div className="container mx-auto flex flex-col lg:flex-row gap-8 -mb-12">

                        <div className="w-full lg:w-3/6 flex items-center justify-center transition duration-300 relative self-center px-4 overflow-hidden">
                            <Image
                                onMouseEnter={caseEnter}
                                onMouseLeave={casetLeave}
                                src={caseStudy1}
                                alt='case study1'
                                objectFit='cover'
                                className='rounded-full hover:rounded-xl transition-all duration-300 ease-in-out w-[300px] sm:w-[400px] h-[300px] sm:h-[400px] hover:w-[100%] hover:h-[450px] hover:object-contain border-2 hover:border-0 border-dark object-cover'
                            />
                        </div>
                        <div className="w-full lg:w-3/6 flex items-center">
                            <div className="w-full flex flex-col gap-8">

                                <Card width="w-auto bg-accent relative">
                                    <div className='w-full flex justify-start items-center'>
                                        <h3 className="text-3xl md:text-7xl text-dark font-bold leading-[100px]">La Cima</h3>

                                        <Badge text='Wordpress' className='h-auto font-Adam font-medium bg-primary border-dark -rotate-12 -translate-x-12 translate-y-6' />
                                    </div>
                                    <hr className='w-3/6 mt-6 h-2 bg-primary' />
                                    <p className="text-dark my-10 font-Adam text-lg text-justify z-0">
                                        <strong>La Cima Ecohotel</strong> in Buenavista, Quindio, offers a glamping experience with stunning views. The site’s carousels and galleries were designed to showcase these vistas, embodying the brand’s concept of being at the peak.
                                    </p>
                                    <p className="text-dark hidden 2xl:block my-10 font-Adam text-lg text-justify z-0">
                                        Developed with <strong>WordPress</strong> and <strong>Elementor</strong>, the website was based on a Figma prototype, using tailored color palettes and design kits to create an intuitive and visually striking user experience.
                                    </p>

                                </Card>

                            </div>
                        </div>
                    </div>
                    <div className="container mx-auto my-16 flex flex-col-reverse lg:flex-row gap-8 -mb-2">
                        <div className="w-full lg:w-3/6 flex items-center">
                            <div className="w-full flex flex-col gap-8">

                                <Card width="w-auto bg-warning relative">
                                    <div className='w-full flex justify-start items-center'>
                                        <h3 className="text-3xl md:text-7xl text-dark font-bold leading-[100px]">Toro</h3>

                                        <Badge text='Wordpress' className='h-auto font-Adam font-medium bg-primary border-dark -rotate-12 -translate-x-12 translate-y-6' />
                                    </div>
                                    <hr className='w-3/6 mt-6 h-2 bg-primary' />
                                    <p className="text-dark my-10 font-Adam text-lg text-justify z-0">
                                        <strong>Toro Handyman</strong>, based in Bastrop, TX, needed a website to attract new clients. A key feature was a custom quotation calculator, simplifying the process for potential customers to estimate project costs.
                                    </p>
                                    <p className="text-dark hidden 2xl:block my-10 font-Adam text-lg text-justify z-0">
                                        Built with <strong>WordPress</strong> and <strong>Elementor</strong>, the site used the Calculated Fields Form plugin to implement the calculator, ensuring functionality and ease of use while maintaining a professional and clean design.
                                    </p>

                                </Card>

                            </div>
                        </div>
                        <div className="w-full lg:w-3/6 flex items-center justify-center transition duration-300 relative self-center px-4 overflow-hidden">
                            <Image
                                onMouseEnter={caseEnter}
                                onMouseLeave={casetLeave}
                                src={caseStudy2}
                                alt='case study1'
                                objectFit='cover'
                                className='rounded-full hover:rounded-xl transition-all duration-300 ease-in-out w-[300px] sm:w-[400px] h-[300px] sm:h-[400px] hover:w-[100%] hover:h-[450px] hover:object-contain border-2 hover:border-0 border-dark object-cover'
                            />
                        </div>
                    </div>
                    <div className="container mx-auto flex flex-col lg:flex-row gap-8">
                        <div className="w-full lg:w-3/6 flex items-center justify-center transition duration-300 relative self-center px-4 overflow-hidden">
                            <Image
                                onMouseEnter={caseEnter}
                                onMouseLeave={casetLeave}
                                src={caseStudy3}
                                alt='case study1'
                                objectFit='cover'
                                className='rounded-full hover:rounded-xl transition-all duration-300 ease-in-out w-[300px] sm:w-[400px] h-[300px] sm:h-[400px] hover:w-[100%] hover:h-[450px] hover:object-contain border-2 hover:border-0 border-dark object-cover'
                            />
                        </div>
                        <div className="w-full lg:w-3/6 flex items-center">
                            <div className="w-full flex flex-col gap-8">

                                <Card width="w-auto bg-primary relative">
                                    <div className='w-full flex justify-start items-center'>
                                        <h3 className="text-3xl md:text-7xl text-dark font-bold leading-[100px]">Monarch</h3>

                                        <Badge text='Wordpress' className='h-auto font-Adam font-medium bg-accent border-dark -rotate-12 -translate-x-12 translate-y-6' />
                                    </div>
                                    <hr className='w-3/6 mt-6 h-2 bg-accent' />
                                    <p className="text-dark my-10 font-Adam text-lg text-justify z-0">
                                        <strong>Monarch Cleaning Group</strong>, a cleaning company in Bastrop, TX, needed a simple yet elegant website to showcase their services and values. The site effectively highlights their commitment to professionalism and quality.
                                    </p>
                                    <p className="text-dark hidden 2xl:block my-10 font-Adam text-lg text-justify z-0">
                                        Developed with <strong>WordPress</strong> and <strong>Elementor</strong>, the design emphasizes clarity and aesthetics, creating a seamless user experience that reflects the company’s clean and organized approach.
                                    </p>

                                </Card>

                            </div>
                        </div>
                    </div>
                </section>

                <section className='w-full bg-primary hover:bg-warning transition-colors duration-1000 py-24 px-4 2xl:px-0'>
                    <div className='container mx-auto text-center flex flex-col items-center gap-8'>

                        <div className='w-full md:w-8/12 flex flex-col justify-center items-center'>
                            <h2 className='font-Unbounded font-black text-4xl md:text-5xl xl:text-6xl 2xl:text-7xl text-dark flex mb-8'>Do you wanna</h2>
                            <h2 className='font-Unbounded font-black text-4xl md:text-5xl xl:text-6xl 2xl:text-7xl text-dark flex'>
                                <span className='px-8 py-2 text-4xl md:text-5xl xl:text-7xl text-warning hover:text-dark bg-dark hover:bg-warning transition-all duration-300 rounded-full border-2 border-dark -mt-3 mr-4'>
                                    see
                                </span>
                                more?
                            </h2>
                        </div>
                        <Link
                            onMouseEnter={caseEnter}
                            onMouseLeave={casetLeave}
                            href='https://drive.google.com/file/d/1MDwNo-uwx6M1yOkkOnsgjZtCK6pj0rYP/view?usp=sharing'
                            target="_blank"
                            className={`w-80 text-center font-Adam flex justify-center hoverable bg-warning hover:bg-primary shadow-dark border-dark text-text cursor-none items-center rounded-full border-2 border-border bg-main px-12 py-4 font-bold uppercase  transition-all duration-300 hover:translate-x-boxShadowX hover:translate-y-boxShadowY hover:shadow-none dark:hover:shadow-none`}
                        >
                            Download my CV <FontAwesomeIcon icon={faFileAlt} style={{ fontSize: 20 }} className="text-dark translate-x-2 2xl:translate-x-5 transition duration-300" />
                        </Link>
                    </div>
                </section>
            </div >

            <Footer />
        </Layout >
    );
}

export default Portfolio;