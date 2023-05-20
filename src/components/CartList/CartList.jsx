
const CartList = ({totalPrice,handleRemoveItem,cartList}) => {
    return (
        
            <ul>
                {cartList.map((item) => (
                    <div key={item.id} className="d-flex align-items-center justify-content-between mb-3">
                        <img src={item.picture} alt={item.Title} width="100" height="100" className="mr-3" />
                        <div>
                            <h5>{item.Title}</h5>
                            <p>Precio: ${item.price}</p>
                            <p>Cantidad: {item.quantity}</p>
                        </div>
                        <button className="btn btn-danger" onClick={() => handleRemoveItem(item.id)}>Eliminar</button>
                    </div>
                ))}
                <hr />
                <div className="d-flex align-items-center justify-content-between">
                    <h4>Total: ${totalPrice}</h4>
                </div>
            </ul>
        
    )
}

export default CartList