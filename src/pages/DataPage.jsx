import Nav from "@components/Nav.jsx";
import CardPresentation from "@components/Card-Presentation.jsx";
import InformationUser from "@components/Information-User.jsx";

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

  return (
    <>
      <header className="w-full h-auto mb-5">
        <Nav menuOptions={menuOptions} />
      </header>
      <main className="w-full h-auto flex flex-col gap-5">
        <div className="w-full h-auto p-5 flex justify-between gap-24 rounded-lg color-fun-inverse shadow-2xl">
          <InformationUser />
          <CardPresentation images={images} />
        </div>
      </main>
      <footer>Data Page</footer>
    </>
  );
}

export default DataPage;
