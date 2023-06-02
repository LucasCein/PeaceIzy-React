import { auth } from "../../firebase/config"
import { createContext, useContext, useState } from "react"
import {  createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup,signOut } from "firebase/auth"


export const authe = createContext()
export const useAuth = () => {
    const context = useContext(authe)
    if (!context){
        console.log("error: no creaste el contexto")
    }
    return context
}

export function AuthProvider({children}){
    const register= async (email,password)=>{
        const response= await createUserWithEmailAndPassword(auth,email,password)
        console.log(response)
    }
    const [err,setErr]=useState(null)
    const login= async (email,password)=>{
        try{
            await signInWithEmailAndPassword(auth,email,password)
            setErr('logged')
        }catch (error) {
            setErr('Error al iniciar sesión. Verifica tus credenciales.')
        }
    }
    const loginWithGoogle= async ()=>{
        const responseGoogle= new GoogleAuthProvider()
        return await signInWithPopup(auth,responseGoogle)
    }
    const logOut= async ()=>{
        await signOut(auth)
    }



    return(
        <authe.Provider value={{
            register,
            login,
            loginWithGoogle,
            logOut,
            err
        }}>
            {children}
        </authe.Provider>
    )
}