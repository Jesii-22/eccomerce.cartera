"use client";
import React, { useState } from "react";
import Image from "next/image"; 

const Footer = () => {
  const phrases = [
    "Carteras con esencia, hechas a mano.",
    "Un estilo único, cargado de energía.",
    "El poder del ojo turco, en cada detalle.",
    "Conecta con tu fuerza interior y luce con estilo.",
  ];

  const [currentPhrase, setCurrentPhrase] = useState(phrases[0]);
  const [fadeClass, setFadeClass] = useState("opacity-100");

  const handleMouseEnter = () => {
    setFadeClass("opacity-0");

    setTimeout(() => {
      setCurrentPhrase((prevPhrase) => {
        const currentIndex = phrases.indexOf(prevPhrase);
        const nextIndex = (currentIndex + 1) % phrases.length;
        return phrases[nextIndex];
      });
      setFadeClass("opacity-100"); 
    }, 500); 
  };

  return (
    <div
      className="h-16 bg-sky-300 flex justify-between items-center font-semibold text-white px-10 w-full text-2xl  transition-all hover:cursor-pointer hover:bg-sky-400"
      onMouseEnter={handleMouseEnter}
    >
      <div className="transition-transform duration-500 hover:scale-110">
        <Image src={`/imgs/logo.png`} width={50} height={50} alt="Logo Izquierdo" />
      </div>

      <div className={`transition-opacity duration-500 ${fadeClass}`}>
        {currentPhrase}
      </div>

      <div className="transition-transform duration-500 hover:scale-110">
        <Image src={`/imgs/logo.png`} width={50} height={50} alt="Logo Derecho" />
      </div>
    </div>
  );
};

export default Footer;
