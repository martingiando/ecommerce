import React from 'react'
import './carticon.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingBasket } from '@fortawesome/free-solid-svg-icons'

const CartIcon = () => (
    <FontAwesomeIcon icon={faShoppingBasket} className="cartIcon" />
)

export default CartIcon;