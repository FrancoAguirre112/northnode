import Image from "next/image";

export const Header = () => {
  return (
    <section className="h-screen -mt-20 bg-neutral-700 flex items-center justify-center">
      {/* Scrolldown animation */}
      <div className="w-1 h-14 bg-black absolute left-10 bottom-10 overflow-hidden z-30">
        <div className="bg-blue-500 w-full h-8 absolute animate-scrollDown" />
      </div>
      {/* text */}
      <section className="flex items-center absolute justify-center w-full h-full overflow-hidden">
        <section className="z-30 px-72 flex flex-col gap-10">
          <h1 className="text-5xl text-white text-center">
            Transformamos decisiones financieras en movimientos estratégicos con
            visión innovadora y herramientas únicas
          </h1>
          <p className="text-gray-300 text-center text-2xl">
            Con más de 20 años de experiencia y una metodología que fusiona
            finanzas tradicionales con astrología aplicada, potenciamos a
            empresas que desean crecer con inteligencia, confianza y agilidad
          </p>
        </section>

        {/* Overlay */}
        <div className="bg-[#0e121a] absolute w-full h-screen opacity-80 z-20" />
        <Image
          width={3000}
          height={2500}
          src={"/assets/images/City.jpg"}
          alt="Header"
          className="w-full absolute z-10"
        />
      </section>
    </section>
  );
};
