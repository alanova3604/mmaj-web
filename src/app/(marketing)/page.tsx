import MotionWrapper from "@/componentes/animation/MotionWrapper";
import Features from "@/componentes/layout/Features"
import SwipperHome from "@/componentes/IU/SwipperHome";

const HeroBanner = '/home/hero-banner.webp'
const HeroBannerLights = '/home/hero-banner-lights.webp'

const imagenes = [
    "/home/features_1.webp",
    "/home/features_1.webp",
  "/home/features_1.webp",
  "/home/features_1.webp",
]


export default function Home() {
  return (
      <div className="min-h-screen">

        <section
            className="relative w-full min-h-screen flex flex-col bg-cover bg-center justify-center items-start px-6  lg:px-12" style={{ backgroundImage: `url(${HeroBanner})` }}>


          <MotionWrapper tag={"div"} duration={1} delay={1.8} className={"absolute inset-0 bg-cover bg-center bg-no-repeat"} style={{ backgroundImage: `url(${HeroBannerLights})` }}>
          </MotionWrapper>


          <div className="z-10 flex flex-col gap-4 md:gap-6">


              <h1 className="text-white text-3xl md:text-5xl lg:text-5xl font-medium   capitalize">
                <MotionWrapper delay={.2} tag={"span"}>Donde</MotionWrapper> {''}
                <MotionWrapper delay={.4} tag={"span"}>la</MotionWrapper> {''}
                <MotionWrapper delay={.6} className={"font-bold"} tag={"span"}>alta ingeniería</MotionWrapper> {''}
                <MotionWrapper delay={.8} tag={"span"}>se encuentra con tú</MotionWrapper> {''}
                <MotionWrapper delay={1} className={"text-[#C1A073] font-bold"} tag={"span"}>hogar</MotionWrapper>{''}
              </h1>


            <MotionWrapper delay={1.5}>
              <p className="text-neutral-200 text-lg md:text-2xl font-semibold ">
                MMAJ, 2026
              </p>
            </MotionWrapper>
          </div>
        </section>


        <Features></Features>


        <section
            className="w-full bg-gradient-to-br from-zinc-500/10 to-zinc-500/20 overflow-hidden">
          <div className="px-6 md:px-12 lg:px-24 flex flex-col items-start gap-4">
            <h2 className="text-white text-4xl md:text-5xl font-bold font-['Montserrat'] capitalize leading-tight">
              <MotionWrapper tag={"span"} duration={.3} delay={.2}>
                Archivos
              </MotionWrapper>{' '}

              <MotionWrapper tag={"span"} duration={.5} delay={.5}>
                De
              </MotionWrapper>{' '}

              <MotionWrapper tag={"span"} duration={.7} delay={.7}>
                Proyecto
              </MotionWrapper>

            </h2>

            <a href="#"
               className="group inline-flex items-center gap-2 text-neutral-400 hover:text-white transition-colors">
              <span className="text-base md:text-lg font-bold font-['Montserrat']">Ver Nuestros Proyectos</span>
              <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none"
                   stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>


          <SwipperHome imagenes={imagenes}></SwipperHome>
        </section>




        <section
            className="w-full bg-stone-900 px-6 py-16 md:px-12 lg:py-20 flex flex-col justify-center items-center gap-12 overflow-hidden">
          <div className="flex flex-col items-center gap-4 text-center max-w-3xl">
            <MotionWrapper tag={"h2"} delay={.1} className="text-white text-4xl md:text-5xl font-bold font-['Montserrat'] capitalize leading-tight">
              Ciclo De Trabajo
            </MotionWrapper>
            <MotionWrapper tag={"p"} delay={.2} className="text-neutral-400 text-base md:text-lg font-bold font-['Montserrat'] capitalize">
              Eliminamos la incertidumbre mediante procesos controlados
            </MotionWrapper>
          </div>

          <div
              className="w-full bg-gradient-to-br from-zinc-800/0 to-zinc-800 rounded-[20px] p-6 md:p-10 lg:p-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4 lg:min-h-[600px]">

            <MotionWrapper tag={"div"} duration={.4} delay={.1} className="flex flex-col items-center lg:mt-48 group">
              <div
                  className="w-full h-full lg:h-auto p-6 bg-stone-900/80 rounded-xl shadow-[0_0_30px_0_rgba(152,152,152,0.1)] backdrop-blur-md border border-white/5 transition-transform duration-300 hover:-translate-y-2">
                <h3 className="text-white text-base md:text-lg font-bold font-['Montserrat'] capitalize mb-2">01.
                  Consulta Y Especificación</h3>
                <p className="text-neutral-400 text-xs md:text-sm font-normal font-['Montserrat'] leading-relaxed">Recepción
                  y análisis técnico de requerimientos. Definimos las dimensiones y necesidades específicas de su
                  espacio.</p>
              </div>
              <div className="hidden lg:block w-px h-full border-l border-dashed border-zinc-600/50 mt-4"></div>
            </MotionWrapper>

            <MotionWrapper tag={"div"} duration={.4} delay={.3} className="flex flex-col items-center lg:mt-12 group">
              <div
                  className="w-full h-full lg:h-auto p-6 bg-stone-900/80 rounded-xl shadow-[0_0_30px_0_rgba(152,152,152,0.1)] backdrop-blur-md border border-white/5 transition-transform duration-300 hover:-translate-y-2">
                <h3 className="text-white text-base md:text-lg font-bold font-['Montserrat'] capitalize mb-2">02.
                  Cotización Y Validación</h3>
                <p className="text-neutral-400 text-xs md:text-sm font-normal font-['Montserrat'] leading-relaxed">Propuesta
                  técnica detallada. Tras la validación de costos y materiales, el proyecto ingresa a nuestra línea de
                  producción.</p>
              </div>
              <div className="hidden lg:block w-px h-full border-l border-dashed border-zinc-600/50 mt-4"></div>
            </MotionWrapper>

            <MotionWrapper tag={"div"} duration={.4} delay={.5} className="flex flex-col items-center lg:mt-36 group">
              <div
                  className="w-full h-full lg:h-auto p-6 bg-stone-900/80 rounded-xl shadow-[0_0_30px_0_rgba(152,152,152,0.1)] backdrop-blur-md border border-white/5 transition-transform duration-300 hover:-translate-y-2">
                <h3 className="text-white text-base md:text-lg font-bold font-['Montserrat'] capitalize mb-2">03. Fase
                  De Ejecución</h3>
                <p className="text-neutral-400 text-xs md:text-sm font-normal font-['Montserrat'] leading-relaxed">Despliegue
                  técnico y fabricación. Coordinamos la transición del plano a la instalación física con precisión
                  milimétrica.</p>
              </div>
              <div className="hidden lg:block w-px h-full border-l border-dashed border-zinc-600/50 mt-4"></div>
            </MotionWrapper>

            <MotionWrapper tag={"div"} duration={.4} delay={.7} className="flex flex-col items-center lg:mt-0 group">
              <div
                  className="w-full h-full lg:h-auto p-6 bg-stone-900/80 rounded-xl shadow-[0_0_30px_0_rgba(152,152,152,0.1)] backdrop-blur-md border border-white/5 transition-transform duration-300 hover:-translate-y-2">
                <h3 className="text-white text-base md:text-lg font-bold font-['Montserrat'] capitalize mb-2">04.
                  Control De Entrega</h3>
                <p className="text-neutral-400 text-xs md:text-sm font-normal font-['Montserrat'] leading-relaxed">Auditoría
                  final en sitio. Garantizamos un sistema plenamente operativo y un entorno entregado en condiciones
                  impecables.</p>
              </div>
              <div className="hidden lg:block w-px h-full border-l border-dashed border-zinc-600/50 mt-4"></div>
            </MotionWrapper>

          </div>
        </section>

      </div>
  );
}
