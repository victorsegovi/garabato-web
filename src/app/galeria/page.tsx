"use client"

import Header from "../components/Header"
import { useState, useEffect } from "react";
import { FaLocationDot } from "react-icons/fa6";

export default function Galeria() {

    const [isShown, setIsShown] = useState(false)

    function handleClick() {
        setIsShown(!isShown)
    }

    useEffect(() => {

        if (isShown) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }

        return () => {
            document.body.style.overflow = '';
        };
    }, [isShown]);

    return (
        <div className="flex flex-col gap-20 relative">
            <Header isShown={isShown} handleClick={handleClick} isHome={false}>

            </Header>
            <div className="min-h-screen py-6 sm:py-8 lg:py-12">
                <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
                    <div className="mb-4 flex items-center justify-between gap-8 sm:mb-8 md:mb-12">
                        <div className="flex items-center gap-12">
                            <h1 className="text-2xl font-bold lg:text-3xl">Galería</h1>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6 xl:gap-8">

                        <a href="#"
                            className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80">
                            <img src="/cocina.jpeg" loading="lazy" alt="Cocina a Leña" className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

                            <div
                                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50">
                            </div>

                            <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">Cocina a Leña</span>
                        </a>

                        <a href="#"
                            className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:h-80">
                            <img src="/garabato-team.jpg" loading="lazy" alt="Team Garabato" className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

                            <div
                                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50">
                            </div>

                            <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">Team Garabato</span>
                        </a>

                        <a href="#"
                            className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:h-90">
                            <img src="/garabato-paisaje.jpg" loading="lazy" alt="Paisaje Garabato" className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

                            <div
                                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50">
                            </div>

                            <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">Paisaje</span>
                        </a>

                        <a href="#"
                            className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-90">
                            <img src="/garabato.jpg" loading="lazy" alt="Garabato" className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

                            <div
                                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50">
                            </div>

                            <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">Garabato</span>
                        </a>

                        <a href="#"
                            className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80">
                            <img src="/irmen-pina.jpg" loading="lazy" alt="Irmen Piña" className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

                            <div
                                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50">
                            </div>

                            <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">Habitante de Garabato</span>
                        </a>

                        <a href="#"
                            className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80">
                            <img src="/jhonny-sanchez.jpg" loading="lazy" alt="Jhonny Sanchez" className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

                            <div
                                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50">
                            </div>

                            <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">Habitante de Garabato</span>
                        </a>

                        <a href="#"
                            className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80">
                            <img src="/juan-carlos-guevara.jpg" loading="lazy" alt="Juan Carlos Guevara" className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

                            <div
                                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50">
                            </div>

                            <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">Habitante de Garabato</span>
                        </a>

                        <a href="#"
                            className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80">
                            <img src="/lishavis-caro.jpg" loading="lazy" alt="Lishavis Caro" className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

                            <div
                                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50">
                            </div>

                            <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">Habitante de Garabato</span>
                        </a>

                        <a href="#"
                            className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:h-80">
                            <img src="/luis-borges.jpg" loading="lazy" alt="Luis Borges" className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

                            <div
                                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50">
                            </div>

                            <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">Habitante de Garabato</span>
                        </a>

                        <a href="#"
                            className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:h-90">
                            <img src="/maria-torrealba.jpg" loading="lazy" alt="María Torrealba" className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

                            <div
                                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50">
                            </div>

                            <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">Habitante de Garabato</span>
                        </a>

                        <a href="#"
                            className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-90">
                            <img src="/luis-herrera.jpg" loading="lazy" alt="Luis Herrera" className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

                            <div
                                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50">
                            </div>

                            <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">Habitante de Garabato</span>
                        </a>

                        <a href="#"
                            className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80">
                            <img src="/blanca-manzanilla.jpg" loading="lazy" alt="Blanca Manzanilla" className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

                            <div
                                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50">
                            </div>

                            <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">Habitante de Garabato</span>
                        </a>

                        <a href="#"
                            className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:h-80">
                            <img src="/cecilia-vasquez.jpg" loading="lazy" alt="Cecilia Vasquez" className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

                            <div
                                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50">
                            </div>

                            <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">Habitante de Garabato</span>
                        </a>
                    </div>
                </div>
            </div>
            <footer className="primary-color-bg rounded-t-[40px] tertiary-color items-center justify-center flex h-[50vh] lg:h-[35vh] -mt-10 sticky z-10 flex-col gap-10 lg:rounded-t-[64px] lg:-mt-16">
                <a className="flex items-center gap-1 font-bold underline"><FaLocationDot></FaLocationDot> Ubicación</a>
                <p className="capitalize font-light text-sm">Garabato todos los derechos reservados ©</p>
            </footer>
        </div>
    )
}