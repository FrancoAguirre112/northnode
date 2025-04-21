import SimpleSlider from "@/components/SimpleSlider"; // Adjust path if needed

const sliderData = [
  {
    id: 1,
    titleLine1: "Soluciones Financieras",
    description: (
      <p className="text-start">
        • Estrategias de inversión a corto y largo plazo. <br />
        • Optimización de herramientas financieras. <br />
        • Análisis de oportunidades de mercado.
        <br />
        • Asesoramiento para financiamiento e inversores. <br />• Evaluación de
        viabilidad y rentabilidad de proyectos.
      </p>
    ),
  },
  {
    id: 2,
    titleLine1: "Capacitación Empresarial",
    description: (
      <p className="text-start">
        • Finanzas corporativas y personales.
        <br />
        • Formación en compliance, sostenibilidad y RSE.
        <br />
      </p>
    ),
  },
  {
    id: 3,
    titleLine1: "Asesoramiento Integral",
    description: (
      <p className="text-start">
        • Consultoría legal, contable e impositiva.
        <br />
        • Branding, comunicación y estrategia digital.
        <br />
        • Planificación para startups y empresas en expansión.
        <br />
      </p>
    ),
  },
  {
    id: 4,
    titleLine1: "Astrología Aplicada a los Negocios",
    description: (
      <p className="text-start">
        • Selección de talento y formación de equipos.
        <br />
        • Identificación de momentos clave para firmas, inversiones y
        lanzamientos.
        <br />
      </p>
    ),
  },
];

export default function SliderSection() {
  return (
    <section className="flex flex-col justify-between w-screen py-24 px-10 2xl:px-96 bg-[#0d1018] border-b border-[#3f465f]">
      <div className="w-full">
        <h1 className="text-3xl font-bold text-center mb-8 ">
          Nuestros Servicios
        </h1>
        <SimpleSlider items={sliderData} />
      </div>
    </section>
  );
}
