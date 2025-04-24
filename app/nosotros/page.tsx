import Image from "next/image";

const nosotros = () => {
  return (
    <section className="z-30 flex flex-col md:flex-row items-center gap-10 h-full bg-[#0d1018] lg:px-96">
      <Image
        width={700}
        height={700}
        src={"/assets/icons/northnode-logo-big.svg"}
        alt="Header"
        className="w-[80%] md:w-[30%]"
      />
      <div className="h-[80%] flex flex-col gap-10 md:justify-center items-start w-[80%] md:w-full">
        <h1 className="text-3xl md:text-5xl text-white text-center">
          Nosotros
        </h1>
        <p className="text-xl font-medium">
          La empresa nace de más de 20 años de experiencia en el sistema
          financiero, identificando necesidades de empresas medianas y pequeñas
          que buscan optimizar su rentabilidad. Se distingue por integrar
          estrategias financieras con astrología aplicada, una herramienta
          innovadora en la toma de decisiones estratégicas. Además, cuenta con
          un equipo multidisciplinario altamente capacitado para ofrecer
          asesoramiento integral en áreas clave como finanzas, legales,
          marketing y sostenibilidad
        </p>
      </div>
    </section>
  );
};

export default nosotros;
