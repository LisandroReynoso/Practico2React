import { Await, useParams } from "react-router-dom";
import "./ProductDetailContainer.css"
import { useEffect, useState } from "react";
import { useProductsContext } from "../../context/productContext";


function ProductDetailContainer() {
    const { getProductById } = useProductsContext();
    const [product, setProduct] = useState(null);
    const { productId } = useParams();
  
    const getById = async () => {
      const prod = await getProductById(productId);
      setProduct(prod);
    };
  
    useEffect(() => {
      getById();
    }, []);


    return <div>
        {!product ? <section class="dots-container">
  <div class="dot"></div>
  <div class="dot"></div>
  <div class="dot"></div>
  <div class="dot"></div>
  <div class="dot"></div>
</section>
: <h1>{product.title}</h1>}
    </div>


}

export default ProductDetailContainer;