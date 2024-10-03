import Image from 'next/image';
import Link from 'next/link';

const ProductCard = ({ item }) => {
  return (
    <article
      id="borde"
      className="p-5 col-span-3 flex justify-center items-center flex-col bg-white rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl duration-300"
    >
      <Image
        src={item.image ? `/imgs/products/${item.image}` : '/imgs/products/cartera.1.png'}
        alt={item.name}
        width={0}
        height={0}
        sizes="100vw"
        style={{ width: '100%', height: 'auto', borderRadius: '20px' }}
      />
      

      <h3 className="mt-5 mb-3 text-2xl font-serif text-sky-600 transition-colors duration-300 hover:text-sky-800">
        {item.name}
      </h3>
      
     
      <p
        className="text-xl text-black font-bold px-4 py-2 border-2 border-sky-500 rounded-lg transition-transform duration-300 hover:bg-sky-500 hover:text-white"
      >
        ${item.price}
      </p>

      
      <Link
        className="mt-5 bg-sky-500 text-white font-semibold py-2 px-5 rounded-lg transition-colors duration-300 hover:bg-sky-700"
        href={`/product/${item._id}`}
      >
        Ver Más
      </Link>
    </article>
  );
};

export default ProductCard;
