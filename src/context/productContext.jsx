import { createContext, useContext, useEffect, useState } from "react";
import { collection, doc, getDoc, getDocs, Query, query, queryEqual, where } from "firebase/firestore";
import { db } from "../firebase/config";

export const ProductsContext = createContext() 

export const useProductsContext = () => useContext(ProductsContext)

function ProductsProvider({ children }) {
    const [products, setProducts] = useState([]);
    const [count, setCount] = useState(0)
    const [users, setUsers] = useState([{username: 'lisandro'}])

      useEffect(()=> {
        fetch('http://localhost:3000/api/users')
          .then(response => response.json())
          .then(data => setUsers(data.title))
      }, [])
    
      const getProductById = async (id) => {
        const docReference = doc(db, "products", id);
        const docSnap = await getDoc(docReference);
    
        if (docSnap.exists()) {
          return {
            id,
            ...docSnap.data(),
          };
        } else {
          return null;
        }
      };

    return <ProductsContext.Provider value={{ products, getProducts, getProductById }}>{children}</ProductsContext.Provider>

}

export default ProductsProvider;
