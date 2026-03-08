"use client";
import { motion, HTMLMotionProps } from "framer-motion";

// Definimos la interfaz extendiendo las propiedades originales de un div de motion
interface MotionWrapperProps extends HTMLMotionProps<"div"> {
    children?: React.ReactNode;
    duration?: number;
    delay?: number;
    tag?: keyof typeof motion;
}

export default function MotionWrapper({
                                          children,
                                          initial = { opacity: 0 },
                                          whileInView = { opacity: 1 },
                                          duration = 0.8,
                                          delay = 0,
                                          tag = "div",
                                          ...props
                                      }: MotionWrapperProps) {

    const MotionTag = (motion as any)[tag] || motion.div;
    return (
        <MotionTag
            initial={initial}
            whileInView={whileInView}
            viewport={{ once: true, margin: "-50px" }} // Evita que se repita y da margen al scroll
            transition={{
                duration,
                delay,
                ease: [0.25, 0.1, 0.25, 1] // Una curva de suavizado elegante
            }}
            {...props}
        >
            {children}
        </MotionTag>
    );
}