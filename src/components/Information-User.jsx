import TyperEfect from "@components/Typer-Efect.jsx";

function InformationUser() {
  const frases = [
    "Hi! I'm JESUS MEDINA (LGsus)",
    "¡Hola! Yo soy JESUS MEDINA (LGsus)",
  ];

  return (
    <div>
      <h1 className="text-4xl">
        <TyperEfect
          frases={frases}
          speed={110}
          delay={1500}
          weight="font-bold"
        />
      </h1>
      <p>Lorem ipsum...</p>
    </div>
  );
}

export default InformationUser;
