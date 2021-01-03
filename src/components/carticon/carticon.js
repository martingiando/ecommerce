import React from 'react'
import './carticon.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingBasket } from '@fortawesome/free-solid-svg-icons'
import {Link} from 'react-router-dom'
import useCartContext from '../../Context/CartContext'

const CartIcon = () => {

    const { productsCount } = useCartContext()

return(
    <Link to={'/cart'}>
        <FontAwesomeIcon icon={faShoppingBasket} className="cartIcon" />
        <div className={"bgNumberCart"}>{productsCount()}</div>
    </Link>
    )
}

export default CartIcon;