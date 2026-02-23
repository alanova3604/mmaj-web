'use client';
import {Icon} from "@iconify/react";
import Link from "next/link";
import {useEffect, useState} from "react";
import {usePathname} from "next/navigation";
import MotionWrapper from "@/componentes/animation/MotionWrapper";
import {AnimatePresence} from "framer-motion";


const MenuNav = () => {

    const [activeNavBar, setActiveNavBar] = useState(false)
    const pathname = usePathname()

    useEffect(() => {
        setActiveNavBar(false)
    }, [pathname])

    return (
        <div>

            <button onClick={() => setActiveNavBar(!activeNavBar)} className="flex items-center gap-3 cursor-pointer hover:opacity-80 transition-opacity">
                <Icon icon="gg:menu-right" width="2em" height="2em" className="text-white"/>
                <span
                    className="hidden md:block text-white text-lg md:text-xl font-bold">Menu</span>
            </button>

            <AnimatePresence>

                { activeNavBar &&
                    <div className="fixed h-screen w-screen inset-0 z-20  text-white">

                        <div className="flex flex-col absolute inset-0 z-0">
                            <MotionWrapper initial={{ x: "200vh" }} animate={{x:0}} exit={{ x: "-200vh", transition: {duration: .1} }} delay={0}  duration={.4} className="w-full flex-1 bg-black"></MotionWrapper>
                            <MotionWrapper initial={{ x: "200vh" }} animate={{x:0}} exit={{ x:"-200vh", transition: {duration: .2} }} delay={.05} duration={.4} className="w-full flex-1 bg-black"></MotionWrapper>
                            <MotionWrapper initial={{ x: "200vh" }} animate={{x:0}} exit={{ x:"-200vh", transition: {duration: .3} }} delay={.1} duration={.4} className="w-full flex-1 bg-black"></MotionWrapper>
                            <MotionWrapper initial={{ x: "200vh" }} animate={{x:0}} exit={{ x:"-200vh", transition: {duration: .4} }} delay={.15} duration={.4} className="w-full flex-1 bg-black"></MotionWrapper>
                            <MotionWrapper initial={{ x: "200vh" }} animate={{x:0}} exit={{ x:"-200vh", transition: {duration: .5} }} delay={.20} duration={.4} className="w-full flex-1 bg-black"></MotionWrapper>
                            <MotionWrapper initial={{ x: "200vh" }} animate={{x:0}} exit={{ x:"-200vh", transition: {duration: .6} }} delay={.25} duration={.4} className="w-full flex-1 bg-black"></MotionWrapper>
                        </div>

                        <MotionWrapper exit={{opacity: 0, transition: {duration: 0.2} }} onClick={() => setActiveNavBar(false)} className="absolute z-40 right-10 top-5 cursor-pointer hover:opacity-80 transition-opacity">
                            <Icon icon="ic:round-close" width="4em" height="4em" />
                        </MotionWrapper>

                        <MotionWrapper delay={.3} exit={{opacity: 0, transition: {duration: 0.2} }} className="flex flex-col items-center h-screen justify-center z-30 absolute w-screen h-screen gap-4">
                            <Link className={`text-3xl font-semibold hover:text-white/50  transition-all transition-500 py-4 ${pathname == "/" ? "opacity-40" : ""} `} href="/">Inicio</Link>
                            <Link className={`text-3xl font-semibold hover:text-white/50  transition-all transition-500 py-4 ${pathname == "/nosotros" ? "opacity-40" : ""}`} href="/nosotros">Nosotros</Link>
                            <Link className={`text-3xl font-semibold hover:text-white/50  transition-all transition-500 py-4 ${pathname == "/proyectos" ? "opacity-40" : ""}`} href="/proyectos">Proyectos</Link>
                            <Link className={`text-3xl font-semibold hover:text-white/50  transition-all transition-500 py-4 ${pathname == "/contacto" ? "opacity-40" : ""}`} href="/contacto">Contacto</Link>
                        </MotionWrapper>

                    </div>

                }

            </AnimatePresence>




        </div>

    );
}

export default MenuNav;