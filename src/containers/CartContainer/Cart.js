import React, {useContext} from 'react'
import { CartContext } from '../../Context/CartContext'

const Cart = () => {

    const valueOfCart = useContext(CartContext)

    return(
        <>
            <h2>Aca irian los productos del carrito</h2>
        </>
    )
}

export default Cart