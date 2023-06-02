import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Item from '../Item/Item'


const ProdDestacados = ({ productosDest }) => {
    
    return (
        <div>
            <Row xs={1} md={3} className="ms-2 me-2 mt-2">

                {
                    productosDest.slice(0, 3).map(({ id, price, picture, category, Title }) =>
                        <Col key={id} className="mb-2">
                            <Item key={id} id={id} price={price} picture={picture} category={category} Title={Title} />
                        </Col>
                    )

                }
            </Row>
        </div>
    )
}

export default ProdDestacados
