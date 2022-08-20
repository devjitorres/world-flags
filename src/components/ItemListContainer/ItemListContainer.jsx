import ItemList from "../ItemList/ItemList"
import { getProducts } from "../../asyncmock"
import { useEffect, useState} from "react"

const ItemListContainer = (props) =>  {

    const [products, setProducts] = useState([])

    useEffect(()  => {
        getProducts().then(response => {
            setProducts(response)
        })
    }, [])

    return(
        <div>
            <h1>{props.greeting}</h1>
            <ItemList products={products}/>
        </div>
    )
}

export default ItemListContainer