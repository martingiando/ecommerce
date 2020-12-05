import useCartContext from '../../Context/CartContext';
 

export default function Cart() {
    
    const { carrito } = useCartContext()
    
    return(
        <div className="Cart">
            <h1>CARRITO</h1> 

                 <p>
                     {carrito.map((entry) => (
                         
                     <p>{entry.producto} - {entry.modelo} - {entry.precio}</p>
                     
                     ))}
                 </p>
        </div>
    )
}