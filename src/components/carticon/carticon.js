import React from 'react'
import './carticon.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingBasket } from '@fortawesome/free-solid-svg-icons'
import {Link} from 'react-router-dom'

const CartIcon = () => (
    <Link to={'/cart'}>
    <FontAwesomeIcon icon={faShoppingBasket} className="cartIcon" />
    </Link>
)

export default CartIcon;