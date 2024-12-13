import { useState } from 'react'
import Image from 'next/image'
import Input from '../Input/input'
import Textarea from '../Textarea/textarea'
import Button from '../Button/button'

const contactImg = require('../../src/img/contact_img.svg')

const Form = () => {
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    return (
        <>
            <div className='container mx-auto flex flex-col lg:flex-row gap-8 relative'>
                <div className='flex flex-col gap-6 w-full lg:w-4/6'>
                    <Input
                        value={name}
                        setValue={setName}
                        placeholder="Name"
                        className="border-dark outline-none rounded-xl shadow-darkInput"
                    />
                    <Input
                        value={phone}
                        setValue={setPhone}
                        placeholder="Phone"
                        className="border-dark outline-none rounded-xl shadow-darkInput"
                    />
                    <Input
                        value={email}
                        setValue={setEmail}
                        placeholder="Email"
                        className="border-dark outline-none rounded-xl shadow-darkInput"
                    />
                    <Textarea
                        value={message}
                        setValue={setMessage}
                        placeholder="Message"
                        className="w-full border-dark outline-none rounded-xl shadow-darkInput"
                        row
                    />
                    <Button
                        type='submit'
                        className="w-48 mt-8 flex justify-center items-center bg-secondary hover:bg-accent shadow-dark border-dark">
                        Submit
                    </Button>
                </div>
                <div className='w-full lg:w-2/6'>
                    <Image
                        src={contactImg}
                        className={`z-0 w-48 lg:w-[25%] block absolute -bottom-4 right-[2%]`}
                        alt="Portrait"
                    />
                </div>
            </div>
        </>
    );
}

export default Form;