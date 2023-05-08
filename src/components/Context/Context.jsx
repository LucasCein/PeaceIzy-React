import { createContext, useContext, useState } from "react"

export const cartContext = createContext([])
// export const useCartContext = () => {
//     useContext(cartContext)
// }
export const ProviderCartContext = ({ children }) => {


    const [cartList, setCartList] = useState([])
    const [precioTotal, setPrecioTotal] = useState([])
    const añadiralCart = (product) => {

        setCartList([...cartList, product])

    }
    const handleRemoveItem = (itemId) => {
        const updatedCartItems = cartList.filter((item) => item.id !== itemId);
        setCartList(updatedCartItems);
    };

    const totalPrice = cartList.reduce((total, item) => {
        return total + (parseInt(item.price)*item.cantidad);
    }, 0);

    const cartItemsCount = cartList.reduce((acc, item) => acc + item.cantidad, 0);

    const vaciarCart = () => {
        setCartList([])
    }
    return (
        <cartContext.Provider value={{ cartList, añadiralCart, vaciarCart, handleRemoveItem, totalPrice, cartItemsCount }}>
            {children}
        </cartContext.Provider>
    )
}