import ProductCard from '@/app/components/ProductCard';
import mongoose from 'mongoose';
import { getAllProductsDB } from '../actions';

const Carteras = async () => {
  const response = await getAllProductsDB();  

  console.log(response.products); 
  
  if (!response.products || response.products.length === 0) {
    return <h1>No se encontraron productos</h1>;
  }

  return (
    <div className="px-10"> {/* Ajusta el margen lateral */}
      <h1 className="text-5xl font-semibold text-center text-sky-600 mb-10 transition-transform duration-500 hover:scale-105 hover:text-sky-700"> <br></br> 🧿✨ Galería de Carteras 🧿✨</h1>
      <div className="grid grid-cols-1 sm:grid-cols-4 lg:grid-cols-4 gap-12"> {/* Ajustar los espacios entre productos */}
        {response.products.map((product, index) => {
          const imageName = product.image ? product.image : `cartera.${(index % 8) + 1}.png`;

          return (
            // eslint-disable-next-line react/jsx-key
            <div className="flex flex-col items-center">
              <ProductCard key={product._id} item={{ ...product, image: imageName }} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Carteras;
