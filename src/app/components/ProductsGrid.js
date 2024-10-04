import Inner from '@/app/components/Inner';
import ProductCard from '@/app/components/ProductCard';
import { getAllProducts, getAllProductsDB } from '@/app/actions';

export default async function ProductsGrid() {
  const response = await getAllProductsDB()
  return (
    <section className='mb-10'>
    <Inner>
      <div className=''> 
      <h2 className='text-5xl font-semibold text-center text-sky-600 mb-10 transition-transform duration-500 hover:scale-105 hover:text-sky-700'>
      <br></br>🧿✨ Nuestros Productos 🧿✨
      </h2>

      </div>
      <div className='grid grid-cols-12 gap-4'>
        {response.products && response.products.map((item, index) => (
          <ProductCard key={index} item={item} />
        ))}
      </div>
    </Inner>
  </section>
  
  );
}
