import { createContext, useContext, useState } from "react"
import { ToastContainer, toast, useToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const cartContext = createContext([])
// export const useCartContext = () => {
//     useContext(cartContext)
// }
export const ProviderCartContext = ({ children }) => {


    const [cartList, setCartList] = useState([])
    const showToastMessage = () => {
        toast.success('Se ha agregado al carrito', {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
    };
    const añadiralCart = (product) => {
        
        let findProduct = cartList.find((prod) => prod.id == product.id)

        if (findProduct !== undefined) {
            let newCartList = cartList.map(prod => {
                if (prod.id === product.id) {
                    return { ...prod, cantidad: prod.cantidad+product.cantidad }
                }
                return prod
                
            })
            setCartList(newCartList)
        }
        else {
            setCartList([...cartList, product])
        }
        showToastMessage()

    }

    const handleRemoveItem = (itemId) => {
        const updatedCartItems = cartList.filter((item) => item.id !== itemId);
        setCartList(updatedCartItems);
    };

    const totalPrice = cartList.reduce((total, item) => {
        return total + (parseInt(item.price) * item.cantidad);
    }, 0);

    const cartItemsCount = cartList.reduce((acc, item) => acc + item.cantidad, 0);

    const vaciarCart = () => {
        setCartList([])
    }
    return (
        <cartContext.Provider value={{ cartList, añadiralCart, vaciarCart, handleRemoveItem, totalPrice, cartItemsCount }}>
            {children}
            <ToastContainer />
        </cartContext.Provider>
    )
}