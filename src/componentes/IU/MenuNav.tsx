'use client';
import { Icon } from "@iconify/react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import MotionWrapper from "@/componentes/animation/MotionWrapper";
import { AnimatePresence } from "framer-motion";
// Importamos createPortal de react
import { createPortal } from "react-dom";

const MenuNav = () => {
    const [activeNavBar, setActiveNavBar] = useState(false);
    const [mounted, setMounted] = useState(false); // Para evitar errores en servidor
    const pathname = usePathname();

    useEffect(() => {
        setMounted(true);
        setActiveNavBar(false);
    }, [pathname]);

    return (
        <div>
            {/* EL BOTÓN: Se queda aquí, dentro del Header */}
            <button
                onClick={() => setActiveNavBar(!activeNavBar)}
                className="flex items-center gap-3 cursor-pointer hover:opacity-80 transition-opacity"
            >
                <Icon icon="gg:menu-right" width="2em" height="2em" className="text-white"/>
                <span className="hidden md:block text-white text-lg md:text-xl font-bold">
                    Menu
                </span>
            </button>

            {/* EL CONTENIDO: Se "teletransporta" fuera del header si estamos en el cliente */}
            {mounted && createPortal(
                <AnimatePresence>
                    {activeNavBar && (
                        <div className="fixed inset-0 h-screen w-screen z-[9999] text-white overflow-hidden" style={{ position: 'fixed', top: 0, left: 0 }}>

                            {/* Fondos animados */}
                            <div className="flex flex-col absolute inset-0 z-0">
                                <MotionWrapper initial={{ x: "200vh" }} animate={{x:0}} exit={{ x: "-200vh" }} delay={0} duration={.4} className="w-full flex-1 bg-black" />
                                <MotionWrapper initial={{ x: "200vh" }} animate={{x:0}} exit={{ x:"-200vh" }} delay={.05} duration={.4} className="w-full flex-1 bg-black" />
                                <MotionWrapper initial={{ x: "200vh" }} animate={{x:0}} exit={{ x:"-200vh" }} delay={.1} duration={.4} className="w-full flex-1 bg-black" />
                                <MotionWrapper initial={{ x: "200vh" }} animate={{x:0}} exit={{ x:"-200vh" }} delay={.15} duration={.4} className="w-full flex-1 bg-black" />
                                <MotionWrapper initial={{ x: "200vh" }} animate={{x:0}} exit={{ x:"-200vh" }} delay={.20} duration={.4} className="w-full flex-1 bg-black" />
                                <MotionWrapper initial={{ x: "200vh" }} animate={{x:0}} exit={{ x:"-200vh" }} delay={.25} duration={.4} className="w-full flex-1 bg-black" />
                            </div>

                            {/* Botón Cerrar */}
                            <MotionWrapper exit={{opacity: 0}} onClick={() => setActiveNavBar(false)} className="absolute z-40 right-10 top-5 cursor-pointer hover:opacity-80 transition-opacity">
                                <Icon icon="ic:round-close" width="4em" height="4em" />
                            </MotionWrapper>

                            {/* Links */}
                            <MotionWrapper delay={.3} exit={{opacity: 0}} className="flex flex-col items-center h-screen justify-center z-30 absolute w-screen gap-4">
                                <Link className={`text-3xl font-semibold hover:text-white/50 transition-all py-4 ${pathname == "/" ? "opacity-40" : ""}`} href="/">Inicio</Link>
                                <Link className={`text-3xl font-semibold hover:text-white/50 transition-all py-4 ${pathname == "/nosotros" ? "opacity-40" : ""}`} href="/nosotros">Nosotros</Link>
                                <Link className={`text-3xl font-semibold hover:text-white/50 transition-all py-4 ${pathname == "/proyectos" ? "opacity-40" : ""}`} href="/proyectos">Proyectos</Link>
                                <Link className={`text-3xl font-semibold hover:text-white/50 transition-all py-4 ${pathname == "/contacto" ? "opacity-40" : ""}`} href="/contacto">Contacto</Link>
                            </MotionWrapper>

                        </div>
                    )}
                </AnimatePresence>,
                document.body // Esto le dice a React: "Dibuja esto al final del <body>, no aquí adentro"
            )}
        </div>
    );
}

export default MenuNav;