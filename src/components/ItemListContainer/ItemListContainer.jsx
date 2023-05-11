import { useEffect, useState } from "react"
import { mfetch } from "../../utils/mfetch"
import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom"
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore'
export const ItemListContainer = () => {
  const [productos, setProductos] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const { cpd } = useParams()


  useEffect(() => {
    const dbFirestore = getFirestore()
    const queryCollection = collection(dbFirestore, 'productos')


    if (!cpd) {

      getDocs(queryCollection)
        .then(res => setProductos(res.docs.map(producto => ({ id: producto.id, ...producto.data() }))))
        .catch(error => console.log(error))
        .finally(() => setIsLoading(false))
    }
    else {
      const queryCollectionFiltered = query(
        queryCollection,
        where('category', '==', cpd),
        // orderBy('price', 'asc'),
        // limit(1)
      )
      getDocs(queryCollectionFiltered)
        .then(res => setProductos(res.docs.map(producto => ({ id: producto.id, ...producto.data() }))))
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

