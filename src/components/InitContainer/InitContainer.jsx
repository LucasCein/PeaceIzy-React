import { useEffect, useState } from "react"
import ProdDestacados from "../../ProdDestacados/ProdDestacados"
import { collection, getDocs, getFirestore } from "firebase/firestore"
import './InitContainer.css'
import { Link } from "react-router-dom"
import CustomSpinner from "../CustomSpinner/CustomSpinner"
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
                        <img src="https://www.dopesnowargentina.com/images/hoverimg/202301051450491835.jpg" alt="" className="img-fluid" />
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
