import { useContext, useState } from "react";
import { cartContext } from "../ContextCart/ContextCart";
import { addDoc, collection, getDocs, getFirestore, query, where } from 'firebase/firestore'
const Checkout = () => {
    const { cartList, handleRemoveItem, totalPrice } = useContext(cartContext)
    const [error, setError] = useState(null);
    const [dataForm, setDataForm] = useState({
        name: '',
        lastname: '',
        phone: '',
        email: '',
        address: ''
    })


    const handleFormSubmit = (e) => {
        e.preventDefault();
        if (isValidEmail(dataForm.email) && dataForm.name !== '' && dataForm.lastname !== '' && dataForm.email !== '' && dataForm.address !== '' && dataForm.phone !== '') {
            const order = {}
            order.buyer = dataForm
            order.items = cartList.map(({ Title, id, price, cantidad }) => ({ id, Title, price, cantidad }))
            order.total = totalPrice
            
            const dbFirestore = getFirestore()
            const ordersCollection = collection(dbFirestore, 'orders')

            addDoc(ordersCollection, order)
            setError(null)
        }
        else{
            setError('El email no es valido o hay algun campo vacio')
        }
    };
    function isValidEmail(email) {
        return /\S+@\S+\.\S+/.test(email);
    }
    const handleOnChange = (evt) => {
        console.log(evt.target.name)
        console.log(evt.target.value)
        setDataForm({
            ...dataForm,
            [evt.target.name]: evt.target.value
        })
    }


    return (
        <div style={{ display: 'flex' }}>
            <div style={{ width: '50%' }}>
                <h2>Información del cliente</h2>

                <form onSubmit={handleFormSubmit} className="d-flex flex-column ms-4">
                    <label htmlFor="nombre">Nombre:</label>

                    <input
                        className="w-75"
                        type="text"
                        name="name"
                        value={dataForm.name}
                        onChange={handleOnChange}
                        required
                    />

                    <label htmlFor="apellido">Apellido:</label>
                    <input
                        className="w-75"
                        type="text"
                        name="lastname"
                        value={dataForm.lastname}
                        onChange={handleOnChange}
                        required
                    />

                    <label htmlFor="email">Email:</label>
                    <input
                        className="w-75"
                        type="email"
                        name="email"
                        value={dataForm.email}
                        onChange={handleOnChange}
                        required
                    />
                    

                    <label htmlFor="direccion">Dirección:</label>
                    <input
                        className="w-75"
                        type="text"
                        name="address"
                        value={dataForm.address}
                        onChange={handleOnChange}
                        required
                    />

                    <label htmlFor="telefono">Teléfono:</label>
                    <input
                        className="w-75"
                        type="tel"
                        name="phone"
                        value={dataForm.phone}
                        onChange={handleOnChange}
                        required
                    />
                    {error && <p style={{ color: 'red' }}>{error}</p>}
                    <input className="w-25 mt-5 btn btn-primary mx-auto" type="submit" value="Comprar" />
                </form>


            </div>

            <div style={{ width: '50%', backgroundColor: 'lightgray', padding: '10px' }}>
                <h2>Resumen de la compra</h2>
                <ul>
                    {cartList.map((item) => (
                        <div key={item.id} className="d-flex align-items-center justify-content-between mb-3">
                            <img src={item.picture} alt={item.Title} width="100" height="100" className="mr-3" />
                            <div>
                                <h5>{item.Title}</h5>
                                <p>Precio: ${item.price}</p>
                                <p>Cantidad: {item.cantidad}</p>
                            </div>
                            <button className="btn btn-danger" onClick={() => handleRemoveItem(item.id)}>Eliminar</button>
                        </div>
                    ))}
                    <hr />
                    <div className="d-flex align-items-center justify-content-between">
                        <h4>Total: ${totalPrice}</h4>
                    </div>
                </ul>
            </div>
        </div>
    );


}

export default Checkout
