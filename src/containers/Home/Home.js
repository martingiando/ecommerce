import Greeting from '../../components/greeting/greeting'
import ItemList from '../../components/ItemList/ItemList'
import { getProducts } from '../../api/products'
import { useState, useEffect} from 'react'

const Home = () => {

    const [items, setItems] = useState([])

    useEffect(() => {
        getProducts().then(
            (response) => {
                setItems(response)
            }
        )
    }, [])


    return (
        <>
            <Greeting greeting="¡Bienvenidos a Game Masters!" />
            <ItemList items={items} />
        </>
    )
}

export default Home