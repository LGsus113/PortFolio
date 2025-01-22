import TyperEfect from "@components/Typer-Efect.jsx";
import CarouselIconsTecnologies from "@components/Carousel-Icons-Tecnologies.jsx";

import { FaReact, FaCss3Alt, FaHtml5, FaDatabase } from "react-icons/fa";
import {
  SiJavascript,
  SiTailwindcss,
  SiSpringboot,
  SiMysql,
} from "react-icons/si";
import { DiJava } from "react-icons/di";

function InformationUser() {
  const frases = [
    "Hi! I'm JESUS MEDINA (LGsus)",
    "¡Hola! Yo soy JESUS MEDINA (LGsus)",
  ];

  const data = {
    iconsData: [
      { IconComponent: FaReact, className: "text-blue-500" },
      { IconComponent: FaCss3Alt, className: "text-blue-600" },
      { IconComponent: FaHtml5, className: "text-orange-500" },
      { IconComponent: SiJavascript, className: "text-yellow-500" },
      { IconComponent: SiTailwindcss, className: "text-teal-400" },
      { IconComponent: DiJava, className: "text-red-500" },
      { IconComponent: SiSpringboot, className: "text-green-600" },
      { IconComponent: SiMysql, className: "text-blue-500" },
      { IconComponent: FaDatabase, className: "text-red-600" },
    ],
    iconsDimensity: {
      size: "48px",
      padding: "16px",
    },
  };

  return (
    <div className="flex flex-1 flex-col gap-4 justify-between">
      <div className="w-full flex flex-col gap-5">
        <h1 className="text-4xl">
          <TyperEfect
            frases={frases}
            speed={110}
            delay={1700}
            weight="font-bold"
          />
        </h1>
        <p className="text-justify text-lg whitespace-normal">
          Apasionado por el diseño y desarrollo de aplicaciones, con experiencia
          tanto en backend como en frontend. Manejo{" "}
          <span className="italic font-semibold">React</span>,{" "}
          <span className="italic font-semibold">JavaScript</span>,{" "}
          <span className="italic font-semibold">CSS</span>,{" "}
          <span className="italic font-semibold">HTML</span> y{" "}
          <span className="italic font-semibold">Tailwind CSS</span>, con un
          fuerte dominio de <span className="italic font-semibold">Java</span> y{" "}
          <span className="italic font-semibold">Spring Boot</span> en el
          desarrollo de backend. Experiencia en bases de datos{" "}
          <span className="italic font-semibold">SQL Server</span> y{" "}
          <span className="italic font-semibold">MySQL</span>.
          <br />
          Destacado por su capacidad para aprender, resolver retos, y colaborar
          en equipo, liderando con empatía y orientación hacia metas comunes.
          Con interés en profundizar en{" "}
          <span className="italic font-semibold">UX/UI</span>, busco crear
          experiencias digitales que combinen funcionalidad y diseño intuitivo.
        </p>
      </div>
      <div
        className="w-full h-auto bg-gray-900 rounded-lg shadow-inner overflow-hidden group"
        style={{ "--cantidad": data.iconsData.length }}
      >
        <CarouselIconsTecnologies data={data} />
      </div>
    </div>
  );
}

export default InformationUser;