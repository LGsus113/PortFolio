import { FaReact, FaCss3Alt, FaHtml5, FaDatabase } from "react-icons/fa";
import {
  SiJavascript,
  SiTailwindcss,
  SiSpringboot,
  SiMysql,
} from "react-icons/si";
import { DiJava } from "react-icons/di";

function CarouselIconsTecnologies() {
  return (
    <>
      <FaReact className="text-blue-500" />
      <FaCss3Alt className="text-blue-600" />
      <FaHtml5 className="text-orange-500" />
      <SiJavascript className="text-yellow-500" />
      <SiTailwindcss className="text-teal-400" />
      <DiJava className="text-red-500" />
      <SiSpringboot className="text-green-600" />
      <SiMysql className="text-blue-500" />
      <FaDatabase className="text-red-600" />
    </>
  );
}

export default CarouselIconsTecnologies;
