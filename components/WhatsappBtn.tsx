import Image from "next/image";
import Link from "next/link";
import React from "react";

export const WhatsappBtn = () => {
  return (
    <Link className="fixed bottom-5 right-5 bg-green-400 z-40 rounded-full p-4" href={"wpp"}>
      <Image
        src={"/assets/icons/whatsappLogo.svg"}
        alt="Contactanos por whatsapp"
        width={50}
        height={50}
      />
    </Link>
  );
};
