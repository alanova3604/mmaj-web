import BannerSections from "@/componentes/layout/BannerSections";
import SwipperComponent from "@/componentes/IU/SwipperComponent";


const imagenes = [
    "/home/features_1.webp",
    "/home/features_1.webp",
    "/home/features_1.webp",
    "/home/features_1.webp",
    "/home/features_1.webp"
]

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