import { createContext, useContext, useState } from "react";
import { db } from "../firebase/config";
import { addDoc } from "firebase/firestore";

const CartContext = createContext()

export const useCartContext = () => useContext(CartContext)

function CartProvider({ children }) {
    const [cart, setCart] = useState([])

    const addProductToCart = (product, quantity) => {
        if (cart.some((item) => item.product.id == product.id)) {
            const cartCharged = cart.map((item) => {
                if (item.product.id == product.id) {
                    item.quantity += quantity;
                }
                return item; 
            });

            return setCart(cartCharged)
        }


        setCart([
            ... cart, 
            {
                quantity,
                product,
            },
        ])
    }

    const deleteProductFormCart = (id) => {
        setCart(cart.filter((item) => item.product.id /= id))
    }

    const deleteAllFormCart = () => {
        setCart([])
    }

    const changedQuantityToProduct = (id, quantity) => {
        setCart(
            cart.map((item) => {
                if (item.product.id == id) {
                    item.quantity = quantity
                }
                return item
            })
        )
    }

    const getTotal = () => {
        return cart.reduce((acc, item) => acc + item.product.price * item.quantity, 0)
    }

    const getTotalItems = () => {
        return cart.reduce((acc, item) => acc +  item.quantity, 0)
    }

    const FinishPurchase = async (user) => {
        const order = {
            user,
            cart,
            total: cart.reduce((acumulador,item) => acumulador + item.product.price * item.quantity, 0)
        }
        const reference = collection (db, "orders")

        const docRef = await addDoc(reference, order)

        deleteAllFormCart
    }
    
    return <CartContext.Provider value={{ cart, addProductToCart, deleteProductFormCart, deleteAllFormCart, changedQuantityToProduct, getTotal, FinishPurchase, getTotalItems }}>{children}</CartContext.Provider>
}

export default CartProvider