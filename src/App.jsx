import CardPresentation from "@components/Card-Presentation.jsx";
import Nav from "@components/Nav.jsx";

import mancha from "@img/mancha-blanca.png";
import LGsus from "@img/file.jpg";

function App() {
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
    <div className="min-h-screen p-8 flex flex-col gap-10 max-w-screen-2xl mx-auto">
      <Nav menuOptions={menuOptions} />
      <CardPresentation images={images} />
    </div>
  );
}

export default App;
