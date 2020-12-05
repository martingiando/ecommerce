import  { createContext, useContext, useState}  from "react";

const CartContext = createContext();
const useCartContext = () => useContext(CartContext);

export const CartProvider = ({children}) => {

    const [carrito, setCarrito] = useState([])

    

    const handleCarrito = (newValue) => {
        if (newValue in carrito) {

        } else {
            setCarrito([...carrito, newValue])
            console.log(carrito)
        }     
    }

    return <CartContext.Provider value={{ carrito, handleCarrito }}>
        {children}
    </CartContext.Provider>
}

export default useCartContext