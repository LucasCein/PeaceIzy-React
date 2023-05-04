import { Button, Card } from "react-bootstrap"
import { Link } from "react-router-dom"
import './detailItem.css'
const DetailItem = ({ producto: { id, price, picture, category, Title } }) => {
    return (
        <div>
            {/* <Card style={{ width: '18rem' }} classNameName="mx-auto mt-5">
                <Card.Img variant="top" src={picture} />
                <Card.Body>
                    <Card.Title>{Title}</Card.Title>
                    <Card.Text>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </Card.Text>
                    <Card.Footer>
                        <label>Precio: {price}</label>
                        <br />
                        <label>Categoria: {category}</label>
                    </Card.Footer>
                    <Link to="/">
                        <Button classNameName="mt-3 btn btn-dark ">Volver</Button>
                    </Link>
                </Card.Body>
            </Card> */}



            <div className="container">
                <div className="cardDetail">
                    <div className="container-fliud">
                        <div className="wrapper row">
                            <div className="preview col-md-6">

                                <div className="w-75">
                                    <img src={picture} className="w-auto" />
                                    
                                </div>

                            </div>
                            <div className="details col-md-6">
                                <h3 className="product-title">{Title}</h3>
                                <h6 className="font-weight-bold">{category}</h6>
                
                                <p className="product-description mt-2">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis esse ratione officia animi fuga dolorem sequi.</p>
                                <h4 className="price">Precio: <span>${price}</span></h4>
                                <p className="vote"><strong>91%</strong> de los compradores disfrutaron este producto! <strong>(87 votos)</strong></p>
                                <h5 className="sizes mb-4">sizes:
                                    <span className="size" data-toggle="tooltip" title="small">s</span>
                                    <span className="size" data-toggle="tooltip" title="medium">m</span>
                                    <span className="size" data-toggle="tooltip" title="large">l</span>
                                    <span className="size" data-toggle="tooltip" title="xtra large">xl</span>
                                </h5>
                                
                                <div className="action mt-5">
                                    <Link to='/cart'>
                                        <button className="add-to-cart btn btn-default" type="button">Añadir al Carrito</button>
                                    </Link >
                                    <Link to='/'>
                                        <button className="like btn btn-default ms-5" type="button">Volver</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DetailItem