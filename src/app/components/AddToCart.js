import { FaShoppingCart } from 'react-icons/fa'; // Asegúrate de importar el icono
import { useAppContext } from "@/app/contexts/AppContext";

const AddToCart = ({ name, price, id, image, gallery = [], quantity = 1 }) => {
  const { handleAddToCart } = useAppContext();

  return (
    <button
      onClick={() => handleAddToCart(name, price, image, gallery, id, quantity)}
      className="btn flex items-center bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors duration-300 space-x-2"
    >
      {/* Icono del carrito */}
      <FaShoppingCart size={20} />
      {/* Texto del botón */}
      <span>Agregar al carrito</span>
    </button>
  );
};

export default AddToCart;
