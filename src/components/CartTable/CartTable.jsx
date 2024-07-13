import { useCartContext } from "../../context/cartContext"
import "./CartTable.css"
import DeleteIcon from '@mui/icons-material/Delete';

function CartTable () {
    const { cart, changedQuantityToProduct, deleteProductFormCart } = useCartContext()

    return <table className="CartTable">
        <thead>
            <tr>
                <td></td>
                <td>Producto</td>
                <td>Precio</td>
                <td>Cantidad</td>
                <td>Subtotal</td>
                <td></td>
            </tr>
        </thead>

        <tbody>
            {cart.map((item) =>  
                <tr className="CartTableItem">
                    <td>
                        <img className="CartTableImg" src="https://samsungarsmb.vtexassets.com/arquivos/ids/162600-800-auto?v=638059849710870000&width=800&height=auto&aspect=true" alt={item.product.title} />

                    </td>
                    <td>
                        {item.product.title}
                    </td>
                    <td>
                        ${item.product.price}
                    </td>
                    <td>
                        <div className="ProductDetailCounterContainer">
                          <button onClick={() => item.quantity > 1 && changedQuantityToProduct(item.product.id, item.quantity - 1)}>-</button>
                             <span>{item.quantity}</span>
                          <button onClick={() => changedQuantityToProduct(item.product.id, item.quantity + 1)}>+</button>
                        </div>
                 </td>
                    <td>
                        {item.quantity * item.product.price}
                    </td>
                    <td>
                        <button onClick={() => deleteProductFormCart(item.product.id)}>
                            <DeleteIcon/>
                        </button>
                    </td>
                    <td>
                        <button className="FinalizarTable">Finalizar Compra</button>
                    </td>
                </tr>
                     
            )}
        </tbody>
    </table>
}

export default CartTable