import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import axios from 'axios';
import emailjs from 'emailjs-com';
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';

import { useCursor } from "../../context/CursorContext";

const contactImg = require('../../src/img/contact_img.svg')

const Form = () => {
    const { executeRecaptcha } = useGoogleReCaptcha();
    const [submitStatus, setSubmitStatus] = useState('');
    const router = useRouter()
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        message: ''
    });
    const [errorMessage, setErrorMessage] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        setSubmitStatus('');

        emailjs.send(
            'service_bt75nio',
            'template_83sggic',
            formData,
            '7a-MiWPvlF67gvfzK'
        ).then((response) => {
            console.log('SUCCESS!', response.status, response.text);
            router.push('/thank-you'); // Redirige a la página de Thank You
        }).catch((err) => {
            console.log('FAILED...', err);
            setErrorMessage('Error al enviar el formulario. Intente nuevamente.');
        });

        if (!executeRecaptcha) {
            console.error('ReCAPTCHA not available');
            return;
        }

        const gRecaptchaToken = await executeRecaptcha('registerSubmit');

        try {
            const response = await axios.post(
                '/api/recaptchaVerify',
                { gRecaptchaToken },
                {
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                    },
                }
            );

            if (response.data.success) {
                console.log(`Registration success with score: ${response.data.score}`);
                setSubmitStatus('Registration Successful. Welcome!');
            } else {
                console.error(`Registration failure with score: ${response.data.score}`);
                setSubmitStatus('Registration Failed. Please try again.');
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            setSubmitStatus('An error occurred. Please try again.');
        }
    };
    const { setCursorText, setCursorVariant } = useCursor();

    function formEnter() {
        setCursorText("✍️");
        setCursorVariant("draw");
    }

    function formLeave() {
        setCursorText("");
        setCursorVariant("default");
    }

    return (
        <>
            <div className='container mx-auto flex flex-col lg:flex-row gap-8 relative'>
                <form onSubmit={handleSubmit} className='flex flex-col gap-6 w-full lg:w-3/6'>
                    <input
                        value={formData.name}
                        name="name"
                        id="name"
                        placeholder="Name"
                        required
                        onChange={handleChange}
                        className="border-2 border-dark h-12 px-4 outline-none rounded-xl shadow-darkInput font-Adam"
                    />
                    <input
                        value={formData.phone}
                        name="phone"
                        id="phone"
                        placeholder="Phone"
                        onChange={handleChange}
                        className="border-2 border-dark h-12 px-4 outline-none rounded-xl shadow-darkInput font-Adam"
                    />
                    <input
                        value={formData.email}
                        name="email"
                        id="email"
                        required
                        placeholder="Email"
                        onChange={handleChange}
                        className="border-2 border-dark h-12 px-4 outline-none rounded-xl shadow-darkInput font-Adam"
                    />
                    <textarea
                        value={formData.message}
                        name="message"
                        id="message"
                        placeholder="Message"
                        onChange={handleChange}
                        className="w-full border-2 border-dark h-48 px-4 py-4 outline-none rounded-xl shadow-darkInput font-Adam"
                        row
                    />
                    <button
                        type='submit'
                        className="w-48 py-4 rounded-full border-2 uppercase font-Adam font-bold mt-8 flex justify-center items-center bg-accent hover:bg-primary shadow-dark border-dark">
                        Submit
                    </button>
                </form>
                <div className='w-full lg:w-3/6'>
                    <Image
                        src={contactImg}
                        onMouseEnter={formEnter}
                        onMouseLeave={formLeave}
                        className={`z-0 w-32 sm:w-[25%] lg:w-[35%] xl:w-[30%] 2xl:w-[25%] block absolute -bottom-4 sm:bottom-0 2xl:-bottom-4 -right-8 sm:right-0 md:right-8 xl:right-[10%]`}
                        alt="Portrait"
                    />
                </div>
            </div>
        </>
    );
}

export default Form;