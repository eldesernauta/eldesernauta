// src/components/TransformBubbles.js
import React, { useEffect, useRef } from "react";
import { gsap, ScrollTrigger } from "gsap";
import Image from "next/image";

const circle = require('../../src/img/circle.svg')

gsap.registerPlugin(ScrollTrigger);

const Circles = () => {
    // Refs individuales para cada círculo
    const circleRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];

    useEffect(() => {
        circleRefs.forEach((ref, index) => {
            const element = ref.current;

            // Determinar color y configuración de animación
            const color = element.getAttribute("data-color");
            const rotateDirection = color === "#b37dff" ? 90 : -90; // Derecha o izquierda
            const duration = 5 + index * 2; // Velocidades diferentes según el índice

            // GSAP Animation
            gsap.to(element, {
                scrollTrigger: {
                    trigger: element,
                    start: "-200px center",
                    end: "bottom top",
                    scrub: true,
                },
                rotate: rotateDirection,
                duration,
            });
        });
    }, []);

    return (
        <div className="relative h-screen flex items-center justify-center">
            <div className="transform-bubbles relative">
                <Circle ref={circleRefs[0]} color="#b37dff" />
                <Circle ref={circleRefs[1]} className="absolute top-0 scale-[75%] brightness-0" color="#212121" />
                <Circle ref={circleRefs[2]} className="absolute top-0 scale-[55%]" color="#b37dff" />
                <Circle ref={circleRefs[3]} className="absolute top-0 scale-[40%] brightness-0" color="#212121" />
            </div>
        </div>
    );
};

export default Circles;

let Circle = ({ className, color }, ref) => {
    return (
        <>

            <Image
                src={circle}
                width={500}
                alt="scroll circle"
                className={className}
                data-color={color}
                ref={ref}
            />
        </>
    )
}


// Usar forwardRef para pasar la ref al SVG
Circle = React.forwardRef(Circle);