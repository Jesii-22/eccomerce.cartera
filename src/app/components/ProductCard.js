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
        width={600}
        height={600}
        sizes="200vw"
        style={{ width: '100%', height: 'auto', borderRadius: '20px' }}
      />
      
      <h3 className="mt-5 text-xl font-semibold text-white transition-colors ">
        {item.name}  ${item.price}
      </h3>
     
      <Link
        className="mt-5 bg-sky-500 text-white font-semibold py-2 px-5 rounded-lg transition-colors duration-300 hover:bg-sky-700"
        href={`/product/${item._id}`}
      >
        VER MÁS
      </Link>
    </article>
  );
};

export default ProductCard;
