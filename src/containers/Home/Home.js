import Greeting from '../../components/greeting/greeting'
import ItemList from '../../components/ItemList/ItemList'
// import { getProducts } from '../../api/products'
import { useState, useEffect } from 'react'
import Spinner from '../../components/Spinner/Spinner'
import { getProducts } from '../../api/products'

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
                })
        }, 3000);

    }, [])


    return (
        <>
            <Greeting greeting={'Welcome to PepperHot Store!'} />
            <img src={'https://images.wallpaperscraft.com/image/red_chili_pepper_hot_pepper_hot_close-up_82125_2560x1440.jpg'} height={'800px'} width={'100%'} alt={'PepperHot Wallpaper'}/>
            {
                loading ? (<Spinner />) : (<ItemList items={items} />)
            }
        </>
    )
}

export default Home