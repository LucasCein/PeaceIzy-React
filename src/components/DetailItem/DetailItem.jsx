import { Button, Card } from "react-bootstrap"
import { Link } from "react-router-dom"
import './detailItem.css'
import ItemCount from "../ItemCount/ItemCount"
import { cartContext } from "../Context/Context"
import { useContext } from "react"
const DetailItem = ({producto}) => {

    const { añadiralCart,cartList } = useContext(cartContext)
    const clickAddToCart = (cantidad) => {
        añadiralCart({ ...producto, cantidad })
        
    }
   
    return (
        <section>
            <div className="container">
                <div className="cardDetail">
                    <div className="container-fliud">
                        <div className="wrapper row">
                            <div className="preview col-md-6">

                                <div className="w-75">
                                    <img src={producto.picture} className="w-auto" />

                                </div>

                            </div>
                            <div className="details col-md-6">
                                <h3 className="product-title">{producto.Title}</h3>
                                <h6 className="font-weight-bold">{producto.category}</h6>

                                <p className="product-description mt-2">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis esse ratione officia animi fuga dolorem sequi.</p>
                                <h4 className="price">Precio: <span>${producto.price}</span></h4>
                                <p className="vote"><strong>91%</strong> de los compradores disfrutaron este producto! <strong>(87 votos)</strong></p>
                                <h5 className="sizes mb-4">sizes:
                                    <span className="size" data-toggle="tooltip" title="small">s</span>
                                    <span className="size" data-toggle="tooltip" title="medium">m</span>
                                    <span className="size" data-toggle="tooltip" title="large">l</span>
                                    <span className="size" data-toggle="tooltip" title="xtra large">xl</span>
                                </h5>
                                <ItemCount clickAddToCart={clickAddToCart} />

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default DetailItem