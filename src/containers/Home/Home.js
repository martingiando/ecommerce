import Greeting from '../../components/greeting/greeting'
import ItemList from '../../components/ItemList/ItemList'
import { getProducts } from '../../api/products'
import { useState, useEffect } from 'react'
import Spinner from '../../components/Spinner/Spinner'

const Home = () => {

    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setLoading(true)

        setTimeout(() => {
            getProducts().then(
                (response) => {
                    setItems(response)
                    setLoading(false)
                }
            )
        }, 3000);

    }, [])


    return (
        <>
            <Greeting greeting={'Bienvenidos a Game Masters!'} />
            {
                loading ? (<Spinner />) : (
                    <ItemList items={items} />)
            }
        </>
    )
}

export default Home