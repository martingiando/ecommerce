import Item from '../Item/Item'
import './ItemList.scss'
import CardDeck from 'react-bootstrap/CardDeck'


const ItemList = ({items}) => {

    return(
        
        <div className={'itemListContainer'}>
            <CardDeck>
            {
                items.map((item, index) => {
                    return <Item item={item} key={index} />
                })
            }
            </CardDeck>
        </div>
    );
}

export default ItemList;