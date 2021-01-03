import Card from 'react-bootstrap/Card'
import Button from '../Button/Button'
import './item.scss'



const Item = ({ item }) => {
    return (
        <div id='Item'>
            
            <Card>
                <Card.Img variant="top" src={item.img} />
                <Card.Body>
                    <Card.Title>{item.modelo}</Card.Title>
                    <Card.Text>
                        ${item.precio}
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <Button content={`Detalle`} path={`/detail/${item.id}`}/>
                </Card.Footer>
            </Card>
        </div>
    )
}

export default Item;