import {Icon} from "@iconify/react";
import Link from "next/link";


const MenuNav = () => {
    return (
        <div>
            <button className="flex items-center gap-3 cursor-pointer hover:opacity-80 transition-opacity">
                <Icon icon="gg:menu-right" width="2em" height="2em" className="text-white"/>
                <span
                    className="hidden md:block text-white text-lg md:text-xl font-bold">Menu</span>
            </button>

            {/*<div className="absolute h-screen w-screen inset-0 z-20 bg-black text-white">*/}

            {/*    <div className="absolute right-10 top-5 cursor-pointer">*/}
            {/*        <Icon icon="ic:round-close" width="4em" height="4em" />*/}
            {/*    </div>*/}

            {/*    <nav className="flex flex-col items-center h-screen justify-center gap-4">*/}
            {/*        <Link className="text-3xl font-semibold hover:text-white/50  transition-all transition-500 py-4" href="/">Inicio</Link>*/}
            {/*        <Link className="text-3xl font-semibold hover:text-white/50  transition-all transition-500 py-4" href="/nosotros">Nosotros</Link>*/}
            {/*        <Link className="text-3xl font-semibold hover:text-white/50  transition-all transition-500 py-4" href="/proyectos">Proyectos</Link>*/}
            {/*        <Link className="text-3xl font-semibold hover:text-white/50  transition-all transition-500 py-4" href="/contacto">Contacto</Link>*/}
            {/*    </nav>:text-4xl transition-all transition-500*/}

            {/*</div>*/}
        </div>

    );
}

export default MenuNav;