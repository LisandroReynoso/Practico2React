import { Await, useParams } from "react-router-dom";
import "./ProductDetailContainer.css"
import { useEffect, useState } from "react";
import { useProductsContext } from "../../context/productContext";
import ProductDetail from "../ProductDetail/ProductDetail";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

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

    return (
        <div className='ProductDetailContainer'>
            <div className="ProductDetailNavigation">
                <p>
                    Home
                    <ArrowForwardIosIcon/>
                </p>
                <p>
                    Shop
                    <ArrowForwardIosIcon/>
                </p>
                
                <p className="ProductDetailNavigationProducts">{product && product.title}</p>
            </div>

      {!product ? (
        <div class='loader'>
          <div class='circle'></div>
          <div class='circle'></div>
          <div class='circle'></div>
          <div class='circle'></div>
        </div>
      ) : (
        <ProductDetail product={product} />
      )}
    </div>
  );
}

export default ProductDetailContainer;



