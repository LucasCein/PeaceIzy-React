import { useContext, useState } from "react";
import { cartContext } from "../ContextCart/ContextCart";
import { addDoc, collection, getFirestore } from 'firebase/firestore'
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";
import CartList from "../CartList/CartList";
import CheckoutForm from "../CheckoutForm/CheckoutForm";
const CheckoutContainer = () => {
    const { cartList, handleRemoveItem, totalPrice, emptyCart } = useContext(cartContext)
    const [error, setError] = useState(null);
    const navigate = useNavigate()
    const data={
        name: '',
        lastname: '',
        phone: '',
        email: '',
        remail: '',
        address: ''
    }
    const [dataForm, setDataForm] = useState(data)

    const handleFormSubmit = (e) => {
        e.preventDefault();
        if (isValidEmail(dataForm.email) && dataForm.email === dataForm.remail && dataForm.name !== '' && dataForm.lastname !== '' && dataForm.email !== '' && dataForm.address !== '' && dataForm.phone !== '') {
            const order = {}
            order.buyer = dataForm
            order.items = cartList.map(({ Title, id, price, quantity }) => ({ id, Title, price, quantity }))
            order.total = totalPrice

            const dbFirestore = getFirestore()
            const ordersCollection = collection(dbFirestore, 'orders')

            addDoc(ordersCollection, order)
            .then(resp => navigate('/orderConfirmation',{state:{id:resp.id}}))
            .catch(err=>console.log(err))
            .finally(()=>{

                setError(null)
                setDataForm(data)
                
                setTimeout(()=>{
                    emptyCart()
                    
                ,4000})
                
            })
            
            
            
        }
        
        else {
            setError('El email no es valido, hay algun campo vacio o los emails no coinciden')
        }
    };
    function isValidEmail(email) {
        return /\S+@\S+\.\S+/.test(email);
    }
    const handleOnChange = (evt) => {
        setDataForm({
            ...dataForm,
            [evt.target.name]: evt.target.value
        })
    }


    return (
        <div style={{ display: 'flex' }}>
            <CheckoutForm dataForm={dataForm} handleFormSubmit={handleFormSubmit} handleOnChange={handleOnChange} error={error} />
            <div style={{ width: '50%', backgroundColor: 'lightgray', padding: '10px' }}>
                <h2>Resumen de la compra</h2>
                <CartList cartList={cartList} handleRemoveItem={handleRemoveItem} totalPrice={totalPrice} emptyCart={emptyCart} />
            </div>

        </div>
    );


}

export default CheckoutContainer
