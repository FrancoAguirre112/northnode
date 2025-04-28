import React from "react"; // Optional: Import React if not implicitly available

const Valores = () => {
  return (
    <section className="flex flex-col 2xl:flex-row justify-between w-screen py-24 px-10 2xl:px-96 bg-[#0d1018] border-b border-[#3f465f] gap-12 md:gap-8">
      {/* Heading Section */}
      <div className="font-machina font-bold text-3xl md:text-8xl flex items-center">
        <h2 className="border-l md:pl-4 pl-2 line-clamp-2">
          NUESTROS VALORES
        </h2>
      </div>

      {/* List Section */}
      <div className=" text-gray-300">
        {/* Constrain width and set base text color */}
        <ul className="space-y-8">
          {/* Add vertical space between list items */}
          <li>
            <h3 className="text-xl md:text-5xl font-semibold text-white mb-2 ">
              Confianza
            </h3>
            <p className="text-gray-400 text-sm md:text-2xl">
              Relaciones sólidas basadas en ética y confidencialidad
            </p>
          </li>
          <li>
            <h3 className="text-xl md:text-5xl font-semibold text-white mb-2 ">
              Personalización
            </h3>
            <p className="text-gray-400 text-sm md:text-2xl">
              Atención cercana y ajustada a cada situación
            </p>
          </li>
          <li>
            <h3 className="text-xl md:text-5xl font-semibold text-white mb-2 ">
              Experiencia
            </h3>
            <p className="text-gray-400 text-sm md:text-2xl">
              Más de 20 años en el sector financiero
            </p>
          </li>
          <li>
            <h3 className="text-xl md:text-5xl font-semibold text-white mb-2 ">
              Celeridad
            </h3>
            <p className="text-gray-400 text-sm md:text-2xl">
              Soluciones ágiles adaptadas a las necesidades del cliente
            </p>
          </li>
          <li>
            <h3 className="text-xl md:text-5xl font-semibold text-white mb-2 ">
              Innovación
            </h3>
            <p className="text-gray-400 text-sm md:text-2xl">
              Uso de herrramientas estratégicas, como la astrología aplicada a
              los negocios
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Valores;
