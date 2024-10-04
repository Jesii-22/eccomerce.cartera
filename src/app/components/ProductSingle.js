"use client";
import Image from 'next/image';
import AddToCart from '@/app/components/AddToCart';
import { useState } from 'react';


const ProductSingle = ({ product }) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(null); 

  if (!product) {
    return <p>Producto no encontrado</p>;
  }

  const { image, name, price, gallery, descripcion, _id } = product;

 
  const handleImageChange = (direction) => {
    if (selectedImageIndex !== null) {
      const newIndex = selectedImageIndex + direction;
      if (newIndex >= 0 && newIndex < gallery.length) {
        setSelectedImageIndex(newIndex);
      }
    }
  };

  return (
    <section className="px-20 pt-15"> 
      <div className="grid grid-cols-12 gap-6">
        
      
        <div className="col-span-6 flex justify-center items-center">
          <div className="border-8 border-sky-300 rounded-lg transition-transform duration-500 hover:scale-105">
            <Image
              src={`/imgs/products/${image}`}
              width={400}
              height={400}
              alt={name}
              className="rounded-lg" 
            />
          </div>
        </div>

        <div className=" col-span-6 flex flex-col items-start space-y-5">
          <h1 className=" text-3xl font-semibold  mb-2 text-sky-600 hover:text-sky-300 transition-all duration-300">
            {name}
          </h1>
          
          <p className="border p-3 mb-3">{descripcion}</p>

        
          <div className=" ml-55 pt-15 flex items-center space-x-4">
            <span className="text-sky-500 font-semibold text-3xl ">
              ${price}
              <p className=" pr-40 pt-4 text-xs text-green-600 font-semibold mb-2">Hasta 12 cuotas sin interés</p>
              
              <Image
              src={`/imgs/pagos.webp`}
              width={200}
              height={100}
              alt="Opciones de pago"
            />

            </span>

            

            <div className="mt-4 pt-4">
              <AddToCart
                price={price}
                name={name}
                image={image}
                gallery={gallery}
                descripcion={descripcion}
                id={_id}
              />
            </div>
          </div>
        </div>
      </div>

      {gallery && gallery.length > 0 && (
        <div className="mt-10 flex grid-cols-4 gap-1 mb-10"> 
          {gallery.map((img, index) => (
            <div key={index} className="cursor-pointer">
              <Image
                src={`/imgs/products/${img}`}
                width={150}
                height={150}
                alt={`${name} ${index}`}
                className="border-8 border-sky-300 rounded-lg transition-transform duration-300 hover:scale-110" 
                onClick={() => setSelectedImageIndex(index)} 
              />
            </div>
          ))}
        </div>
      )}

      {selectedImageIndex !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50">
          <button
            className="absolute left-5 text-white text-3xl p-2"
            onClick={() => handleImageChange(-1)} 
            disabled={selectedImageIndex === 0} 
          >
            &#8249;
          </button>

          <div className="relative">
            <Image
              src={`/imgs/products/${gallery[selectedImageIndex]}`}
              width={600}
              height={600}
              alt="Selected"
              className="rounded-lg" 
            />
            <button
              className="absolute top-0 right-0 text-white text-3xl p-2"
              onClick={() => setSelectedImageIndex(null)} 
            >
              &times;
            </button>
          </div>

          <button
            className="absolute right-5 text-white text-3xl p-2"
            onClick={() => handleImageChange(1)} 
            disabled={selectedImageIndex === gallery.length - 1} 
          >
            &#8250;
          </button>
        </div>
      )}
    </section>
  );
};

export default ProductSingle;
