import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

const Item = ({ data, index }) => {
    return (
        <>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={data.img} />
                <Card.Body>
                <Card.Title>{data.modelo}</Card.Title>
                    <Card.Text>
                        <h5>{data.producto}</h5>
                        <h5>${data.precio}</h5>
                        <h5>Stock disponible: {data.stock}</h5>
                    </Card.Text>
                    <Button variant="primary">Ver producto</Button>
                </Card.Body>
            </Card>
        </>
    )
}

export default Item;