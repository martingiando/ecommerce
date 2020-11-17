import { useState, useEffect } from 'react'
import Item from '../Item/Item'
import CardGroup from 'react-bootstrap/CardGroup'

const componentesPC = [
    {
        producto: 'procesador',
        modelo: 'intel core i9',
        img: 'https://http2.mlstatic.com/D_NQ_NP_656195-MLA43406757007_092020-O.webp',
        precio: 95900,
        stock: 50
    },
    {
        producto: 'placa de video',
        modelo: 'nvidia rtx 2070',
        img: 'https://http2.mlstatic.com/D_NQ_NP_852821-MLA41349346486_042020-O.webp',
        precio: 94999,
        stock: 30
    },
    {
        producto: 'placa madre',
        modelo: 'Asus Prime H310m E',
        img: 'https://http2.mlstatic.com/D_NQ_NP_722310-MLA31630501020_072019-O.webp',
        precio: 7399,
        stock: 25
    }
]

const ItemList = ({startFind}) => {
    const [arrComponentesPC, setArrComponentesPC] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() =>{
            setLoading(true);
            const task = new Promise ((resolve, reject) =>{
                setTimeout(()=>{
                    resolve(componentesPC);
                }, 3000);
            }).then(
                result => {
                    setArrComponentesPC(result);
                    setLoading(false);
                }
            );
        }
    , []);

    return(
        <>
            {loading && <h3>Cargando productos...</h3>}
            {
                arrComponentesPC.map((elemento, index) => {
                    return <Item data={elemento} key={index} />
                    
                })
            }
        </>
    );
}

export default ItemList;