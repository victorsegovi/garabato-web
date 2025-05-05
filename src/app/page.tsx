"use client"
import Header from "./components/Header";
import ScrollButton from "./components/ScrollButton";
import { useState, useEffect } from "react";
import Button from "./components/Button";
import { useRouter } from "next/navigation";
import { FaLocationDot } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

export default function Home() {

  const [scrollStop, setScrollStop] = useState('hero-section')

  const scrollStops = [
    "hero-section",
    "description",
    "documentary",
    "others"
  ]

  const router = useRouter()

  const [isShown, setIsShown] = useState(false)

  function handleClick() {
    setIsShown(!isShown)
  }

  function handleScroll() {
    const currentIndex = scrollStops.indexOf(scrollStop);
    const nextIndex = (currentIndex + 1) % scrollStops.length;
    const nextStop = scrollStops[nextIndex];
    setScrollStop(nextStop);

    const section = document.getElementById(nextStop);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  }

  useEffect(() => {
    // When the mobile menu is open, disable scrolling on the body
    if (isShown) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = ''; // Or 'auto' to restore default
    }

    // Cleanup function to reset overflow when the component unmounts
    return () => {
      document.body.style.overflow = '';
    };
  }, [isShown]);

  return (
    <div>
      <Header isShown={isShown} handleClick={handleClick} isHome={true}></Header>
      <section style={{ backgroundImage: "url(garabato-paisaje.jpg)" }} className="bg-cover bg-no-repeat bg-center h-screen m-w-screen relative flex flex-col p-10 items-center justify-center gap-4" id="hero-section">
        <div className="w-full h-full bg-linear-180 from-[#8E9B6D] to-[#1F3F27] absolute top-0 left-0 opacity-60"></div>
        <h1 className="secondary-color z-10 text-center mt-24">Garabato: Historias Olvidadas</h1>
        <p className="secondary-color z-10 text-center lg:w-1/2">Para el ser humano casi siempre es interesante
          conocer historias nuevas y más si se trata de temas
          que no se exponen con frecuencia.<br></br><br></br>
          Descubrir localidades poco conocidas y adentrarse
          en su cultura, población, idiosincrasia, costumbres,
          tradiciones y desafíos es algo que despierta la
          curiosidad en el espectador.</p>
      </section>
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
      <section id="documentary" style={{ backgroundImage: "url(bg-logo.jpg)" }} className="bg-center bg-no-repeat bg-cover m-w-screen min-h-screen secondary-color flex flex-col items-center justify-center p-10 gap-10 text-justify">
        <h2 className="text-3xl">Reportajes</h2>
        <div className="w-full max-w-[500px] flex flex-col gap-5">
          <p>
            Esta comunidad cuenta con aproximadamente 300 habitantes quienes se caracterizan por ser personas valientes, trabajadoras, resilientes, pero sobre todo, nobles y generosas. Su rutina diaria comienza desde muy temprano al realizar labores agrícolas y ganaderas para su propia subsistencia, como ordeñar y sembrar. A pesar de que en otras zonas rurales, los roles de las mujeres y hombres pueden estar bastante divididos, en Garabato no, puesto que la mujer garabateña también se integra en todo lo que refiere a las tareas del campo, esto las hace más independientes.<br></br><br></br>

            Según cifras de la ONU, las mujeres en zonas rurales conforman un 43 % de la mano de obra agrícola. La vicepresidente del Foro Rural de Venezuela, Maribel Guédez, señaló en una entrevista reciente que la mujer venezolana representa el 48 % de la mano de obra en el reducido campo productivo y que la sociedad venezolana no está consciente de la importancia de este dato cuantitativo de impacto cualitativo.<br></br><br></br>

            Las arduas labores que se realizan en Garabato como el ordeño, preparación de queso, variedad de cultivos como maíz, topocho y yuca, no solo sustenta los ingresos económicos de sus pobladores, sino también contribuyen a la economía venezolana. Según la Organización de las Naciones Unidas para la Alimentación y la Agricultura las zonas rurales producen el 70% de los alimentos básicos consumidos en Venezuela (maíz, arroz, plátanos, raíces, carne y leche).<br></br><br></br>

            Sin embargo, pese a la importancia de su labor para el consumo nacional muchos de los habitantes del asentamiento campesino en estudio, expresaron que sus ingresos económicos varían entre los 70 y 80 dólares mensuales. En el ámbito educativo, los profesionales que día a día hacen hasta lo imposible para educar a las nuevas generaciones, aseguraron que su sueldo mensual no supera los 200 bolívares.<br></br><br></br>

            Robert Parga, presidente del Colegio de Economistas del Estado Carabobo, señaló que la mayoría de los venezolanos tanto en las zonas urbanas como en las rurales están en situación de pobreza, aunque no sea extrema.

          </p>
          <div className={"relative aspect-video"}>
            <iframe
              loading="lazy" title="Gumlet video player"
              src="https://play.gumlet.io/embed/6818e69a9bfb1a1815af36b6"
              className={"border-0 absolute top-0 left-0 h-full w-full"}
              allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture; fullscreen;">
            </iframe>
          </div>
        </div>
        <div className="w-full max-w-[500px] flex flex-col gap-5">
          <p>Uno de los elementos que afectan las zonas rurales del país es el desmejoramiento o en algunos casos, la inexistencia de servicios públicos. En el caso de Garabato, no poseen ningún tipo de servicios públicos, es por eso que, deben realizar grandes esfuerzos para poder obtener por sus medios todos estos recursos que son de suma importancia para el ser humano.<br></br><br></br> Bajo un sol inclemente y altas temperaturas, semanalmente deben buscar leña para poder cocinar y a través de un proceso de bombeo manual extraer agua de los suelos para almacenarla.
            <br></br><br></br>
            Asimismo, no cuentan con espacios adecuados para realizar su aseo personal, y en caso de alguna emergencia médica no disponen de centros asistenciales cercanos por lo que tienen que viajar dos horas hasta el ambulatorio más próximo a la población ubicado en Guanarito, Estado Portuguesa.
          </p>
          <div className={"relative aspect-video"}>
            <iframe
              loading="lazy" title="Gumlet video player"
              src="https://play.gumlet.io/embed/6817f83de63aea8598632ae3"
              className={"border-0 absolute top-0 left-0 h-full w-full"}
              allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture; fullscreen;">
            </iframe>
          </div>
        </div>
        <div className="w-full max-w-[500px] flex flex-col gap-5">
          <p>
            Por otro lado, el sistema educativo en Garabato enfrenta múltiples debilidades. Los niños deben recorrer a diario un trayecto de aproximadamente dos horas para acudir a sus actividades escolares, dado que solo existen dos escuelas y  se encuentran distantes de sus viviendas. La infraestructura física de estos centros educativos están en mal estado y el personal docente resulta insuficiente por lo que el pensum de estudio no se cumple en su totalidad.<br></br><br></br>

            Según un informe de la Encuesta de Condiciones de Vida, aproximadamente el 30% de los niños en zonas rurales de Venezuela no asiste a la escuela de manera regular por deserción escolar o la asistencia es intermitente por la falta de transporte, trabajo juvenil, entre otras razones.
          </p>
          <div className="relative aspect-video">
            <iframe
              loading="lazy" title="Gumlet video player"
              src="https://play.gumlet.io/embed/6818d2619bfb1a1815aeac0c"
              className="border-0 absolute; top-0 left-0 h-full w-full"
              allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture; fullscreen;">
            </iframe>
          </div>
        </div>
        <div className="w-full max-w-[500px] flex flex-col gap-5">
          <p>
            Garabato no solo es un asentamiento campesino; esta comunidad refleja la lucha y la esperanza en medio de las dificultades. Cada amanecer trae consigo el eco del arduo trabajo de sus habitantes, quienes, a pesar de las limitaciones, continúan apostando a este lugar. La vida en Garabato es un testimonio del espíritu humano que se niega a rendirse, donde la solidaridad y el esfuerzo colectivo son el motor que impulsa a esta comunidad hacia un futuro mejor. En un mundo que ignora las voces de las comunidades rurales, Garabato recuerda que detrás de cada cifra hay historias de valentía y dignidad que merecen ser escuchadas y valoradas.
          </p>
          <div className={"relative aspect-video"}>
            <iframe
              loading="lazy" title="Gumlet video player"
              src="https://play.gumlet.io/embed/6817f83dc4342f3361622e39"
              className={"border-0 absolute top-0 left-0 h-full w-full"}
              allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture; fullscreen;">
            </iframe>
          </div>
        </div>
      </section>
      <section id="others" className="w-full flex flex-wrap sticky z-10">
        <article className="flex flex-col gap-5 lg:items-start items-center p-10 lg:p-16 lg:justify-start justify-center h-[50vh] lg:w-1/2 w-full secondary-color-bg lg:rounded-tr-[64px]">
          <h2 className="active-color lg:text-4xl text-xl">Visita nuestras redes sociales</h2>
          <div className="flex flex-col gap-5 items-start justify-center md:flex-row md:items-center text-xl">
            <a href="https://www.instagram.com/garabatoficial.ve?igsh=MXV2YWY0ZDFyeGE5ag%3D%3D&utm_source=qr" target="_blank" className="flex items-center justify-center gap-1"><FaInstagram /> Instagram</a>
            <a href="https://www.tiktok.com/@garabato.ve?_t=ZM-8w5Tti1ZHOw&_r=1" target="_blank" className="flex items-center justify-center gap-1"><FaTiktok /> Tiktok</a>
            <a href="https://youtu.be/sbjfPB44N4o?feature=shared" target="_blank" className="flex items-center justify-center gap-1"><FaYoutube /> Youtube</a>
          </div>
        </article>
        <article className="flex flex-col gap-5 lg:items-start items-center p-10 lg:p-16 lg:justify-start justify-center h-[50vh] lg:w-1/2 w-full active-color-bg lg:rounded-tl-[64px]">
          <h2 className="tertiary-color lg:text-4xl text-xl">Visita nuestra galería</h2>
          <Button text={"Ver Galería"} handleClick={() => router.push("/galeria")}></Button>
        </article>
      </section>
      <footer className="primary-color-bg rounded-t-[40px] tertiary-color items-center justify-center flex h-[50vh] lg:h-[35vh] -mt-10 sticky z-10 flex-col gap-10 lg:rounded-t-[64px] lg:-mt-16">
        <a className="flex items-center gap-1 font-bold underline" href="https://www.google.com/maps/place/garabato+cojedes/data=!4m2!3m1!1s0x8e7eb07f33b2cfd1:0xe7959670dacfb8f?sa=X&ved=1t:242&ictx=111" target="_blank"><FaLocationDot></FaLocationDot> Ubicación</a>
        <p className="capitalize font-light text-sm">Garabato todos los derechos reservados ©</p>
      </footer>
      <ScrollButton handleScroll={handleScroll}></ScrollButton>
    </div>
  );
}
