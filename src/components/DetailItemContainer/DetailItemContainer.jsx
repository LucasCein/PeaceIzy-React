import { useParams } from "react-router-dom"
import DetailItem from "../DetailItem/DetailItem"
import { useEffect, useState } from "react"
import { mfetch } from "../../utils/mfetch"

const DetailItemContainer = () => {
    const {idpd} = useParams()
    const [filterProd,setFilterProd] = useState()
    const [isLoading, setIsLoading] = useState(true)
    useEffect(() => {

        mfetch()
            .then(rdo => {
                setFilterProd(rdo.find(productos => productos.id === idpd))
            })
            .catch(error => console.log(error))
            .finally(() => setIsLoading(false))
    }, [idpd])
  return (
    <div>
        {isLoading ?
        <h2>Cargando...</h2>
        :
        <DetailItem producto={filterProd} />
      }
    </div>
  )
}

export default DetailItemContainer