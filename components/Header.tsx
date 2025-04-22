import Image from "next/image";

export const Header = () => {
  return (
    <section className="h-screen -mt-20 bg-neutral-700 flex items-center justify-center bg-[url(/assets/images/header-bg.webp)] bg-cover">
      {/* Scrolldown animation */}
      <div className="w-1 h-14 bg-black absolute left-10 bottom-10 overflow-hidden z-30">
        <div className="bg-blue-500 w-full h-8 absolute animate-scrollDown" />
      </div>
      {/* text */}
      <section className="flex items-center absolute justify-center w-full h-full overflow-hidden">
        <section className="z-30 flex flex-col items-center gap-10">
          <Image
            width={700}
            height={700}
            src={"/assets/icons/northnode-logo-big.svg"}
            alt="Header"
            className="w-auto"
          />
          <h1 className="text-3xl md:text-5xl text-white text-center font-machina font-bold">
            Astrology Meets Finance
          </h1>
        </section>

        {/* Overlay */}
        <div className="bg-[#0e121a] absolute w-full h-screen opacity-10 z-20" />
      </section>
    </section>
  );
};
