export default function HeroSections() {
    return (
        <section
            className="relative w-full min-h-screen flex flex-col justify-center items-start px-6 md:px-12 lg:px-24">
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat">
            </div>

            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>

            <div className="relative z-10 flex flex-col items-start gap-4 md:gap-6 mt-20">
                <h1 className="flex items-center gap-3 text-white text-4xl md:text-5xl lg:text-6xl font-medium font-['Montserrat'] uppercase tracking-wide">
                    <span>02.</span>
                    <span>Nosotros</span>
                </h1>

                <p className="text-neutral-200 text-lg md:text-xl font-normal font-['Montserrat'] capitalize">
                    Donde las ideas toman forma.
                </p>

                <a href="#next-section"
                   className="mt-8 text-white hover:text-neutral-400 transition-colors animate-bounce"
                   aria-label="Desplazarse hacia abajo">
                    <svg className="w-8 h-8 md:w-10 md:h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                         xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
                </a>
            </div>
        </section>
    );
}