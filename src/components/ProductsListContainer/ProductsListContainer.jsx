import { useEffect } from "react";
import { useProductsContext } from "../../context/productContext"
import "./ProductsListContainer.css"
import ProductsList from "../ProductsList/ProductsList";

function ProductsListContainer() {

  const { products, getProducts } = useProductsContext();
  useEffect(() => {
    getProducts();
  }, []);

  

  return (
    <div className='ProductsListContainer'>
      <h2>Productos</h2>
      {products.length == 0 ? (
        <div id="page">
         <div id="container">
            <div id="ring"></div>
            <div id="ring"></div>
            <div id="ring"></div>
            <div id="ring"></div>
            <div id="h3">loading</div>
         </div>
       </div>
      ) : (
        <ProductsList products={products} />
      )}
    </div>
  );
}

export default ProductsListContainer