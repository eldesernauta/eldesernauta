import { motion } from "framer-motion";

import { useCursor } from '../../context/CursorContext';

const LockedCard = ({ bgColor, imgUrl, title, description, btnUrl }) => {

    const { setCursorText, setCursorVariant } = useCursor();

    function contactEnter() {
        setCursorText("🤏🏻");
        setCursorVariant("contact");
    }

    function contactLeave() {
        setCursorText("");
        setCursorVariant("default");
    }

    return (
        <motion.div
            onMouseEnter={contactEnter}
            onMouseLeave={contactLeave}
            drag
            dragDirectionLock
            dragConstraints={{ top: 0, right: 0, bottom: 0, left: 0 }}
            dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
            dragElastic={0.5}
            className={`${bgColor} locked transition-colors duration-500 w-full md:w-[500px] lg:w-[300px] flex flex-col justify-start items-center px-4 pt-12 pb-8 shadow-light border-2 border-light rounded-xl bg-[linear-gradient(to_right,#80808010_1px,transparent_1px),linear-gradient(to_bottom,#80808010_1px,transparent_1px)] bg-[size:50px_50px]`}
        >
            <span className='text-7xl mb-4'>
                {imgUrl}
            </span>
            <h3 className="text-3xl font-bold my-4">{title}</h3>
            <p className="h-4/6 text-lg flex justify-center font-Adam mb-4 text-center">{description}</p>

        </motion.div>
    );
}

export default LockedCard