import { useEffect, useState } from "react"
import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom"
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore'
import CustomSpinner from "../CustomSpinner/CustomSpinner"
export const ItemListContainer = () => {
  const [productos, setProductos] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const { cpd } = useParams()


  useEffect(() => {
    const dbFirestore = getFirestore()
    const queryCollection = collection(dbFirestore, 'productos')

    const queryCollectionFiltered = !cpd ? queryCollection : query(
      queryCollection,
      where('category', '==', cpd),
    )

    getDocs(queryCollectionFiltered)
      .then(res => setProductos(res.docs.map(producto => ({ id: producto.id, ...producto.data() }))))
      .catch(error => console.log(error))
      .finally(() => setIsLoading(false))


  }, [cpd])

  return (
    <section >
      {isLoading ?
        <CustomSpinner />
        : <>
          {!cpd ? <h2 className="ms-4">Productos</h2> : <h2 className="ms-4">{cpd.charAt(0).toUpperCase() + cpd.slice(1)}</h2>}
          <ItemList productos={productos} />
        </>
      }

    </section>


  )

}

