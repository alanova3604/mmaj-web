import HeroSections from "@/componentes/layout/HeroSections";

export default function Proyectos(){
    return(
        <div>

            <HeroSections></HeroSections>

            <section
                className="relative w-full min-h-screen flex flex-col justify-end items-start px-6 md:px-12 lg:px-24 pb-28 md:pb-32 overflow-hidden">
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat">
                </div>

                <div
                    className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>

                <div className="relative z-10 flex flex-col gap-2 max-w-2xl">
                    <h2 className="text-white text-3xl md:text-4xl lg:text-5xl font-light font-['Montserrat'] capitalize leading-tight">
                        Proyecto Santa Anita 2022
                    </h2>
                    <p className="text-stone-300 text-lg md:text-xl font-light font-['Hanken_Grotesk']">
                        Cocina
                    </p>
                </div>

                <div
                    className="absolute bottom-8 md:bottom-12 left-1/2 transform -translate-x-1/2 px-6 py-3 bg-white/20 rounded-full backdrop-blur-md flex justify-center items-center gap-3">
                    <button
                        className="w-3 h-3 bg-white rounded-full hover:scale-110 transition-transform aria-label='Proyecto anterior'"></button>
                    <button
                        className="w-3 h-3 bg-white rounded-full hover:scale-110 transition-transform aria-label='Proyecto actual'"></button>
                    <button
                        className="w-4 h-4 bg-[#C1A073] rounded-full hover:scale-110 transition-transform aria-label='Siguiente proyecto'"></button>
                </div>
            </section>

        </div>
    );
}