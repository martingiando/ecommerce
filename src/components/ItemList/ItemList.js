import { useState, useEffect } from 'react'
import Item from '../Item/Item'
import './ItemList.scss'
import CardGroup from 'react-bootstrap/CardGroup'


const ItemList = ({items}) => {

    return(
        
        <div class ='itemListContainer'>
            {/* {loading && <h3>Cargando productos...</h3>} */}
            {
                items.map((item, index) => {
                    return <Item item={item} key={index} />
                })
            }
        </div>
    );
}

export default ItemList;