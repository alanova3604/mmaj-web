import Link from 'next/link'

export default function Footer(){
    return(
        <footer className="w-full bg-zinc-800 p-8 md:p-12 lg:p-16 flex flex-col lg:flex-row gap-12 lg:gap-6">
            <div className="flex-1 flex flex-col justify-center">
                <h2 className="text-neutral-500 text-4xl md:text-5xl lg:text-6xl font-semibold font-['Montserrat'] leading-tight">Cocinas</h2>
                <h2 className="text-neutral-500 text-4xl md:text-5xl lg:text-6xl font-semibold font-['Montserrat'] leading-tight">Closets</h2>
                <h2 className="text-neutral-500 text-4xl md:text-5xl lg:text-6xl font-semibold font-['Montserrat'] leading-tight">Muebles
                    de Baño</h2>
            </div>

            <div className="flex-1 flex flex-col justify-between gap-12 lg:gap-24">
                <div className="flex flex-col sm:flex-row justify-between items-start gap-6">
                    <nav className="flex flex-col gap-2">
                        <Link href="/"
                           className="text-white text-lg font-normal  hover:text-gray-300 transition-colors">Inicio</Link>
                        <Link href="/nosotros"
                           className="text-white text-lg font-normal  hover:text-gray-300 transition-colors">Nosotros</Link>
                        <Link href="/proyectos"
                           className="text-white text-lg font-normal  hover:text-gray-300 transition-colors">Proyectos</Link>
                        <Link href="/contacto"
                           className="text-white text-lg font-normal  hover:text-gray-300 transition-colors">Contacto</Link>
                    </nav>
                    <div className="opacity-40 text-white text-sm md:text-base font-normal ">
                        © 2026 — Copyright
                    </div>
                </div>

                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-8">
                    <div className="flex flex-col">
                        <span
                            className="opacity-60 text-white text-sm font-medium  uppercase tracking-wide mb-1">Contacto</span>
                        <a href="tel:+523315316226"
                           className="text-white text-lg font-normal  hover:text-gray-300 transition-colors">+52
                            33 1531 6226</a>
                    </div>
                    <div className="flex flex-wrap gap-3">
                        <a href="#"
                           className="px-5 py-2 rounded-full border border-white/25 text-white text-sm md:text-base font-normal  hover:bg-white/10 transition-colors">Instagram</a>
                        <a href="#"
                           className="px-5 py-2 rounded-full border border-white/25 text-white text-sm md:text-base font-normal  hover:bg-white/10 transition-colors">Whatsapp</a>
                        <a href="#"
                           className="px-5 py-2 rounded-full border border-white/25 text-white text-sm md:text-base font-normal  hover:bg-white/10 transition-colors">Facebook</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}