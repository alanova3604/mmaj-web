import BannerSections from "@/componentes/layout/BannerSections";

export default function Contacto(){
    return (
        <div>

            <BannerSections title={"Contacto"} number={"04"}
                            subtitle={"Apertura de consulta técnica. Inicie su proyecto mediante nuestro protocolo de diseño y planificación de diseño personalizado."} >
            </BannerSections>


            <section
                className="w-full bg-stone-900 px-6 py-16 md:py-24 lg:px-24 flex justify-center items-center overflow-hidden">
                <div
                    className="w-full max-w-7xl flex flex-col lg:flex-row gap-12 lg:gap-0 lg:justify-between items-center lg:items-stretch">

                    <div className="w-full lg:w-1/2 flex flex-col justify-center items-start gap-10 lg:pr-12">
                        <div className="flex flex-col gap-4">
                            <h2 className="text-white text-4xl md:text-5xl font-bold font-['Montserrat']">
                                Contactanos
                            </h2>
                            <p className="text-white text-sm md:text-base font-semibold font-['Montserrat'] leading-relaxed tracking-tight max-w-md">
                                Envianos un correo y te contactaremos lo mas pronto posible
                            </p>
                        </div>

                        <form className="w-full max-w-[545px] flex flex-col gap-5">
                            <input type="text" placeholder="Name *" required
                                   className="w-full h-12 px-5 bg-zinc-500 text-white placeholder-white/90 text-sm font-normal font-['Montserrat'] focus:outline-none focus:ring-2 focus:ring-white transition-all"/>

                            <input type="email" placeholder="Email"
                                   className="w-full h-12 px-5 bg-zinc-500 text-white placeholder-white/90 text-sm font-normal font-['Montserrat'] focus:outline-none focus:ring-2 focus:ring-white transition-all"/>

                            <input type="tel" placeholder="Phone number *" required
                                   className="w-full h-12 px-5 bg-zinc-500 text-white placeholder-white/90 text-sm font-normal font-['Montserrat'] focus:outline-none focus:ring-2 focus:ring-white transition-all"/>

                            <button type="submit"
                                    className="w-full h-16 mt-2 bg-white text-black text-base font-bold font-['Montserrat'] uppercase hover:bg-gray-200 transition-colors">
                                Send
                            </button>
                        </form>
                    </div>

                    <div
                        className="w-full lg:w-[531px] min-h-[400px] lg:min-h-[900px] bg-zinc-800 flex items-center justify-center">
                        <span className="text-zinc-500 text-sm font-['Montserrat']">Image / Map Placeholder</span>
                    </div>

                </div>
            </section>


        </div>
    );
}