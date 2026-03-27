import BannerSections from "@/componentes/layout/BannerSections";
import Counter from "@/componentes/animation/Counter";
import MotionWrapper from "@/componentes/animation/MotionWrapper";

const CtaBanner = "/nosotros/banner-nosotros.webp"
export default function Nosotros(){
    return(
        <div>

            <BannerSections title={"Nosotros"} number={"02"}
                            subtitle={"Ingeniería y herencia familiar. Fusionamos maestría artesanal con procesos digitales para crear sistemas de mobiliario de alto desempeño."} >
            </BannerSections>


            <section
                className="w-full bg-stone-900 px-6 py-16 md:px-12 lg:px-24 lg:py-24 flex justify-center items-center">
                <div className="w-full max-w-7xl flex flex-col lg:flex-row items-start lg:items-center gap-8 lg:gap-28">
                    <div className="w-full lg:w-auto flex-shrink-0">
                        <h2 className="text-white text-4xl md:text-5xl font-bold font-['Montserrat'] capitalize">
                            Conócenos
                        </h2>
                    </div>

                    <div className="w-full lg:flex-1 max-w-4xl">
                        <p className="text-neutral-400 text-base md:text-lg lg:text-xl font-light font-['Montserrat'] leading-relaxed md:leading-8">
                            <span className="font-semibold">No fabricamos muebles;</span> Desarrollamos sistemas de
                            trabajo integrados. Nuestras cocinas combinan herrajes de precisión técnica con materiales
                            de alta resistencia, garantizando un flujo operativo impecable y una estética minimalista
                            que perdura.
                        </p>
                    </div>
                </div>
            </section>

            <div className={`h-screen bg-cover bg-center bg-no-repeat sticky top-0 z-[-5]`} style={{ backgroundImage: `url(${CtaBanner})` }}>
            </div>

            <section
                className="min-h-[50vh] md:min-h-[70vh] lg:h-[1010px] w-full py-24 md:py-32 flex flex-col justify-center items-center gap-6 md:gap-12 overflow-hidden mx-auto">
                <div
                    className="flex justify-center text-white text-7xl md:text-[160px] lg:text-[250px] font-semibold font-['Montserrat'] capitalize leading-tight lg:leading-[160px]">+
                    <Counter value={20} />
                </div>
                <div
                    className="text-center text-white text-3xl md:text-5xl font-normal font-['Montserrat'] capitalize leading-tight md:leading-[80px]">años
                    de Experiencia
                </div>
            </section>

            <section
                className="min-h-[50vh] md:min-h-[70vh] lg:h-[1010px] w-full py-24 md:py-32 flex flex-col justify-center items-center gap-6 md:gap-12 overflow-hidden mx-auto">
                <div
                    className="flex justify-center text-white text-7xl md:text-[160px] lg:text-[250px] font-semibold font-['Montserrat'] capitalize leading-tight lg:leading-[160px]">
                    + <Counter value={100} />
                </div>
                <div
                    className="text-center text-white text-3xl md:text-5xl font-normal font-['Montserrat'] capitalize leading-tight md:leading-[80px]">Clientes
                    Satisfechos
                </div>
            </section>


            <section
                className="w-full min-h-[50vh] lg:min-h-[800px] px-6 py-16 md:px-12 lg:px-24 md:py-32 flex flex-col justify-center items-start gap-8 md:gap-12 overflow-hidden">
                <MotionWrapper delay={.2} className="text-white text-4xl md:text-5xl font-bold capitalize leading-tight">
                    Materiales y Tecnología
                </MotionWrapper>

                <MotionWrapper delay={.4} className="w-full max-w-3xl flex flex-col items-start">
                    <p className="text-white text-base md:text-lg lg:text-xl font-normal font-['Montserrat'] leading-relaxed md:leading-8">
                        La integridad de nuestras piezas reside en la selección rigurosa de insumos y el uso de
                        tecnología de vanguardia. Implementamos herrajes de última generación, superficies de alta
                        resistencia con tratamiento hidrófugo y procesos de corte computarizado. Esta combinación nos
                        permite ofrecer una precisión milimétrica en cada ensamble, asegurando un desempeño superior en
                        condiciones de uso intensivo.
                    </p>
                </MotionWrapper>
            </section>


            {/*<section*/}
            {/*    className="w-full bg-white px-6 py-16 md:px-12 lg:px-24 flex flex-col justify-center items-center gap-10 md:gap-16 overflow-hidden">*/}
            {/*    <h2 className="text-black text-3xl md:text-5xl font-bold font-['Montserrat'] text-center capitalize leading-tight">*/}
            {/*        Componentes Y Partners*/}
            {/*    </h2>*/}

            {/*    <div*/}
            {/*        className="w-full max-w-7xl flex flex-wrap justify-center lg:justify-between items-center gap-10 md:gap-12 opacity-80">*/}
            {/*        <img className="h-8 md:h-10 lg:h-12 w-auto object-contain hover:scale-105 transition-transform"*/}
            {/*             src="path/to/hettich-logo.png" alt="Hettich"/>*/}
            {/*        <img className="h-8 md:h-10 lg:h-12 w-auto object-contain hover:scale-105 transition-transform"*/}
            {/*             src="path/to/blum-logo.png" alt="Blum"/>*/}
            {/*        <img className="h-10 md:h-12 lg:h-14 w-auto object-contain hover:scale-105 transition-transform"*/}
            {/*             src="path/to/grupo-tenerife-logo.png" alt="Grupo Tenerife"/>*/}
            {/*        <img className="h-12 md:h-14 lg:h-16 w-auto object-contain hover:scale-105 transition-transform"*/}
            {/*             src="path/to/madijal-logo.png" alt="Madijal"/>*/}
            {/*        <img className="h-8 md:h-10 lg:h-12 w-auto object-contain hover:scale-105 transition-transform"*/}
            {/*             src="path/to/jako-logo.png" alt="Jako"/>*/}
            {/*        <img className="h-10 md:h-12 lg:h-14 w-auto object-contain hover:scale-105 transition-transform"*/}
            {/*             src="path/to/marmolux-logo.png" alt="Marmolux"/>*/}
            {/*    </div>*/}
            {/*</section>*/}

        </div>
    );
}