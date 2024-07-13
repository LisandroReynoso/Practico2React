import { useCartContext } from "../../context/cartContext"
import CartTable from "../CartTable/CartTable"
import "./Cart.css"

function Cart() {
    const { cart } = useCartContext() 
    return <div>
        <CartTable />
    </div> 
}
export default Cart