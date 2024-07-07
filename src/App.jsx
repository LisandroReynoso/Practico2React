
import { BrowserRouter, Route, Routes } from "react-router-dom"
import "./App.css"
import Header from "./components/Header/Header"
import ProductsListContainer from "./components/ProductsListContainer/ProductsListContainer"
import Cart from "./components/Cart/Cart"
import ProductsProvider from "./context/productContext"


function App() {

  
  return(

    <BrowserRouter>
     <ProductsProvider>
       <Header />
        <Routes>
         <Route path="/home" element={<ProductsListContainer/>} />
         <Route path="/shop" element={<ProductsListContainer/>} />
         <Route path="/cart" element={<Cart />} />
         <Route path="/" element={<ProductsListContainer/>} />
            

        </Routes>
     </ProductsProvider>
      
     
      
    </BrowserRouter>
  )
}

export default App
