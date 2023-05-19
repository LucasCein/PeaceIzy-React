import { useParams } from "react-router-dom"
import DetailItem from "../DetailItem/DetailItem"
import { useEffect, useState } from "react"
import { doc, getDoc, getFirestore } from "firebase/firestore"
import CustomSpinner from "../CustomSpinner/CustomSpinner"

const DetailItemContainer = () => {
  const { idpd } = useParams()
  const [filterProd, setFilterProd] = useState()
  const [isLoading, setIsLoading] = useState(true)
  useEffect(() => {

    
      const dbFirestore = getFirestore()
      const queryDoc = doc(dbFirestore, 'productos', idpd)

      getDoc(queryDoc) 
        .then(resp => setFilterProd({ id: resp.id, ...resp.data() }))
        .catch(err => console.log(err))
        .finally(() => setIsLoading(false))

   

  }, [idpd])
  return (
    <div>
      {isLoading ?
        <CustomSpinner/>
        :
        <DetailItem producto={filterProd} />
      }
    </div>
  )
}

export default DetailItemContainer