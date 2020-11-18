import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import './item.scss'

const Item = ({ item, index }) => {
    return (
        <>
            <Card className={'itemContainer'} style={{ width: '18rem' }}>
                <Card.Img variant="top" src={item.img} />
                <Card.Body>
                <Card.Title>{item.modelo}</Card.Title>
                    <Card.Text>
                        <h5>{item.producto}</h5>
                        <h5>${item.precio}</h5>
                        <h5>Stock disponible: {item.stock}</h5>
                    </Card.Text>
                    <Button variant="primary">Ver producto</Button>
                </Card.Body>
            </Card>
        </>
    )
}

export default Item;