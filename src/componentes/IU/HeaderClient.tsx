"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface Props {
    children: React.ReactNode;
}

export default function HeaderClient({ children }: Props) {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 10);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <motion.header
            initial={false}
            animate={{
                backgroundColor: isScrolled ? "rgba(0,0,0,0.5)" : "transparent",
                backdropFilter: isScrolled ? "blur(8px)" : "blur(0px)",
                paddingBlock: isScrolled ? "1rem" : "2rem",
                top: isScrolled ? "1rem" : "0",
                maxWidth: isScrolled ? "90%" : "100%",
                borderRadius: isScrolled ? "50px" : "0",

            }}
            transition={{ duration: 0.1, ease: "easeInOut" }}
            className="w-full px-4 py-4 md:px-12 md:py-7 fixed top-0 left-1/2 -translate-x-1/2 z-50 flex justify-between items-center transition-all duration-300"
        >
            {children}
        </motion.header>
    );
}