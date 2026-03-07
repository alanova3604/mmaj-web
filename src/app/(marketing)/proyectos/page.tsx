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
        <div>

            <BannerSections title={"Proyectos"} number={"03"}
                            subtitle={"Registro técnico de ejecuciones reales. Documentamos la transición del plano a la realidad bajo estándares de precisión absoluta."} >
            </BannerSections>


            <SwipperComponent imagenes={imagenes}></SwipperComponent>

        </div>
    );
}