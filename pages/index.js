// pages/index.js
import Nav from '../components/Nav/nav';
import Layout from '../components/Layout/layout';
import Marquee from '../components/Marquee/marquee'
import Work from '../components/Work/work';
import Form from '../components/Form/form';
import Footer from '../components/Footer/footer';
import Hero from '../components/Hero/hero';
import Card from '../components/Card/card';
import Circles from '../components/Circles/circles';
import Badge from '../components/Badge/badge';
import Button from '../components/Button/button';
import ReorderCards from '../components/ReorderCards/reorderCards';
import Values from '../components/Values/values'

export default function Home() {

  const items = ['HTML', 'CSS', 'Javascript', 'React', 'NextJs', 'Framer Motion', 'Wordpress', 'Webpack', 'Node', 'Git', 'AWS']
  const logos = ['HTML', 'CSS', 'Javascript', 'React', 'NextJs', 'Framer Motion', 'Wordpress', 'Webpack', 'Node', 'Git', 'AWS']

  return (
    <>
      <Nav />
      <Layout>
        <section className="w-full h-auto lg:h-screen flex px-5 lg:px-8 2xl:px-0 pt-16 sm:pt-24 lg:pt-0 justify-center items-center bg-light bg-[linear-gradient(to_right,#80808010_1px,transparent_1px),linear-gradient(to_bottom,#80808010_1px,transparent_1px)] bg-[size:50px_50px]">
          <Hero />
        </section>

        <section id='work' className="bg-primary min-h-auto md:min-h-screen 2xl:min-h-[80vh] py-24 rounded-tl-3xl lg:rounded-tl-[50px] 2xl:rounded-tl-[100px] rounded-tr-3xl lg:rounded-tr-[50px] 2xl:rounded-tr-[100px]">
          <Work />
        </section>

        <section className='max-w-full bg-primary overflow-visible'>
          <div className='w-[120vw] rotate-3 translate-y-16'>
            <Marquee items={items} bg={`bg-light`} />
          </div>
        </section>

        <section className='w-full h-screen flex justify-center items-center bg-dark '>
          {/* <div className='w-[30vw] h-[60vh] mx-auto rounded-[100px] bg-accent bg-[linear-gradient(to_right,#80808010_1px,transparent_1px),linear-gradient(to_bottom,#80808010_1px,transparent_1px)] bg-[size:50px_50px]'>

          </div>
          <div className='w-[30vw] h-[60vh] mx-auto rounded-[100px] bg-primary bg-[linear-gradient(to_right,#80808010_1px,transparent_1px),linear-gradient(to_bottom,#80808010_1px,transparent_1px)] bg-[size:50px_50px]'>

          </div>
          <div className='w-[30vw] h-[60vh] mx-auto rounded-[100px] bg-accent bg-[linear-gradient(to_right,#80808010_1px,transparent_1px),linear-gradient(to_bottom,#80808010_1px,transparent_1px)] bg-[size:50px_50px]'>

          </div> */}
          <Values />
        </section>

        <Marquee items={items} bg={`bg-dark`} />

        <section className='w-full h-auto lg:h-screen px-5 lg:px-8 2xl:px-0  flex flex-col justify-center items-center bg-light pt-24'>

          <div className='container mx-auto flex flex-col lg:flex-row gap-8'>
            <div className='w-full lg:w-3/6 flex justify-center items-center'>
              <Circles />
            </div>
            <div className='w-full lg:w-3/6 flex justify-center items-center'>
              <Card width='w-full bg-secondary' className='w-full mb-12'>
                <div className='w-full flex justify-start items-center'>
                  <h3 className="text-3xl md:text-7xl text-dark font-bold leading-[100px] font-Wobblezz">HelpGo</h3>
                  <Badge text='DDB Colombia' className='h-auto bg-accent border-dark -rotate-12 -translate-x-12 translate-y-6' />
                </div>
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
        </section>


        <section id="contact" className='w-full pb-24 lg:pb-40 pt-24 px-5 lg:px-8 2xl:px-0 bg-light flex justify-center items-center rounded-tl-[100px] rounded-tr-[100px]'>
          <div className='container mx-auto'>
            <Card width='w-full bg-warning' className='w-full mb-12 bg-primary'>
              <h2 className='font-Wobblezz text-7xl mb-12'>Put in touch!</h2>
              <Form />
            </Card>
          </div>
        </section>

        <Footer />
      </Layout>

    </>
  );
}
