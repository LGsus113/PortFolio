import PropTypes from "prop-types";

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

function InformationUser({ dataFrases }) {
  const { frases, description } = dataFrases;

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
      <div className="w-full h-full flex flex-col items-center justify-center gap-6 text-center">
        <h1 className="text-7xl">
          <TyperEfect
            frases={frases}
            speed={110}
            delay={1800}
            weight="font-extrabold"
          />
        </h1>
        <div className="flex flex-col gap-2">
          <div className="inline-block">
            <div className="w-full h-1 bg-purple-900 mx-auto rounded-full"></div>
            <h2 className="text-3xl font-semibold text-white font-serif">
              {description}
            </h2>
          </div>
        </div>
      </div>
      <div
        className="w-full h-24 bg-ligthDark rounded-lg shadow-inner overflow-hidden group"
        style={{ "--cantidad": data.iconsData.length }}
      >
        <CarouselIconsTecnologies data={data} />
      </div>
    </div>
  );
}

InformationUser.propTypes = {
  dataFrases: PropTypes.arrayOf(
    PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.string).isRequired,
      PropTypes.string.isRequired,
    ])
  ).isRequired,
};

export default InformationUser;
