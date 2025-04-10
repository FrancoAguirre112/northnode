import Image from "next/image";
import Link from "next/link";

export const Navbar = () => {
  return (
    <nav className="flex justify-between items-center z-50 px-8 sticky top-0 bg-[#121620]">
      {/* Links */}
      <section className="flex gap-10">
        {/* Logo */}
        <section>
          <Image
            src={"/assets/icons/northnodeLogo.svg"}
            alt="North Node"
            width={80}
            height={80}
          />
        </section>

        {/* Nav links */}
        <ul className="flex gap-2 items-center">
          <li>
            <Link href="/">Inicio</Link>
          </li>
          <li>
            <Link href="#contacto">Contacto</Link>
          </li>
        </ul>
      </section>

      {/* Social */}
      <section>Socials</section>
    </nav>
  );
};
