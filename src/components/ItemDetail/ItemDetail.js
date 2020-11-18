import { useState, useEffect } from 'react'
import Counter from '../counter/counter'

const ItemDetail = ({product}) => {
    return (
        <>
        <div id='ItemDetail'>
            <img src={product.img}></img>
            <h3>{product.producto}</h3>
            <h3>Modelo: {product.modelo}</h3>
            <h4>${product.precio}</h4>
            <h6>Stock: {product.stock} unidades</h6>
            <h6>Tipos de Memoria RAM Soportadas: {product.ramSoportadas}</h6>
            <h6>Procesador Grafico: {product.procGrafico}</h6>
            <h6>Maxima Memoria RAM Soportada: {product.maxRam}</h6>
        </div>
        <Counter />
        </>
    )
}

export default ItemDetail;