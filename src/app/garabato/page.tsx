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
            <section id="description" className="flex flex-col gap-10 p-10 text-justify items-center">
        <article className="flex flex-col gap-5 max-w-[500px]">
          <h2 className="text-4xl">¿Qué es Garabato?</h2>
          <p>Garabato, es un asentamiento campesino ubicado en
            el estado Cojedes con aproximadamente 300
            habitantes, que, a pesar de sus carencias
            tecnológicas, asistenciales, culturales, educativas, así
            como de medios de comunicación que permitan
            conocer de sus aspectos característicos como la falta
            de alimentos o desarrollo y habilidades de
            sobrevivencia a temprana edad, subsisten en un
            precario espacio geográfico, bajo el cobijo de la
            solidaridad, el respeto, la tolerancia, la bondad, el
            amor y la equidad entre sus habitantes.</p>
        </article>
        <article className="flex flex-col gap-5 max-w-[500px]">
          <h2>Ejemplo de resiliencia</h2>
          <p>Es un lugar único que cuenta con personas nobles que,
            aunque viven con distintas carencias, tienden su mano
            amiga a quien más lo necesita, además de poseer
            numerosas riquezas naturales como su flora y fauna.

            Cada habitante se caracteriza por su esfuerzo y aplomo
            de salir adelante, desde levantarse muy temprano para buscar los alimentos del día, supervisar sus cultivos, la cría de animales, entre otras actividades que realizan para su
            subsistencia; todo ello sin perder la esperanza por
            llegar a alcanzar un futuro donde sus sueños y
            aspiraciones logren verse materializados.</p>
        </article>
        <article className="flex flex-col gap-5 max-w-[500px]">
          <h2>El problema</h2>
          <p>La Encuesta de Condiciones de Vida (ENCOVI) es un
            estudio que arrojó un resultado en el que el 51,9% de la
            población venezolana estaba en condiciones de
            pobreza el año pasado, una cifra ligeramente mayor en
            comparación con 2022, cuando la pobreza
            multidimensional, que incluye el nivel de ingresos y
            acceso a servicios públicos como educación y salud,
            fue del 50,5%. La mitad de los hogares no percibe
            ingresos suficientes para cubrir la Canasta Alimentaria,
            lo que los pone en una situación de pobreza extrema,
            según los resultados de ENCOVI.<br></br><br></br>

            El Instituto Nacional de Estadística, calculó que hay
            286.000 hogares pobres en las zonas rurales, de los
            cuales 172.000 están en situación de pobreza extrema.
            Los segmentos más pobres de la población rural
            comprenden comunidades indígenas y de origen
            africano, habitantes de territorios semiáridos y familias
            sin tierra, con jefaturas de hogar a cargo de mujeres.
            Se trata en todos los casos de grupos meta a los que
            van dirigidos los proyectos del Fondo Internacional de
            Desarrollo Agrícola (FIDA).<br></br><br></br>

            Es importante destacar que la pobreza en Venezuela
            presenta un marcado carácter rural. Más del 50% de la
            población rural vive en condiciones de pobreza, en
            comparación con el 40% de las zonas urbanas. Esta
            disparidad se explica en gran medida por la
            dependencia de la agricultura de subsistencia, una
            actividad económica altamente vulnerable a factores
            externos como las fluctuaciones de los precios de los
            productos agrícolas y la falta de acceso a tecnologías
            modernas.<br></br><br></br>

            Garabato, al ser una comunidad rural, comparte estas
            características. La ausencia de otras fuentes de ingreso
            más allá de la agricultura limita las oportunidades de
            desarrollo para sus habitantes y los hace más
            propensos a caer en la pobreza en tiempos de crisis.</p>
        </article>
      </section>
            <footer className="primary-color-bg rounded-t-[40px] tertiary-color items-center justify-center flex h-[50vh] lg:h-[35vh] -mt-10 sticky z-10 flex-col gap-10 lg:rounded-t-[64px] lg:-mt-16">
                <a className="flex items-center gap-1 font-bold underline" href="https://www.google.com/maps/place/garabato+cojedes/data=!4m2!3m1!1s0x8e7eb07f33b2cfd1:0xe7959670dacfb8f?sa=X&ved=1t:242&ictx=111" target="_blank"><FaLocationDot></FaLocationDot> Ubicación</a>
                <p className="capitalize font-light text-sm">Garabato todos los derechos reservados ©</p>
            </footer>
        </div>
    )
}