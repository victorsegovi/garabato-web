"use client";
import { HiMiniBars3BottomRight } from "react-icons/hi2";
import { IoCloseOutline } from "react-icons/io5";
import { useRouter } from "next/navigation";
import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

interface HeaderProps {
    handleClick: () => void;
    isShown: boolean;
    isHome: boolean
}

export default function Header({ handleClick, isShown, isHome }: HeaderProps) {
    const router = useRouter()


    return (
        <header className={`${isHome ? "fixed" : "sticky"} top-0 z-50 w-full`}>
            <div className=" rounded-b-4xl tertiary-color-bg w-full flex p-10 primary-color items-center justify-between">
                <img className="cursor-pointer" src="/garabato-logo.svg" alt="Garabato Logo" onClick={() => {
                    if (isHome) {
                        window.scroll(0, 0)
                    } else {
                        router.push('/')
                    }
                }} />
                <HiMiniBars3BottomRight className="text-3xl cursor-pointer" onClick={handleClick} />
            </div>
            <div className={`fixed w-full h-screen top-0 bg-[rgba(0,0,0,.8)] ${isShown ? "block" : "hidden"}`}>
            </div>
            <div className={`w-[80vw] md:w-[50vw] h-full transition-all duration-750 tertiary-color-bg rounded-l-4xl p-5 primary-color fixed top-0 flex flex-col justify-between ${isShown ? "right-0" : "-right-full"}`}>
                <IoCloseOutline onClick={handleClick} className="text-3xl cursor-pointer" />
                <a onClick={() => router.push("/galeria")} className=" cursor-pointer underline">Galería</a>
                <hr className="w-1/2 primary-color"></hr>
                <div className="flex flex-col gap-2 items-start justify-center">
                    <h5 className="font-bold text-xl">Más Información</h5>
                    <ul className="flex flex-col gap-2 list-disc p-6 underline">
                        <li>                    <a href="https://www.bancomundial.org/ext/es/home" target="_blank" className="">Banco Mundial</a></li>
                        <li>                    <a href="https://www.un.org/es/desa" target="_blank" className="">DESA</a></li>
                        <li>                    <a href="https://criabufalosvenezuela.com/" target="_blank" className="">Asociación Cría Búfalos Venezuela</a></li>
                        <li>                    <a href="https://www.ifad.org/es/" target="_blank" className="">IFAD</a></li>
                        <li>                    <a href="https://acicojedes.info/categoria/monitor-luz" target="_blank" className="">Agencia Cojedeña de Investigación</a></li>
                        <li>                    <a href="https://red-agroalimentaria-de-venezuela-1-rav2.hub.arcgis.com/" target="_blank" className="">Red Agroalimentaria de Venezuela</a></li>
                    </ul>
                </div>
                <hr className="w-1/2 primary-color"></hr>
                <div className="flex flex-col gap-2 items-start justify-center">
                    <h5 className="font-bold text-xl">Redes Sociales</h5>
                    <a href="https://www.instagram.com/garabatoficial.ve?igsh=MXV2YWY0ZDFyeGE5ag%3D%3D&utm_source=qr" target="_blank" className="flex items-center justify-center gap-2"><FaInstagram /> Instagram</a>
                    <a href="https://www.tiktok.com/@garabato.ve?_t=ZM-8w5Tti1ZHOw&_r=1" target="_blank" className="flex items-center justify-center gap-2"><FaTiktok /> Tiktok</a>
                    <a href="https://youtu.be/sbjfPB44N4o?feature=shared" target="_blank" className="flex items-center justify-center gap-2"><FaYoutube /> Youtube</a>
                </div>
            </div>
        </header>
    );
}