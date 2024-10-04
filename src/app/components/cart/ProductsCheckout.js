"use client";

import Image from 'next/image';
import { useAppContext } from "@/app/contexts/AppContext";
import { FaWhatsapp } from 'react-icons/fa';

const ProductsCheckout = () => {
    const { cart, cartTotal, handleRemoveProduct } = useAppContext();
    
    return (
        <div className='p-4'>
          
            <div>
                {cart.map(product => (
                    <div key={product.id} className='flex justify-between items-center p-2 border-b border-gray-300'> 
                        <div className='flex items-center'>
                            <Image 
                                src={`/imgs/products/${product.image}`} 
                                alt={product.name} 
                                className='w-16 h-16 object-cover rounded-md' 
                                width={64} 
                                height={64} 
                            />
                            <h3 className='ml-4 text-lg font-semibold'>{`${product.quantity} x ${product.name}`}</h3>
                        </div> 
                        <div className='flex items-center'>
                            <p className='text-lg font-bold text-sky-500'>{`$${(product.price * product.quantity).toFixed(2)}`}</p>
                            <button 
                                onClick={() => handleRemoveProduct(product.id)} 
                                className='ml-4 bg-red-600 text-white py-1 px-3 rounded-md transition duration-300 hover:bg-red-700'
                            >
                                Quitar
                            </button>
                        </div>
                    </div>
                ))}
            </div>
            <div className="flex flex-col items-end mt-4">
                <p className="text-2xl font-semibold text-sky-500">Total: ${cartTotal().toFixed(2)}</p>
                <a 
                    href="https://wa.me/1126444064"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center bg-green-600 text-white py-2 px-4 rounded-md transition duration-300 hover:bg-green-700 w-full mt-2 text-center"
                >
                    <FaWhatsapp className="mr-2" /> Comunicarme por WhatsApp
                </a>
                <p className="text-xxs italic text-gray-600 mt-1 w-full text-left">
                    Una vez que tengas tu compra,haz clic en el <br></br>botón de WhatsApp para continuarla.
                </p>
            </div>
        </div>
    );
};

export default ProductsCheckout;
