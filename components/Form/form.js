import { useState } from 'react'
import Image from 'next/image'
import emailjs from 'emailjs-com';

import { useCursor } from "../../context/CursorContext";

const contactImg = require('../../src/img/contact_img.svg')

const Form = () => {
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

    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs.send(
            'service_bt75nio',
            'template_83sggic',
            formData,
            'ttalDMNz0wIJllO6DgNCa'
        ).then((response) => {
            console.log('SUCCESS!', response.status, response.text);
            setErrorMessage('Tu mensaje se envió correctamente'); // Clear error message on success
        }).catch((err) => {
            console.log('FAILED...', err);
            setErrorMessage('Error al enviar el formulario. Intente nuevamente.'); // Set error message on failure
        });
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