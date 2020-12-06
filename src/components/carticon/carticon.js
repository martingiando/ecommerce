import React from 'react'
import './carticon.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingBasket } from '@fortawesome/free-solid-svg-icons'
import {Link} from 'react-router-dom'
import useCartContext from '../../Context/CartContext'

const CartIcon = () => {

    const { productsCount } = useCartContext()

return(
    <Link to={'/cart'}>
        <FontAwesomeIcon icon={faShoppingBasket} className="cartIcon" /><h5>{productsCount()}</h5>
    </Link>
    )
}

export default CartIcon;