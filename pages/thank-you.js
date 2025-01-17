import Nav from '../components/Nav/nav'
import Footer from '../components/Footer/footer'

const ThankYou = () => {
    return (
        <div className='bg-light'>
            <Nav />
            <section className='h-screen flex justify-center items-center'>
                <h1 className='text-9xl text-primary'>Thank you!</h1>
            </section>
            <div className='w-full absolute bottom-0 left-0'>
                <Footer mode='light' />
            </div>
        </div>
    );
}

export default ThankYou;