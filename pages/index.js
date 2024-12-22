import { useState } from 'react';

import Nav from '../components/Nav/nav';
import Layout from '../components/Layout/layout';
import Work from '../components/Work/work';
import WorkMobile from '../components/WorkMobile/work';
import Form from '../components/Form/form';
import Footer from '../components/Footer/footer';
import Hero from '../components/Hero/hero';
import Card from '../components/Card/card';
import Circles from '../components/Circles/circles';
import Accordion from '../components/Accordion/accordion'
import LockedCard from '../components/LockedCard/lockedCard'
import CustomMarquee from '../components/CustomMarquee/customMarquee'
import Marquee from "react-fast-marquee";
import Image from 'next/image';

const audi = require('../src/img/audi_logo.svg')
const ddb = require('../src/img/DDB_logo.svg')
const lce = require('../src/img/lce_logo.svg')
const vensure = require('../src/img/vensure_logo.svg')
const goo = require('../src/img/goo_logo.svg')
const spot = require('../src/img/spot_logo.svg')

export default function Home() {
  const [activeIndex, setActiveIndex] = useState(null);

  const itemsAccordion = [
    {
      question: "I studied this out of context career...",
      answer: "Studying Advertising may seem out of context for a frontend developer, but it provides a unique perspective. It taught me how to understand user behavior, design compelling visuals, and create engaging narratives—skills that perfectly complement the technical aspects of web development. This background helps me craft not just functional websites but experiences that truly connect with users.",
      bgColor: 'bg-warning hover:bg-primary focus:bg-primary transition-all duration-500'
    },
    {
      question: "I'm a master!",
      answer: "I completed a Master’s in Fullstack Web Development at the University of Catalonia. This intensive program deepened my expertise in both frontend and backend technologies, equipping me with the skills to design scalable, efficient, and dynamic web applications. It was a transformative experience that solidified my passion for coding and innovation.",
      bgColor: 'bg-warning hover:bg-primary focus:bg-primary transition-all duration-500'
    },
    {
      question: "Moreover, I've also studied other things...",
      answer: "I also explored the world of Cinematography at the Universidad Tecnológica de Pereira. This creative endeavor sharpened my eye for aesthetics, storytelling, and visual composition. These skills greatly enhance my ability to design visually stunning websites and create interactive user experiences that captivate and inspire.",
      bgColor: 'bg-warning hover:bg-primary focus:bg-primary transition-all duration-500'
    },
  ];


  const icon1 = require('../src/img/icon1.svg')
  const icon2 = require('../src/img/icon2.svg')
  const icon3 = require('../src/img/icon3.svg')

  const itemsCards = [
    {
      title: 'Efficient',
      imgUrl: icon1,
      description: "I prioritize clean, optimized code to deliver fast, scalable, and reliable solutions. My focus on efficiency ensures every project I work on is streamlined and performs seamlessly under any conditions.",
      btnUrl: "https://www.example.com/url1",
      bgColor: 'bg-primary'
    },
    {
      title: 'Smart',
      imgUrl: icon2,
      description: "I approach challenges with innovative problem-solving and strategic thinking. By leveraging the latest technologies and best practices, I build smart, future-proof solutions tailored to your team's needs.",
      btnUrl: "https://www.example.com/url2",
      bgColor: 'bg-warning'
    },
    {
      title: 'Dynamic',
      imgUrl: icon3,
      description: "I adapt to changing requirements and thrive in fast-paced environments. My dynamic skill set allows me to handle everything from frontend interactivity to backend integrations with ease.",
      btnUrl: "https://www.example.com/url3",
      bgColor: 'bg-accent'
    }
  ];

  return (
    <>
      <Nav />
      <Layout>
        <Hero />

        <section id='work' className="hidden lg:block z-20 lg:-translate-y-[50px] 2xl:-translate-y-[100px] bg-primary min-h-auto md:min-h-screen 2xl:min-h-[80vh]py-24 rounded-tl-3xl lg:rounded-tl-[50px] 2xl:rounded-tl-[100px] rounded-tr-3xl lg:rounded-tr-[50px] 2xl:rounded-tr-[100px]">
          <Work />
        </section>


        <section className="block lg:hidden bg-primary min-h-auto rounded-tl-0 rounded-tr-0">
          <WorkMobile />
        </section>

        <section className='max-w-full bg-primary overflow-visible -mt-[100px]'>
          <div className='w-[100vw] bg-light rotate-3 translate-y-2'>
            <CustomMarquee />
          </div>
        </section>

        <section className='w-full min-h-screen pt-24 pb-0 md:pb-24 px-4 xl:px-0 flex flex-col justify-center items-center bg-dark'>
          <h2 className='font-Unbounded font-black text-center text-4xl xl:text-7xl text-white flex md:hidden'>Here's why you need me on the team</h2>
          <h2 className='font-Unbounded font-black text-4xl lg:text-5xl xl:text-7xl text-white hidden md:flex'>Here's why you</h2>
          <h2 className='font-Unbounded font-black text-4xl lg:text-5xl xl:text-7xl text-white hidden md:flex'><span className='px-0 lg:px-4 py-4 text-4xl lg:text-5xl xl:text-7xl text-light font-light bg-secondary hover:bg-primary scale-[90%] transition-all duration-300 rounded-full border-2 border-light -mx-4 -rotate-12'><span className='border-2 border-dotted border-dark  rounded-full px-8 py-0'>need me</span></span>on the team</h2>
          <div className='container mx-auto mt-8 flex flex-col lg:flex-row justify-center items-center gap-12 xl:gap-24'>

            {itemsCards.map((item) => (
              <LockedCard bgColor={item.bgColor} imgUrl={item.imgUrl} title={item.title} description={item.description} btnUrl={item.btnUrl} />
            ))}
          </ div>
        </section>

        <section className='w-full max-w-full mt-12 pb-20'>
          <div className="w-full mx-auto flex flex-col justify-start items-center relative pt-20 md:pt-0">
            {/* <div className="w-[100px] h-full absolute left-0 bg-gradient-to-r from-dark to-transparent z-10"></div> */}
            <Marquee>
              <Image
                src={audi}
                className="self-center w-40 mx-20"
                alt='separador de textos'
              />
              <Image
                src={ddb}
                className="self-center w-40 mx-20"
                alt='separador de textos'
              />
              <Image
                src={lce}
                className="self-center w-40 mx-20"
                alt='separador de textos'
              />
              <Image
                src={vensure}
                className="self-center w-40 mx-20"
                alt='separador de textos'
              />
              <Image
                src={goo}
                className="self-center w-40 mx-20"
                alt='separador de textos'
              />
              <Image
                src={spot}
                className="self-center w-40 mx-20"
                alt='separador de textos'
              />
              <Image
                src={audi}
                className="self-center w-40 mx-20"
                alt='separador de textos'
              />
              <Image
                src={ddb}
                className="self-center w-40 mx-20"
                alt='separador de textos'
              />
              <Image
                src={lce}
                className="self-center w-40 mx-20"
                alt='separador de textos'
              />
              <Image
                src={vensure}
                className="self-center w-40 mx-20"
                alt='separador de textos'
              />
              <Image
                src={goo}
                className="self-center w-40 mx-20"
                alt='separador de textos'
              />
              <Image
                src={spot}
                className="self-center w-40 mx-20"
                alt='separador de textos'
              />
            </Marquee>

            {/* <div className="w-[100px] h-full absolute left-0 bg-gradient-to-r from-dark to-transparent z-10"></div> */}
          </div>
        </section>

        <section className='w-full relative h-auto lg:h-screen py-24 lg:py-0 px-5 lg:px-8 2xl:px-0  flex flex-col justify-center items-center bg-warning bg-[linear-gradient(to_right,#80808010_1px,transparent_1px),linear-gradient(to_bottom,#80808010_1px,transparent_1px)] bg-[size:50px_50px]'>
          <div className='absolute left-80 top-24 flex flex-col justify-center items-start'>

          </div>
          <div className='container mx-auto flex flex-col lg:flex-row-reverse gap-8'>
            <div className='w-3/6 hidden lg:flex justify-center items-center'>
              <Circles />
            </div>
            <div className='w-full lg:w-3/6 flex flex-col gap-4 justify-center items-start'>
              <h2 className='font-Unbounded font-black text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl text-dark flex mb-2 lg:mb-4'>What I have</h2>
              <h2 className='font-Unbounded font-black text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl text-dark flex mb-8'>
                <span className='px-8 py-2 text-4xl lg:text-5xl xl:text-7xl text-warning bg-dark hover:bg-primary transition-all duration-300 rounded-full border-2 border-dark -mt-3 mr-4'>
                  done
                </span>
                so far.
              </h2>
              {itemsAccordion.map((item, index) => (
                <Accordion
                  key={index}
                  question={item.question}
                  answer={item.answer}
                  isActive={activeIndex === index}
                  onToggle={() => setActiveIndex(activeIndex === index ? null : index)}
                  className={`${item.bgColor} boder-dark w-full`}
                />
              ))}
            </div>
          </div>
        </section>


        <section id="contact" className='w-full pb-12 lg:pb-24 pt-12 lg:pt-24 px-5 lg:px-8 2xl:px-0 bg-dark flex justify-center items-center rounded-tl-[100px] rounded-tr-[100px]'>
          <div className='container mx-auto'>
            <Card width='w-full bg-primary hover:bg-warning transition-all duration-700' className='w-full mb-12 bg-primary'>
              <h2 className='font-Unbounded font-black text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl'>Put in touch!</h2>
              <p className='w-full text-lg lg:w-3/6 mt-4 mb-8'>Are you looking for a freelance or a full time web developer? Just send me a message and I'll hit you up ASAP!</p>
              <Form />
            </Card>
          </div>
        </section>

        <Footer />
      </Layout >

    </>
  );
}
