import ProductCard from "../ProductsCards/ProductCard";
import "./ProductsList.css" 

function ProductsList({products}) {
    console.log(products);
    return <div className="ProductsList">
        {products.map((product) => <ProductCard product={product}/> )}
        

    </div>
}

export default ProductsList;  