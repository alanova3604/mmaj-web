import BannerSections from "@/componentes/layout/BannerSections";
import SwipperComponent from "@/componentes/IU/SwipperComponent";


const imagenes = [
    "/home/features_1.webp",
    "/sliderHome/1.jpg",
    "/sliderHome/2.jpg",
    "/sliderHome/3.jpg",
    "/sliderHome/4.jpg",
    "/sliderHome/5.jpg",
];

export default function Proyectos(){
    return(
        <div className="relative">
            {/* Contenedor del Banner con efecto sticky */}
            <div className="sticky top-0 h-screen z-0 overflow-hidden">
                <BannerSections title={"Proyectos"} number={"03"}
                                subtitle={"Registro técnico de ejecuciones reales. Documentamos la transición del plano a la realidad bajo estándares de precisión absoluta."}>
                </BannerSections>
            </div>

            {/* Contenedor del Slider que sube y cubre al banner */}
            <div className="relative z-20 bg-stone-900 shadow-[0_-20px_50px_rgba(0,0,0,0.5)]">
                <SwipperComponent imagenes={imagenes}></SwipperComponent>
            </div>
        </div>
    );
}