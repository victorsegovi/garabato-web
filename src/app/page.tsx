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
    "documentary",
    "about-us",
    "description",
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
      <section style={{ backgroundImage: "url(paisaje.JPEG)" }} className="bg-cover bg-no-repeat bg-center h-[80vh] m-w-screen relative flex flex-col px-10 py-15 items-center justify-end gap-4" id="hero-section">
        <div className="w-full h-full bg-linear-180 from-[#8E9B6D] to-[#1F3F27] absolute top-0 left-0 opacity-60"></div>
        <p className="secondary-color z-10 text-center lg:w-1/2 lg:text-xl font-bold">En Garabato, un asentamiento campesino ubicado en el estado Cojedes, Venezuela, la vida transcurre sin lo que muchos consideran indispensable: electricidad, gas, suministro de agua, o servicio de telefonía fija.<br></br><br></br>

          Cada amanecer en este lugar es un desafío, cada tarea cotidiana se convierte en un esfuerzo constante. En Garabato, la ausencia de comodidades no solo es una lucha diaria, sino también un testimonio de resiliencia y unión frente a la adversidad.</p>
      </section>
      <section id="documentary" style={{ backgroundImage: "url(bg-logo.jpg)" }} className="bg-center bg-no-repeat bg-cover m-w-screen min-h-screen secondary-color flex flex-col items-center justify-center p-10 gap-10 text-justify">
        <div className="w-full max-w-[800px] flex flex-col gap-5">
          <p>Las comunidades rurales enfrentan desafíos significativos que afectan su desarrollo y bienestar. A menudo, estas dificultades se ven acentuadas por la falta de acceso a servicios básicos y recursos, lo que limita su capacidad para prosperar. La pobreza, la precariedad, la marginalidad económica y social continúan, hoy por hoy, prevaleciendo en muchas de las zonas rurales de los países de la región, entre ellos, Venezuela.<br></br><br></br>

            Aun siendo Venezuela uno de los países más urbanizados de América Latina, la pobreza es un fenómeno predominantemente rural. Según los indicadores de la pobreza, ampliamente reconocidos del Instituto Nacional de Estadística, en cifras absolutas, se ha calculado que hay 286.000 hogares pobres en las zonas rurales, de los cuales 172.000 en situación de pobreza extrema.<br></br><br></br>

            Garabato es un asentamiento campesino, ubicado en el municipio Girardot, Cojedes, que no escapa de la realidad que viven las comunidades rurales en el territorio venezolano  y forma parte significativa de las cifras mencionadas anteriormente. La población garabateña está acostumbrada a un estilo de vida muy diferente al que se vive en la ciudades, deben lidiar diariamente con las dificultades que se presentan en el campo, como la ausencia de servicios básicos, centros de asistencia médica, infraestructuras deterioradas, presencia de animales peligrosos, entre otros.
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
        <div className="w-full max-w-[800px] flex flex-col gap-5">
          Esta comunidad cuenta con aproximadamente 300 habitantes quienes se caracterizan por ser personas valientes, trabajadoras, resilientes, pero sobre todo, nobles y generosas. Su rutina diaria comienza desde muy temprano al realizar labores agrícolas y ganaderas para su propia subsistencia, como ordeñar y sembrar. A pesar de que en otras zonas rurales, los roles de las mujeres y hombres pueden estar bastante divididos, en Garabato no, puesto que la mujer garabateña también se integra en todo lo que refiere a las tareas del campo, esto las hace más independientes.<br></br><br></br>

          Según cifras de la ONU, las mujeres en zonas rurales conforman un 43 % de la mano de obra agrícola. La vicepresidente del Foro Rural de Venezuela, Maribel Guédez, señaló en una entrevista reciente que la mujer venezolana representa el 48 % de la mano de obra en el reducido campo productivo y que la sociedad venezolana no está consciente de la importancia de este dato cuantitativo de impacto cualitativo.<br></br><br></br>

          Las arduas labores que se realizan en Garabato como el ordeño, preparación de queso, variedad de cultivos como maíz, topocho y yuca, no solo sustenta los ingresos económicos de sus pobladores, sino también contribuyen a la economía venezolana. Según la Organización de las Naciones Unidas para la Alimentación y la Agricultura las zonas rurales producen el 70% de los alimentos básicos consumidos en Venezuela (maíz, arroz, plátanos, raíces, carne y leche).<br></br><br></br>

          Sin embargo, pese a la importancia de su labor para el consumo nacional muchos de los habitantes del asentamiento campesino en estudio, expresaron que sus ingresos económicos varían entre los 70 y 80 dólares mensuales. En el ámbito educativo, los profesionales que día a día hacen hasta lo imposible para educar a las nuevas generaciones, aseguraron que su sueldo mensual no supera los 200 bolívares.<br></br><br></br>

          Robert Parga, presidente del Colegio de Economistas del Estado Carabobo, señaló que la mayoría de los venezolanos tanto en las zonas urbanas como en las rurales están en situación de pobreza, aunque no sea extrema.

          <div className={"relative aspect-video"}>
            <iframe
              loading="lazy" title="Gumlet video player"
              src="https://play.gumlet.io/embed/6817f83de63aea8598632ae3"
              className={"border-0 absolute top-0 left-0 h-full w-full"}
              allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture; fullscreen;">
            </iframe>
          </div>
        </div>
        <div className="w-full max-w-[800px] flex flex-col gap-5">
          <p>
            Uno de los elementos que afectan las zonas rurales del país es el desmejoramiento o en algunos casos, la inexistencia de servicios públicos. En el caso de Garabato, no poseen ningún tipo de servicios públicos, es por eso que, deben realizar grandes esfuerzos para poder obtener por sus medios todos estos recursos que son de suma importancia para el ser humano. Bajo un sol inclemente y altas temperaturas, semanalmente deben buscar leña para poder cocinar y a través de un proceso de bombeo manual extraer agua de los suelos para almacenarla.<br></br><br></br>

            Asimismo, no cuentan con espacios adecuados para realizar su aseo personal, y en caso de alguna emergencia médica no disponen de centros asistenciales cercanos por lo que tienen que viajar dos horas hasta el ambulatorio más próximo a la población ubicado en Guanarito, Estado Portuguesa.

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
        <div className="w-full max-w-[800px] flex flex-col gap-5">
          <p>
            Por otro lado, el sistema educativo en Garabato enfrenta múltiples debilidades. Los niños deben recorrer a diario un trayecto de aproximadamente dos horas para acudir a sus actividades escolares, dado que solo existen dos escuelas y  se encuentran distantes de sus viviendas. La infraestructura física de estos centros educativos están en mal estado y el personal docente resulta insuficiente por lo que el pensum de estudio no se cumple en su totalidad.<br></br><br></br>

            Según un informe de la Encuesta de Condiciones de Vida, aproximadamente el 30% de los niños en zonas rurales de Venezuela no asiste a la escuela de manera regular por deserción escolar o la asistencia es intermitente por la falta de transporte, trabajo juvenil, entre otras razones.


          </p>
          <div className={"relative aspect-video"}>
            <iframe
              loading="lazy" title="Gumlet video player"
              src="https://play.gumlet.io/embed/6819424a43ef9457178fce54"
              className={"border-0 absolute top-0 left-0 h-full w-full"}
              allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture; fullscreen;">
            </iframe>
          </div>
        </div>
        <div className="w-full max-w-[800px] flex flex-col gap-5">
          <p>
            Garabato no solo es un asentamiento campesino; esta comunidad refleja la lucha y la esperanza en medio de las dificultades. Cada amanecer trae consigo el eco del arduo trabajo de sus habitantes, quienes, a pesar de las limitaciones, continúan apostando a este lugar. La vida en Garabato es un testimonio del espíritu humano que se niega a rendirse, donde la solidaridad y el esfuerzo colectivo son el motor que impulsa a esta comunidad hacia un futuro mejor. En un mundo que ignora las voces de las comunidades rurales, Garabato recuerda que detrás de cada cifra hay historias de valentía y dignidad que merecen ser escuchadas y valoradas.
          </p>
        </div>
      </section>
      <section id="about-us" className="max-w-screen min-h-screen flex flex-col justify-center items-center p-10 gap-5">
        <div className="flex flex-col gap-5 max-w-[800px]">
          <h2>¿Quiénes Somos?</h2>
          <p className="text-justify">Garabato: Historias Olvidadas es un reportaje multimedia que se adentra en la vida cotidiana de los habitantes de esta comunidad rural, donde exponemos la realidad actual que enfrentan, y los desafíos significativos como la escasez de alimentos, el acceso limitado a la educación y la falta de infraestructura tecnológica.<br></br><br></br>

            Ofrecemos una experiencia inmersiva, emocional y reveladora sobre la vida en los asentamientos campesinos de Venezuela.

            En cuatro capítulos de ocho minutos cada uno, podrás entender desde enfoques distintos, la razón por la que a pesar de estar alejados de la civilización, también deben ser tomados en cuenta para mejorar sus condiciones de vida.</p>
          <div className="w-[80vw] max-w-[800px] max-h-[800px] overflow-hidden rounded-3xl"><img src={"garabato-team.jpg"} /></div>
        </div>
      </section>
      <div className="min-h-screen py-6 sm:py-8 lg:py-12">
        <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
          <div className="mb-4 flex items-center justify-between gap-8 sm:mb-8 md:mb-12">
            <div className="flex items-center gap-12">
              <h1 className="text-2xl font-bold lg:text-3xl">Garabato en Imágenes</h1>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6 xl:gap-8">

            <a href="#"
              className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80">
              <img src="/cocina.jpeg" loading="lazy" alt="Cocina a Leña" className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

              <div
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50">
              </div>
            </a>

            <a href="#"
              className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:h-80">
              <img src="/ganado.jpeg" loading="lazy" alt="Ganado" className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

              <div
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50">
              </div>
            </a>

            <a href="#"
              className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:h-90">
              <img src="/garabato-paisaje.jpg" loading="lazy" alt="Paisaje Garabato" className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

              <div
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50">
              </div>
            </a>

            <a href="#"
              className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-90">
              <img src="/garabato.jpg" loading="lazy" alt="Garabato" className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

              <div
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50">
              </div>
            </a>

            <a href="#"
              className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80">
              <img src="/agua.jpeg" loading="lazy" alt="Grifo" className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

              <div
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50">
              </div>
            </a>

            <a href="#"
              className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80">
              <img src="/grifo.jpeg" loading="lazy" alt="Grifo" className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

              <div
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50">
              </div>
            </a>

            <a href="#"
              className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80">
              <img src="/casa.jpeg" loading="lazy" alt="Casa" className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

              <div
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50">
              </div>
            </a>

            <a href="#"
              className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80">
              <img src="/lishavis-caro.jpeg" loading="lazy" alt="Lishavis Caro" className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

              <div
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50">
              </div>

              <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">Habitante de Garabato</span>
            </a>

            <a href="#"
              className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:h-80">
              <img src="/luis-borges.jpeg" loading="lazy" alt="Luis Borges" className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

              <div
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50">
              </div>

              <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">Habitante de Garabato</span>
            </a>

            <a href="#"
              className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:h-90">
              <img src="/maria-torrealba.jpeg" loading="lazy" alt="María Torrealba" className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

              <div
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50">
              </div>

              <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">Habitante de Garabato</span>
            </a>

            <a href="#"
              className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-90">
              <img src="/luis-herrera.jpeg" loading="lazy" alt="Luis Herrera" className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

              <div
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50">
              </div>

              <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">Habitante de Garabato</span>
            </a>

            <a href="#"
              className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80">
              <img src="/blanca-manzanilla.jpeg" loading="lazy" alt="Blanca Manzanilla" className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

              <div
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50">
              </div>

              <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">Habitante de Garabato</span>
            </a>

            <a href="#"
              className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:h-80">
              <img src="/cecilia-vasquez.jpeg" loading="lazy" alt="Cecilia Vasquez" className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

              <div
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50">
              </div>

              <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">Habitante de Garabato</span>
            </a>
            <a href="#"
              className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80">
              <img src="/patilla.jpeg" loading="lazy" alt="patilla" className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

              <div
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50">
              </div>
            </a>

            <a href="#"
              className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80">
              <img src="/tendedero.jpeg" loading="lazy" alt="Tendedero" className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

              <div
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50">
              </div>
            </a>

            <a href="#"
              className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80">
              <img src="/vacas.jpeg" loading="lazy" alt="Vacas" className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

              <div
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50">
              </div>
            </a>

            <a href="#"
              className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80">
              <img src="/toro.JPEG" loading="lazy" alt="Toro" className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

              <div
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50">
              </div>
            </a>

            <a href="#"
              className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:h-80">
              <img src="/paisaje-2.PNG" loading="lazy" alt="Paisaje" className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

              <div
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50">
              </div>
            </a>

            <a href="#"
              className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80">
              <img src="/paisaje.JPEG" loading="lazy" alt="Paisaje" className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

              <div
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50">
              </div>
            </a>
            <a href="#"
              className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80">
              <img src="/becerros.JPEG" loading="lazy" alt="Becerros" className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

              <div
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50">
              </div>
            </a>

            <a href="#"
              className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:h-80">
              <img src="/carretera.PNG" loading="lazy" alt="Camino" className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

              <div
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50">
              </div>
            </a>
            <a href="#"
              className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:h-80">
              <img src="/paisaje-4.PNG" loading="lazy" alt="Paisaje" className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

              <div
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50">
              </div>

            </a>
          </div>
        </div>
      </div>
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
          <h2 className="tertiary-color lg:text-4xl text-xl">¿Qué es Garabato?</h2>
          <Button text={"¡Quiero Saber Más!"} handleClick={() => router.push("/garabato")}></Button>
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
