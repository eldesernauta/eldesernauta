import { motion } from "framer-motion";
import Button from "../Button/button";
import Image from "next/image";

const LockedCard = ({ bgColor, imgUrl, title, description, btnUrl }) => {

    return (
        <motion.div
            style={{
                cursor: "grab"
            }}
            drag
            dragDirectionLock
            dragConstraints={{ top: 0, right: 0, bottom: 0, left: 0 }}
            dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
            dragElastic={0.5}
            whileTap={{ cursor: "grabbing" }}
            className={`${bgColor} transition-colors duration-500 w-[300px] h-[400px] flex flex-col justify-start items-center p-8 shadow-light rounded-xl bg-[linear-gradient(to_right,#80808010_1px,transparent_1px),linear-gradient(to_bottom,#80808010_1px,transparent_1px)] bg-[size:50px_50px]`}
        >
            <Image
                src={imgUrl}
                height={100}
                alt="icon1" />
            <h3 className="text-3xl font-Wobblezz font-bold mb-2">{title}</h3>
            <p className="h-4/6 flex justify-center mb-4 text-center">{description}</p>
            <Button
                className="px-4 py-2 rounded-full bg-primary hover:bg-secondary transition shadow-dark border-dark"
                onClick={() => window.open({ btnUrl }, "_blank")}
            >
                Learn More
            </Button>
        </motion.div>
    );
}

export default LockedCard