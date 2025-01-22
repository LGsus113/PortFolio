import Nav from "@components/Nav.jsx";
import useScrollFraction from "@utils/Calculate-Scroll.js";

import CardPresentation from "@components/Card-Presentation.jsx";
import InformationUser from "@components/Information-User.jsx";
import Study from "@components/Study-Info.jsx";

import mancha from "@img/mancha-blanca.png";
import LGsus from "@img/file.jpg";

function DataPage() {
  const images = {
    form: mancha,
    content: LGsus,
  };

  const menuOptions = {
    leftSection: {
      title: "LGsus",
      size: "5xl",
    },
    centerSection: [
      {
        id: "inicio",
        label: "Inicio",
        action: () => alert("Navegando a Inicio"),
      },
      {
        id: "información",
        label: "Información",
        action: () => alert("Navegando a Sobre"),
      },
      {
        id: "realizados",
        label: "Realizados",
        action: () => alert("Navegando a Realizados"),
      },
      {
        id: "contactame",
        label: "Contactame",
        action: () => alert("Navegando a Contacto"),
      },
    ],
    rightSection: {
      label: "Ver CV",
      action: () => alert("Botón derecho clickeado!"),
    },
  };

  const scrollFraction = useScrollFraction();
  const cardSize = Math.max(1 - scrollFraction, 0.4);

  return (
    <>
      <header className="w-full h-auto top-0 z-50 fixed flex justify-center items-center bg-gray-900">
        <Nav menuOptions={menuOptions} />
      </header>
      <main className="w-full h-auto flex flex-col justify-center items-center gap-5">
        <div
          className="w-[1536px] h-[100vh] top-0 sticky flex justify-center items-center z-10 pointer-events-none"
          style={{ "--card-size": cardSize }}
        >
          <div className="w-full h-auto p-5 flex justify-between gap-24 rounded-lg color-fun shadow-fun card-Size transition-all duration-500 ease-in-out">
            <InformationUser />
            <CardPresentation images={images} />
          </div>
        </div>

        <div className="w-auto h-[100vh] z-20 bg-red-500">
          <Study />
        </div>
      </main>

      <footer className="w-full h-auto flex flex-col justify-center items-center">
        hola jaja <br />
        hola jajaja <br />
      </footer>
    </>
  );
}

export default DataPage;