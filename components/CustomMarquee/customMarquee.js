import Image from "next/image";

import BaseMarquee from "./baseMarquee";

const separator = require('../../src/img/dotted.svg')

const CustomMarquee = () => {
    return (
        <>
            <BaseMarquee baseVelocity={-1}>
                HTML
                <Image
                    src={separator}
                    width={28}
                    height={40}
                    className="inline-block mx-2"
                    alt='separador de textos'
                />
                CSS
                <Image
                    src={separator}
                    width={28}
                    height={40}
                    className="inline-block mx-2"
                    alt='separador de textos'
                />
                Javascript
                <Image
                    src={separator}
                    width={28}
                    height={40}
                    className="inline-block mx-2"
                    alt='separador de textos'
                />
                React
                <Image
                    src={separator}
                    width={28}
                    height={40}
                    className="inline-block mx-2"
                    alt='separador de textos'
                />
                NextJs
                <Image
                    src={separator}
                    width={28}
                    height={40}
                    className="inline-block mx-2"
                    alt='separador de textos'
                />
                Framer Motion
                <Image
                    src={separator}
                    width={28}
                    height={40}
                    className="inline-block mx-2"
                    alt='separador de textos'
                />
                Wordpress
                <Image
                    src={separator}
                    width={28}
                    height={40}
                    className="inline-block mx-2"
                    alt='separador de textos'
                />
                Webpack
                <Image
                    src={separator}
                    width={28}
                    height={40}
                    className="inline-block mx-2"
                    alt='separador de textos'
                />
                Node
                <Image
                    src={separator}
                    width={28}
                    height={40}
                    className="inline-block mx-2"
                    alt='separador de textos'
                />
                Git
                <Image
                    src={separator}
                    width={28}
                    height={40}
                    className="inline-block mx-2"
                    alt='separador de textos'
                />
                AWS
                <Image
                    src={separator}
                    width={28}
                    height={40}
                    className="inline-block mx-2"
                    alt='separador de textos'
                />
            </BaseMarquee>
        </>
    );
}

export default CustomMarquee;