import { auth, firestore } from "../../firebase/config";
import { createContext, useContext, useState, useEffect } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged } from "firebase/auth";
import { doc, setDoc, getDoc } from "firebase/firestore";

export const AuthContext = createContext();

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        console.log("error: no creaste el contexto");
    }
    return context;
};

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [err, setErr] = useState(null);

    const register = async (email, password, address) => {
        try {
            const response = await createUserWithEmailAndPassword(auth, email, password);
            const user = response.user;
            await setDoc(doc(firestore, "users", user.uid), {
                email: user.email,
                address: address
            });
            setUser({ uid: user.uid, email: user.email, address: address });
            console.log("User registered and additional info saved in Firestore");
        } catch (error) {
            setErr("Error al registrar. Inténtalo de nuevo.");
            console.log(error);
        }
    };

    const login = async (email, password) => {
        try {
            const response = await signInWithEmailAndPassword(auth, email, password);
            const userDoc = await getDoc(doc(firestore, "users", response.user.uid));
            if (userDoc.exists()) {
                setUser({ uid: response.user.uid, ...userDoc.data() });
                setErr('logged');
            } else {
                setErr('Error al obtener los datos del usuario.');
            }
        } catch (error) {
            setErr('Error al iniciar sesión. Verifica tus credenciales.');
        }
    };

    const loginWithGoogle = async () => {
        const responseGoogle = new GoogleAuthProvider();
        const response = await signInWithPopup(auth, responseGoogle);
        const userDoc = await getDoc(doc(firestore, "users", response.user.uid));
        if (userDoc.exists()) {
            setUser({ uid: response.user.uid, ...userDoc.data() });
        } else {
            setErr('Error al obtener los datos del usuario.');
        }
    };

    const logOut = async () => {
        await signOut(auth);
        setUser(null);
    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async (user) => {
            if (user) {
                const userDoc = await getDoc(doc(firestore, "users", user.uid));
                if (userDoc.exists()) {
                    setUser({ uid: user.uid, ...userDoc.data() });
                } else {
                    setErr('Error al obtener los datos del usuario.');
                }
            } else {
                setUser(null);
            }
        });
        return () => unsubscribe();
    }, []);

    return (
        <AuthContext.Provider value={{
            register,
            login,
            loginWithGoogle,
            logOut,
            user,
            err
        }}>
            {children}
        </AuthContext.Provider>
    );
}
