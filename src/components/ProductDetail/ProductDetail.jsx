import { useState } from "react"
import "./ProductDetail.css"
import { useCartContext } from "../../context/cartContext"
import { Link } from "react-router-dom"

function ProductDetail({ product }){

    const { addProductToCart } = useCartContext()
    
    const [count, setCount] = useState(1)
    const [productAdd, setProductAdd] = useState(false)

    const addCount = () => {
        setCount(count + 1)
    }

    const removeCount = () => {
        count > 1 && setCount(count - 1)
    } 

    const sendProduct = () => {
       addProductToCart(product, count)
       setProductAdd(true)
    }

    return (
        <div className="ProductDetail">
            <img className="DetailImg" src="https://samsungarsmb.vtexassets.com/arquivos/ids/162600-800-auto?v=638059849710870000&width=800&height=auto&aspect=true" alt="" />
            <div className="ProductDetailContent">

            
            <div className="ProductDetailInfo">
                 <h2>{product.title}</h2>
                 <span>
                     ${product.price}
                 </span>
                 <p>{product.description}</p>
             </div>
             <div className="ProductDetailCounter">
               {productAdd ? <Link className="goCartLink" to='/cart'>Go Cart</Link> : <>
                <div className="ProductDetailCounterContainer">
                    <button onClick={removeCount}>-</button>
                    <span>{count}</span>
                    <button onClick={addCount}>+</button>
                 </div>
                <button onClick={sendProduct}>Añadir al Carro</button>
                </>}
             </div>
            </div>
        </div>
    )
}

export default ProductDetail 

