import Link from "next/link";
import Image from "next/image";
import Logo from "../../../public/logo-mmaj.webp"
import MenuNav from "@/componentes/IU/MenuNav";
import HeaderClient from "@/componentes/IU/HeaderClient";


export default function Header() {

    return (
        <HeaderClient>
            <Link href="/" className="flex-shrink-0">
                <Image className="w-18 lg:w-24 h-auto" src={Logo} alt="MMAJ Cocinas" />
            </Link>

            <MenuNav></MenuNav>
        </HeaderClient>
    );
}