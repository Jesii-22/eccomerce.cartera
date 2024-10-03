import { useAppContext } from "@/app/contexts/AppContext";

const AddToCart =({ name, price, id, image, gallery = [], quantity = 1}) =>  {

   const {handleAddToCart} = useAppContext();
    
    return (
        <>
        <button 
        onClick={()=> handleAddToCart(name, price, image, gallery, id, quantity )} className="btn"
        >
            Agregar al carrito
        
        </button>
        </>
    );
};

export default AddToCart;
