import { useEffect } from "react";
import { useProductsContext } from "../../context/productContext"
import "./ProductsListContainer.css"

function ProductsListContainer() {

  const { products, getProducts } = useProductsContext();
  useEffect(() => {
    getProducts();
  }, []);

  console.log(products);

  return <h1>ProductsListContainer</h1>
}

export default ProductsListContainer