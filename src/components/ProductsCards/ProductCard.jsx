import { Link } from "react-router-dom";
import "./ProductCard.css"

function ProductCard({product}) {
    return <div className="ProductCard">
        <img src="https://samsungarsmb.vtexassets.com/arquivos/ids/162600-800-auto?v=638059849710870000&width=800&height=auto&aspect=true" alt="" />
        <h3>{product.title}</h3>
        <p>{product.category}</p>
        <span>${product.price}</span>
        <div className="ProductCardHover">
            <div className="ProductCardHoverBack"></div>
            <Link to={"/product/${product.id}"}>View Details</Link>
        </div>
        
      </div>
}


export default ProductCard;