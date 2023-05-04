import { useEffect, useState } from "react"
import { mfetch } from "../../utils/mfetch"
import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom"

export const ItemListContainer = () => {
  const [productos, setProductos] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const {cpd} = useParams()
 

  useEffect(() => {
    if(!cpd){

      mfetch()
        .then(rdo => {
          setProductos(rdo)
        })
        .catch(error => console.log(error))
        .finally(() => setIsLoading(false))
    }
    else{
      mfetch()
        .then(rdo => {
          setProductos(rdo.filter(productos => productos.category === cpd))
        })
        .catch(error => console.log(error))
        .finally(() => setIsLoading(false))
    } 
  }, [cpd])

  return (
    <section>
      {isLoading ?
        <h2>Cargando...</h2>
        :
        <ItemList productos={productos} />
      }
 
    </section>


  )

}

