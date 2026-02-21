import Link from "next/link";
import { Icon } from "@iconify/react";
import Image from "next/image";
import Logo from "../../../public/logo-mmaj.webp"
import MenuNav from "@/componentes/IU/MenuNav";


export default function Header () {

    return (
        <header
            className="w-full px-4 py-4 md:px-12 md:py-7 fixed top-0 left-0 z-50 backdrop-blur-md flex justify-between items-center transition-all duration-300">
            <Link href="/" className="flex-shrink-0">
                <Image className="w-24 h-auto md:w-25" src={Logo} alt="MMAJ Cocinas"/>
            </Link>

            <MenuNav></MenuNav>

        </header>
    );
}