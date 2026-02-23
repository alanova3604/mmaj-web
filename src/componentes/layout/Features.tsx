"use client";
import { useState } from "react";
import MotionWrapper from "@/componentes/animation/MotionWrapper";
import Link from "next/link";
// Usando tu nuevo componente


type FeatureType = "cocinas" | "closets" | "baños";

interface FeatureContent {
    title: string;
    description: string;
    image: string;
}

const FEATURES_DATA: Record<FeatureType, FeatureContent> = {
    cocinas: {
        title: "Cocinas",
        description: "No fabricamos muebles; desarrollamos sistemas de trabajo integrados. Nuestras cocinas combinan herrajes de precisión técnica...",
        image: "/home/features_1.webp",
    },
    closets: {
        title: "Closets",
        description: "Sistemas de almacenamiento inteligente diseñados para maximizar el espacio con acabados de alta gama y durabilidad...",
        image: "/home/features_2.webp",
    },
    baños: {
        title: "Muebles de Baño",
        description: "Resistencia a la humedad y estética minimalista. Creamos espacios de bienestar con materiales tratados para el uso diario...",
        image: "/home/features_3.webp",
    },
};

export default function Features() {
    const [active, setActive] = useState<FeatureType>("cocinas");


    const current = FEATURES_DATA[active];

    return (
        <section className="w-full bg-stone-900 px-6 py-16 md:px-12 lg:px-12 flex flex-col lg:flex-row items-center gap-12 lg:gap-20 overflow-hidden">

            {/* Columna Izquierda: Navegación y Texto */}
            <div className="w-full lg:w-1/2 flex flex-col items-start gap-8 lg:gap-12">

                {/* Lista de Títulos (Navegación) */}
                <div className="flex flex-col gap-2 md:gap-4">
                    {(Object.keys(FEATURES_DATA) as FeatureType[]).map((key) => (
                        <h2
                            key={key}
                            onClick={() => setActive(key)}
                            className={`text-4xl md:text-5xl lg:text-6xl font-bold font-montserrat leading-tight cursor-pointer transition-all duration-300 ${
                                active === key ? "text-white scale-105 origin-left" : "text-neutral-600 hover:text-neutral-400"
                            }`}
                        >
                            <MotionWrapper tag={"span"} duration={2} delay={.3}>
                                {FEATURES_DATA[key].title}
                            </MotionWrapper>
                        </h2>
                    ))}
                </div>

                {/* Contenido Dinámico */}
                <div className="flex flex-col gap-8 max-w-2xl min-h-[150px]">
                    {/* Usamos una Key para que React sepa que debe re-animar el texto al cambiar */}
                    <MotionWrapper key={active} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} duration={0.1}>
                        <p className="text-neutral-400 text-sm md:text-base font-light leading-relaxed">
                            {current.description}
                        </p>
                    </MotionWrapper>

                    <Link href="/contacto" className="group inline-flex items-center gap-2 text-neutral-400 hover:text-white transition-colors w-max">
                        <span className="text-base md:text-lg font-bold">Cotizar {current.title}</span>
                        <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                        </svg>
                    </Link>
                </div>
            </div>

            {/* Columna Derecha: Imagen Dinámica */}
            <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
                <MotionWrapper key={`${active}-img`} initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className={"w-full"}>
                    <img
                        className="w-full h-full md:h-[500px] lg:h-[750px] object-cover rounded-xl shadow-2xl"
                        src={current.image}
                        alt={current.title}
                    />
                </MotionWrapper>
            </div>
        </section>
    );
}