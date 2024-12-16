import { useState } from 'react';

import Nav from '../components/Nav/nav';
import Layout from '../components/Layout/layout';
import Marquee from '../components/Marquee/marquee'
import Work from '../components/Work/work';
import Form from '../components/Form/form';
import Footer from '../components/Footer/footer';
import Hero from '../components/Hero/hero';
import Card from '../components/Card/card';
import Circles from '../components/Circles/circles';
import Accordion from '../components/Accordion/accordion'
import Badge from '../components/Badge/badge';
import Button from '../components/Button/button';
import LockedCard from '../components/LockedCard/lockedCard'

export default function Home() {
  const [activeIndex, setActiveIndex] = useState(null);
  const items = ['HTML', 'CSS', 'Javascript', 'React', 'NextJs', 'Framer Motion', 'Wordpress', 'Webpack', 'Node', 'Git', 'AWS']
  const logos = ['HTML', 'CSS', 'Javascript', 'React', 'NextJs', 'Framer Motion', 'Wordpress', 'Webpack', 'Node', 'Git', 'AWS']


  const itemsAccordion = [
    {
      question: "Lorem ipsum dolor sit amet",
      answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis maiores delectus totam repellat provident minima, veniam sunt ullam voluptates, aliquid tempore consequatur, blanditiis laborum! Consequuntur hic veritatis deserunt! Iusto, nisi!",
      bgColor: 'bg-primary'

    },
    {
      question: "Lorem ipsum dolor sit amet",
      answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis maiores delectus totam repellat provident minima, veniam sunt ullam voluptates, aliquid tempore consequatur, blanditiis laborum! Consequuntur hic veritatis deserunt! Iusto, nisi!",
      bgColor: 'bg-warning hover:scale-110'

    },
    {
      question: "Lorem ipsum dolor sit amet",
      answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis maiores delectus totam repellat provident minima, veniam sunt ullam voluptates, aliquid tempore consequatur, blanditiis laborum! Consequuntur hic veritatis deserunt! Iusto, nisi!",
      bgColor: 'bg-primary hover:scale-110'

    },
  ];

  const icon1 = require('../src/img/icon1.svg')
  const icon2 = require('../src/img/icon2.svg')
  const icon3 = require('../src/img/icon3.svg')

  const itemsCards = [
    {
      title: 'Efficient',
      imgUrl: icon1,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      btnUrl: "https://www.example.com/url1",
      bgColor: 'bg-primary'
    },
    {
      title: 'Smart',
      imgUrl: icon2,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      btnUrl: "https://www.example.com/url2",
      bgColor: 'bg-warning'
    },
    {
      title: 'Dynamic',
      imgUrl: icon3,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      btnUrl: "https://www.example.com/url3",
      bgColor: 'bg-accent'
    }
  ]


  return (
    <>
      <Nav />
      <Layout>
        <section id="main" className="w-full h-auto lg:h-screen flex px-5 lg:px-8 2xl:px-0 pt-16 sm:pt-24 lg:pt-0 justify-center items-center bg-dark bg-[linear-gradient(to_right,#80808010_1px,transparent_1px),linear-gradient(to_bottom,#80808010_1px,transparent_1px)] bg-[size:50px_50px]">
          <Hero />
        </section>

        <section id='work' className="bg-primary min-h-auto md:min-h-screen 2xl:min-h-[80vh] py-24 rounded-tl-3xl lg:rounded-tl-[50px] 2xl:rounded-tl-[100px] rounded-tr-3xl lg:rounded-tr-[50px] 2xl:rounded-tr-[100px]">
          <Work />
        </section>

        <section className='max-w-full bg-primary overflow-visible'>
          <div className='w-[120vw] rotate-3 translate-y-2'>
            <Marquee items={items} bg={`bg-light`} />
          </div>
        </section>

        <section className='w-full min-h-screen py-24 px-4 xl:px-0 flex flex-col justify-center items-center bg-dark'>
          <h2 className='font-Unbounded font-black text-center text-4xl xl:text-7xl text-white flex md:hidden'>Here's why you need me on the team</h2>
          <h2 className='font-Unbounded font-black text-4xl lg:text-5xl xl:text-7xl text-white hidden md:flex'>Here's why you</h2>
          <h2 className='font-Unbounded font-black text-4xl lg:text-5xl xl:text-7xl text-white hidden md:flex'><span className='px-0 lg:px-4 py-4 text-4xl lg:text-5xl xl:text-7xl text-light font-light bg-secondary hover:bg-primary scale-[90%] transition-all duration-300 rounded-full border-2 border-light -mx-4 -rotate-12'><span className='border-2 border-dotted border-dark  rounded-full px-8 py-0'>need me</span></span>on the team</h2>
          <div className='container mx-auto mt-8 flex flex-col lg:flex-row justify-center items-center gap-12 xl:gap-24'>

            {itemsCards.map((item) => (
              <LockedCard bgColor={item.bgColor} imgUrl={item.imgUrl} title={item.title} description={item.description} btnUrl={item.btnUrl} />
            ))}
          </ div>
        </section>

        <Marquee items={items} bg={`bg-dark`} />

        <section className='w-full relative h-screen py-24 lg:py-0 px-5 lg:px-8 2xl:px-0  flex flex-col justify-center items-center bg-warning bg-[linear-gradient(to_right,#80808010_1px,transparent_1px),linear-gradient(to_bottom,#80808010_1px,transparent_1px)] bg-[size:50px_50px]'>
          <div className='absolute left-80 top-24 flex flex-col justify-center items-start'>

          </div>
          <div className='container mx-auto flex flex-col lg:flex-row-reverse gap-8'>
            <div className='w-3/6 hidden lg:flex justify-center items-center'>
              <Circles />
            </div>
            <div className='w-full lg:w-3/6 flex flex-col gap-4 justify-center items-start'>
              <h2 className='font-Unbounded font-black text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl text-dark flex mb-2 lg:mb-4'>Hear what my</h2>
              <h2 className='font-Unbounded font-black text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl text-dark flex mb-8'>
                <span className='px-8 py-2 text-4xl lg:text-5xl xl:text-7xl text-warning bg-dark hover:bg-primary transition-all duration-300 rounded-full border-2 border-dark -mt-3 mr-4'>
                  clients
                </span>
                say.
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
              <p className='w-full lg:w-3/6 mt-4 mb-8'>¿Buscas una agencia de marketing digital en Colombia que te ofrezca soluciones de diseño excepcionales? En nuestra agencia, te ayudamos</p>
              <Form />
            </Card>
          </div>
        </section>

        <Footer />
      </Layout >

    </>
  );
}
