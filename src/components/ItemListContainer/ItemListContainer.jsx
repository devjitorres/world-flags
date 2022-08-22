import ItemList from "../ItemList/ItemList"
import { getProducts } from "../../asyncmock"
import { useEffect, useState} from "react"
import Loader from "../Loader/Loader"

const ItemListContainer = (props) =>  {

    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(()  => {
        getProducts().then(response => {
            setProducts(response)
        })
        .finally(() => setLoading(false))
    }, [])

    return(
        <div>
            <h1>{props.greeting}</h1>
            {
                loading 
                    ? <Loader />
                    : <ItemList products={products}/>
            }   
        </div>
    )
}

export default ItemListContainer