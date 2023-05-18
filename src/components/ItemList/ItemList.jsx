import { Col, Container, Row } from "react-bootstrap"
import Item from "../Item/Item"

const ItemList = ({ productos }) => {
    
    return (
        <div>
            <Row xs={1} md={4} className="ms-2 me-2 mt-2">
            {
                productos.map(({id, price, picture, category, Title}) => 
                    <Col key={id} className="mb-2">
                        <Item key={id} id={id} price={price} picture={picture} category={category} Title={Title}   />
                    </Col>
                )
                
            }
            </Row>

        </div>
    )
}

export default ItemList