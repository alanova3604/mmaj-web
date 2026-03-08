"use client";
import { useEffect, useState } from "react";
import { useMotionValue, useSpring, useInView } from "framer-motion";
import { useRef } from "react";

interface props {
    value?: number,
    duration?: number,
}


export default function Counter({ value, duration = 2 } : props) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const [displayValue, setDisplayValue] = useState(0);

    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue, {
        duration: duration * 1000,
        bounce: 0,
    });

    useEffect(() => {
        if (isInView) {
            motionValue.set(value ?? 0);
        }
    }, [isInView, value, motionValue]);

    useEffect(() => {
        return springValue.on("change", (latest) => {
            setDisplayValue(Math.floor(latest));
        });
    }, [springValue]);

    return <span ref={ref}>{displayValue}</span>;
}