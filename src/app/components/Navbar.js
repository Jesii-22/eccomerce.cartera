"use client";
import { useAppContext } from "@/app/contexts/AppContext";
import Link from "next/link";
import Image from "next/image";
import { FaCartShopping } from "react-icons/fa6";

export default function Navbar() {
  const { cartLengthFunc } = useAppContext();
  
  return (
    <div className="text-2xl flex justify-between items-center h-24 bg-sky-300 text-white px-10">
   
      <Link href={`/`}>
        <div className="transition-transform duration-500 hove|r:scale-110">
          <Image src={`/imgs/logo.png`} width={50} height={50} alt="Logo" />
        </div>
      </Link>
      <nav>
        <ul className="flex justify-center items-center gap-5">
    
          <li className="transition-colors duration-300 font-serif hover:text-sky-500">
            <Link href={`/`}>Home</Link>
          </li>
          <li className="transition-colors duration-300 font-serif hover:text-sky-500">
            <Link href={`/carteras`}>Carteras</Link>
          </li>
          <li className="transition-colors duration-300 font-serif hover:text-sky-500">
           <Link href={`/contacto`}>Contacto</Link>
          </li>
         
        </ul>
      </nav>

      <Link href={`/cart`}>
        <div className="relative transition-transform duration-500 hover:scale-110">
          <FaCartShopping size={30} />
          {cartLengthFunc() > 0 && (
            <span className="absolute top-5 left-5 flex items-center justify-center bg-black text-white rounded-full w-5 h-5 p-1 text-sm">
              {' '}
              {cartLengthFunc()}
            </span>
          )}
        </div>
      </Link>
    </div>
  );
}

