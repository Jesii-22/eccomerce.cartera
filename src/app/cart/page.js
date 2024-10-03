"use client"

import Inner from "@/app/components/Inner"; 
import ProductsCheckout from "@/app/components/cart/ProductsCheckout"; 
import FormCheckout from "@/app/components/cart/FormCheckout"; 
import Checkout from "@/app/components/Checkout/checkout"; 



const Cart = () => {
  return (
    <section className="min-h-screen py-10 bg-gray-100">
      
      <h1 className="text-5xl font-serif text-center text-sky-600 mb-10 transition-transform duration-500 hover:scale-105 hover:text-sky-700">
        Carrito de Compras
      </h1>
      <Inner>
        <div className="grid grid-cols-12 gap-8">
  
          <div className="col-span-12 lg:col-span-6 p-6 bg-white rounded-lg shadow-lg transition-transform duration-500 hover:scale-105 hover:shadow-2xl">
            <h2 className="text-3xl font-serif text-sky-500 mb-6 transition-colors duration-300 hover:text-sky-700">
              Detalles de Envío
            </h2>
            <Checkout/> 
            {/* <div className="col-span-12 lg:col-span-6">
    <FormCheckout /> 
               </div> */}
          </div>

          <div className="col-span-12 lg:col-span-6 p-6 bg-white rounded-lg shadow-lg transition-transform duration-500 hover:scale-105 hover:shadow-2xl">
            <h2 className="text-3xl font-serif text-sky-500 mb-6 transition-colors duration-300 hover:text-sky-700">
              Tus Productos
            </h2>
            <ProductsCheckout />
          </div>
        </div>
      </Inner>
    </section>
  );
};

export default Cart;




