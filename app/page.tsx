import { Header } from "@/components/Header";
import { Navbar } from "../components/Navbar";
import ContactForm from "@/components/ContactForm";
import SliderSection from "@/components/SliderSection";
import { WhatsappBtn } from "../components/WhatsappBtn";

export default function Home() {
  return (
    <div className="w-full">
      <WhatsappBtn />
      <Navbar />
      <Header />
      <section className="px-96 bg-[#0d1018] py-24 border-b border-[#3f465f] text-xl">
        <p>
          Somos una
          <span className="font-semibold text-blue-500">
            consultora estratégica
          </span>
          nacida de una visión integral del mundo empresarial. <br />
          <br />
          Tras identificar durante más de dos décadas las verdaderas necesidades
          de pequeñas y medianas empresas, creamos un modelo de asesoramiento
          único. Combinamos conocimientos sólidos en finanzas con herramientas
          innovadoras como la astrología aplicada, para que nuestros clientes no
          solo tomen decisiones informadas, sino también estratégicamente
          alineadas con sus ciclos de crecimiento.
          <br />
          <br />
          Trabajamos con un equipo multidisciplinario que abarca áreas como
          legales, marketing, sostenibilidad y contabilidad, ofreciendo
          soluciones personalizadas, ágiles y basadas en la confianza.
        </p>
      </section>

      <section className="px-96 bg-[#0d1018] py-34 border-b border-[#3f465f] text-2xl text-center font-semibold">
        <h2>
          Donde otros ven números, nosotros vemos{" "}
          <span className="font-semibold text-blue-500">
            oportunidades alineadas con el propósito de tu empresa
          </span>
        </h2>
      </section>

      <section className="px-96 bg-[#0d1018] py-24 border-b border-[#3f465f] text-xl">
        <p>
          Detrás de esta visión hay una mujer con más de{" "}
          <span className="font-semibold text-blue-500">
            20 años navegando el mundo financiero.
          </span>{" "}
          <br />
          <br /> La fundadora de esta empresa supo combinar su vasta trayectoria
          en el sistema financiero con su formación en astrología, logrando una
          perspectiva única: la de entender no solo los movimientos del mercado,
          sino también los de las personas y las organizaciones. <br />
          <br /> Hoy lidera este proyecto con pasión, ofreciendo una mirada
          holística y estratégica para quienes buscan transformar sus negocios
          desde adentro hacia afuera.
        </p>
      </section>
      <SliderSection />
      <ContactForm />
    </div>
  );
}
