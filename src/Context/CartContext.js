import { createContext, useContext, useState } from "react";

const CartContext = createContext();
const useCartContext = () => useContext(CartContext); //Custum Hook para solo importar useAppContext y AppProvider

export const CartProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  const addProduct = (product, quantity) => {

    const existing = products.find((p) => p.id === product.id)


    if(existing){
        existing.quantity += quantity
        setProducts([...products])
    } else {
        setProducts([...products, {...product, quantity}])
    }
  };

  const productsCount = () =>{
    return products.reduce((acc, p) => (acc += p.quantity), 0)
  }

  const delProduct = (id) => {
      products.splice(
          products.findIndex(p => p.id === id), 1
      )
      setProducts([...products])
  }

  const getGrandTotal = () => {
    return products.reduce((acc, p) => (acc += p.precio * p.quantity), 0)
  }

  return (
    <CartContext.Provider value={{ products, addProduct , getGrandTotal , productsCount , delProduct}}>
      {children}
    </CartContext.Provider>
  );
};

export default useCartContext;