import { useEffect, useState } from "react"
import { collection, getDocs, getFirestore } from "firebase/firestore"
import './InitContainer.css'
import { Link } from "react-router-dom"
import CustomSpinner from "../CustomSpinner/CustomSpinner"
import ProdDestacados from "../ProdDestacados/ProdDestacados"
const InitContainer = () => {
    const [productosDest, setProductosDest] = useState([])
    const [loading, setIsLoading] = useState(true)
    useEffect(() => {
        const dbFirestore = getFirestore()
        const queryCollection = collection(dbFirestore, 'productos')

        getDocs(queryCollection)
            .then(res => setProductosDest(res.docs.map(productosDest => ({ id: productosDest.id, ...productosDest.data() }))))
            .catch(error => console.log(error))
            .finally(() => setIsLoading(false)) //ver esto


    }, [])
    return (
        <section>

            {loading ? <CustomSpinner /> :
                <div>
                    <section className="cont">
                        <img src="https://helpsnowboards.com/wp-content/uploads/2023/01/01122020101549F3240007P88__DSC0086-copia-scaled.jpeg" alt="" className="img-fluid" />
                        <Link to={'/productos'}>
                            <button className="button">Comprar</button>
                        </Link>
                    </section>
                    <section className="text-center">

                        <h2 className="mt-3">Productos Destacados</h2>
                    </section>
                    <ProdDestacados productosDest={productosDest} />
                </div>
            }
        </section>

    )
}

export default InitContainer
