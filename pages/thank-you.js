import { useRouter } from 'next/navigation'
import Image from 'next/image';

import Nav from '../components/Nav/nav'
import Footer from '../components/Footer/footer'
import Button from '../components/Button/button'

const contactImg = require('../src/img/contact_img.svg')

const ThankYou = () => {
    const router = useRouter()

    return (
        <div className='bg-light bg-[linear-gradient(to_right,#80808010_1px,transparent_1px),linear-gradient(to_bottom,#80808010_1px,transparent_1px)] bg-[size:50px_50px]'>
            <Nav />
            <section className='h-screen flex flex-col justify-center items-center'>
                <h1 className='z-10 text-6xl md:text-9xl bg-gradient-to-r from-primary via-warning to-accent text-transparent pt-3 pb-3 bg-clip-text bg-300%  animate-gradient'>Thank you!</h1>
                <Image
                    src={contactImg}
                    className={`z-0 w-[300px] block absolute top-[25%] lg:top-[15%] 2xl:top-[25%] left-[20%] sm:left-[40%] xl:left-[45%]`}
                    alt="Portrait"
                />
                <Button
                    className="z-10 px-4 py-2 rounded-full bg-accent hover:bg-primary transition shadow-dark border-dark"
                    onClick={() => {
                        router.push('/portfolio')
                    }}
                >
                    View my work
                </Button>
            </section>
            <Footer mode='light' />
        </div>
    );
}

export default ThankYou;