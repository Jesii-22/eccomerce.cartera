import ProductCard from '@/app/components/ProductCard';
import mongoose from 'mongoose';

const connectMongo = async () => {
  if (mongoose.connection.readyState === 0) {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  }
};

const productSchema = new mongoose.Schema({
  name: String,
  image: String,
  description: String,
});

const Product = mongoose.models.Product || mongoose.model('Product', productSchema);

const getAllProductsDB = async () => {
  await connectMongo();
  const products = await Product.find({});
  return products;
};

const Carteras = async () => {
  const products = await getAllProductsDB();  

  console.log(products); 
  
  if (!products || products.length === 0) {
    return <h1>No se encontraron productos</h1>;
  }

  return (
    <div>
      <h1 className="text-5xl font-bold font-serif my-10 text-center title-effect">Galería de Carteras</h1>
      <div id="cambioborde" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product, index) => {
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
