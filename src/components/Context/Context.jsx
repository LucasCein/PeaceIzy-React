import { cartContext } from "../../App"

export const ProviderCartContext=({children})=>{
    return (
        <cartContext.Provider>
            {children}
        </cartContext.Provider>
    )
}