import { Fragment, useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { useCursor } from '../../context/CursorContext';
import Link from "next/link";

const Footer = () => {
    const [year, setYear] = useState(new Date().getFullYear());
    const { setCursorText, setCursorVariant } = useCursor();

    function contactEnter() {
        setCursorText("↑");
        setCursorVariant("contact");
    }

    function contactLeave() {
        setCursorText("");
        setCursorVariant("default");
    }

    function linkEnter() {
        setCursorText("");
        setCursorVariant("hoverable");
    }

    function linkLeave() {
        setCursorText("");
        setCursorVariant("default");
    }

    const jumpToTop = () => {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }

    useEffect(() => {
        // Update the year when the component mounts
        setYear(new Date().getFullYear());

    }, []);

    return (
        <section className="w-full px-5 lg:px-8 2xl:px-0 bg-dark flex">
            <div className="container mx-auto h-auto lg:h-24 py-12 lg:py-0 flex flex-col lg:flex-row gap-4 lg:gap-0 justify-center lg:justify-between items-center">
                <Fragment>
                    <div className="w-full lg:w-2/6 text-center lg:text-left text-white order-2 lg:order-1">
                        {/* ... other code ... */}
                        <p className="font-Adam">{` ${year} © eldesernauta`}</p>
                        {/* ... other code ... */}
                    </div>
                </Fragment>
                <span
                    onClick={jumpToTop}
                    onMouseEnter={contactEnter}
                    onMouseLeave={contactLeave}
                    className="w-full font-Adam lg:w-2/6 text-white text-center order-1 lg:order-2">
                    Back to Top
                </span>
                <div className="w-full lg:w-2/6 flex gap-8 justify-center lg:justify-end items-center order-3">
                    <Link href="https://linkedin.com/in/eldesernauta" target="_blank">
                        <FontAwesomeIcon
                            onMouseEnter={linkEnter}
                            onMouseLeave={linkLeave}
                            icon={faLinkedin}
                            className="text-primary hover:text-accent transition-colors duration-700"
                            style={{ fontSize: 30 }}
                        />
                    </Link>
                    <Link href="https://github.com/eldesernauta" target="_blank">
                        <FontAwesomeIcon
                            onMouseEnter={linkEnter}
                            onMouseLeave={linkLeave}
                            icon={faGithub}
                            className="text-primary hover:text-accent transition-colors duration-700"
                            style={{ fontSize: 30 }}
                        />
                    </Link>
                    <Link href="https://instagram.com/eldesernauta" target="_blank">
                        <FontAwesomeIcon
                            onMouseEnter={linkEnter}
                            onMouseLeave={linkLeave}
                            icon={faInstagram}
                            className="text-primary hover:text-accent transition-colors duration-700"
                            style={{ fontSize: 30 }}
                        />
                    </Link>
                </div>
            </div>
        </section>
    );
}

export default Footer;