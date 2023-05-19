import { Link } from "react-router-dom"

const Item = ({ id, price, picture, category, Title }) => {
    return (
        <div key={id} className="card h-100">
            <img src={picture} className="card-img-top img-thumbnail" alt="imagen-card" />
            <div className="card-body">
                <h6>{Title}</h6>
                <label>Precio: {price}</label>
                <br />
                <label>Categoria: {category}</label>


            </div>
            <div className="card-footer text-center">
                <Link to={`/detail/${id}`}>
                    <button className="btn btn-outline-dark ">Detalle</button>
                </Link>
            </div>
        </div>

    )
}

export default Item