import Image from "next/image";

export default function Home() {
  return (
      <div className="min-h-screen">

        <section
            className="relative w-full min-h-screen flex flex-col justify-center items-start px-6  lg:px-12">
          <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat">
          </div>

          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>

          <div className="z-10 flex flex-col gap-4 md:gap-6">
            <h1 className="text-white text-3xl md:text-5xl lg:text-5xl font-medium   capitalize">
              Donde la <span className="font-bold">alta ingeniería</span> se encuentra con tú <span
                className="text-[#C1A073] font-bold">hogar</span>
            </h1>
            <p className="text-neutral-200 text-lg md:text-2xl font-semibold ">
              MMAJ, 2026
            </p>
          </div>
        </section>


        <section
            className="w-full bg-stone-900 px-6 py-16 md:px-12 lg:px-12 flex flex-col lg:flex-row items-center gap-12 lg:gap-20 overflow-hidden">
          <div className="w-full lg:w-1/2 flex flex-col items-start gap-8 lg:gap-12">
            <div className="flex flex-col gap-2 md:gap-4">
              <h2 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold font-['Montserrat'] leading-tight cursor-default">Cocinas</h2>
              <h2 className="text-neutral-600 hover:text-neutral-400 transition-colors text-4xl md:text-5xl lg:text-6xl font-bold font-['Montserrat'] leading-tight cursor-pointer">Closets</h2>
              <h2 className="text-neutral-600 hover:text-neutral-400 transition-colors text-4xl md:text-5xl lg:text-6xl font-bold font-['Montserrat'] leading-tight cursor-pointer">Muebles
                de Baño</h2>
            </div>

            <div className="flex flex-col gap-8 max-w-2xl">
              <p className="text-neutral-400 text-sm md:text-base font-light font-['Montserrat'] leading-relaxed">
                No fabricamos muebles; desarrollamos sistemas de trabajo integrados. Nuestras cocinas combinan herrajes
                de precisión técnica con materiales de alta resistencia, garantizando un flujo operativo impecable y una
                estética minimalista que perdura.
              </p>

              <a href="#"
                 className="group inline-flex items-center gap-2 text-neutral-400 hover:text-white transition-colors w-max">
                <span className="text-base md:text-lg font-bold font-['Montserrat']">Cotizar Ahora</span>
                <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none"
                     stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>

          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
            <img
                className="w-full h-[400px] md:h-[500px] lg:h-[750px] object-cover rounded-xl shadow-2xl"
                src="path/to/your-kitchen-image.jpg"
                alt="Cocina moderna con isla de mármol negro"
            />
          </div>
        </section>

        <section
            className="relative w-full py-16 md:py-24 bg-gradient-to-br from-zinc-500/10 to-zinc-500/20 flex flex-col gap-10 md:gap-14 overflow-hidden">
          <div className="px-6 md:px-12 lg:px-24 flex flex-col items-start gap-4">
            <h2 className="text-white text-4xl md:text-5xl font-bold font-['Montserrat'] capitalize leading-tight">
              Archivos De Proyecto
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

          <div
              className="w-full pl-6 md:pl-12 lg:pl-24 flex gap-4 md:gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide pr-6 md:pr-12 lg:pr-24">
            <img
                className="w-[85vw] md:w-[60vw] lg:w-[790px] h-[350px] md:h-[450px] lg:h-[514px] object-cover rounded-lg snap-center flex-shrink-0"
                src="path/to/project-image-1.jpg" alt="Proyecto 1"/>
            <img
                className="w-[85vw] md:w-[60vw] lg:w-[790px] h-[350px] md:h-[450px] lg:h-[514px] object-cover rounded-lg snap-center flex-shrink-0"
                src="path/to/project-image-2.jpg" alt="Proyecto 2"/>
          </div>

          <div className="w-full flex justify-center mt-2">
            <div
                className="px-5 py-2.5 bg-white/5 rounded-[400px] backdrop-blur-sm flex justify-center items-center gap-3">
              <button
                  className="w-2.5 h-2.5 bg-stone-300 rounded-full hover:bg-white transition-colors aria-label='Ir a imagen 1'"></button>
              <button
                  className="w-2.5 h-2.5 bg-stone-300 rounded-full hover:bg-white transition-colors aria-label='Ir a imagen 2'"></button>
              <button className="w-3.5 h-3.5 bg-white rounded-full aria-label='Imagen actual'"></button>
            </div>
          </div>
        </section>


        <section
            className="w-full bg-stone-900 px-6 py-16 md:px-12 lg:py-20 flex flex-col justify-center items-center gap-12 overflow-hidden">
          <div className="flex flex-col items-center gap-4 text-center max-w-3xl">
            <h2 className="text-white text-4xl md:text-5xl font-bold font-['Montserrat'] capitalize leading-tight">
              Ciclo De Trabajo
            </h2>
            <p className="text-neutral-400 text-base md:text-lg font-bold font-['Montserrat'] capitalize">
              Eliminamos la incertidumbre mediante procesos controlados
            </p>
          </div>

          <div
              className="w-full bg-gradient-to-br from-zinc-800/0 to-zinc-800 rounded-[20px] p-6 md:p-10 lg:p-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4 lg:min-h-[600px]">

            <div className="flex flex-col items-center lg:mt-48 group">
              <div
                  className="w-full h-full lg:h-auto p-6 bg-stone-900/80 rounded-xl shadow-[0_0_30px_0_rgba(152,152,152,0.1)] backdrop-blur-md border border-white/5 transition-transform duration-300 hover:-translate-y-2">
                <h3 className="text-white text-base md:text-lg font-bold font-['Montserrat'] capitalize mb-2">01.
                  Consulta Y Especificación</h3>
                <p className="text-neutral-400 text-xs md:text-sm font-normal font-['Montserrat'] leading-relaxed">Recepción
                  y análisis técnico de requerimientos. Definimos las dimensiones y necesidades específicas de su
                  espacio.</p>
              </div>
              <div className="hidden lg:block w-px h-full border-l border-dashed border-zinc-600/50 mt-4"></div>
            </div>

            <div className="flex flex-col items-center lg:mt-12 group">
              <div
                  className="w-full h-full lg:h-auto p-6 bg-stone-900/80 rounded-xl shadow-[0_0_30px_0_rgba(152,152,152,0.1)] backdrop-blur-md border border-white/5 transition-transform duration-300 hover:-translate-y-2">
                <h3 className="text-white text-base md:text-lg font-bold font-['Montserrat'] capitalize mb-2">02.
                  Cotización Y Validación</h3>
                <p className="text-neutral-400 text-xs md:text-sm font-normal font-['Montserrat'] leading-relaxed">Propuesta
                  técnica detallada. Tras la validación de costos y materiales, el proyecto ingresa a nuestra línea de
                  producción.</p>
              </div>
              <div className="hidden lg:block w-px h-full border-l border-dashed border-zinc-600/50 mt-4"></div>
            </div>

            <div className="flex flex-col items-center lg:mt-36 group">
              <div
                  className="w-full h-full lg:h-auto p-6 bg-stone-900/80 rounded-xl shadow-[0_0_30px_0_rgba(152,152,152,0.1)] backdrop-blur-md border border-white/5 transition-transform duration-300 hover:-translate-y-2">
                <h3 className="text-white text-base md:text-lg font-bold font-['Montserrat'] capitalize mb-2">03. Fase
                  De Ejecución</h3>
                <p className="text-neutral-400 text-xs md:text-sm font-normal font-['Montserrat'] leading-relaxed">Despliegue
                  técnico y fabricación. Coordinamos la transición del plano a la instalación física con precisión
                  milimétrica.</p>
              </div>
              <div className="hidden lg:block w-px h-full border-l border-dashed border-zinc-600/50 mt-4"></div>
            </div>

            <div className="flex flex-col items-center lg:mt-0 group">
              <div
                  className="w-full h-full lg:h-auto p-6 bg-stone-900/80 rounded-xl shadow-[0_0_30px_0_rgba(152,152,152,0.1)] backdrop-blur-md border border-white/5 transition-transform duration-300 hover:-translate-y-2">
                <h3 className="text-white text-base md:text-lg font-bold font-['Montserrat'] capitalize mb-2">04.
                  Control De Entrega</h3>
                <p className="text-neutral-400 text-xs md:text-sm font-normal font-['Montserrat'] leading-relaxed">Auditoría
                  final en sitio. Garantizamos un sistema plenamente operativo y un entorno entregado en condiciones
                  impecables.</p>
              </div>
              <div className="hidden lg:block w-px h-full border-l border-dashed border-zinc-600/50 mt-4"></div>
            </div>

          </div>
        </section>

      </div>
  );
}
