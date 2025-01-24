import jesus from "@img/Jesus.jpg";

function AboutMe() {
  return (
    <div className="w-full h-[50vh] flex gap-20 overflow-hidden rounded-lg border border-white bg-purple-300 shadow-inner relative">
      <div className="w-full h-full flex flex-col justify-center gap-5 p-5 z-20">
        <h1 className="text-4xl text-ligthDark font-bold">Sobre Mi</h1>
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
      <div className="w-auto h-full bg-transparent relative">
        <img
          className="w-[450px] h-full object-cover shadow-inner"
          src={jesus}
          alt="jesus"
        />
        <div
          className="absolute inset-0 bg-gradient-to-l from-transparent to-purple-300 opacity-100 z-10"
          style={{ backgroundSize: "100%", backgroundPosition: "100% 50%" }}
        />
      </div>
    </div>
  );
}

export default AboutMe;
