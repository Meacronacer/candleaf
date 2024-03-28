import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "../../components/products/types/product";

interface CartItem extends Product {
    quantity: number
    price: number
}

interface Cart {
    cartItems: Array<CartItem>
    totalPrice: number
    count: number
}

const initialState: Cart = {
    'cartItems': [],
    'totalPrice': 0.00,
    'count': 0
}


const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItemToCart: (state, action: PayloadAction<CartItem>) => {
            let findEquelProductInCart = false

            state.cartItems.forEach(item => {
                if (item.id === action.payload.id) {
                    item.quantity = item.quantity + action.payload.quantity
                    state.totalPrice += action.payload.quantity * action.payload.price
                    findEquelProductInCart = true
                    return
                }
            })

            if (!findEquelProductInCart) {
                state.cartItems.push(action.payload)
                state.totalPrice += action.payload.quantity * action.payload.price
                state.count += 1
            }
        },
        removeItemFromCart: (state, action: PayloadAction<{index: number, totalPriceOfItem: string}>) => {
            state.cartItems = state.cartItems.filter((_, index) => index !== action.payload.index)
            state.count -= 1
            state.totalPrice -= Number(action.payload.totalPriceOfItem)
        },
        quantityIncrement: (state, action: PayloadAction<number>) => {
            state.cartItems[action.payload].quantity = state.cartItems[action.payload].quantity + 1
            state.totalPrice += state.cartItems[action.payload].price
        },
        quantityDecrement: (state, action: PayloadAction<number>) => {
                state.cartItems[action.payload].quantity -= 1
                state.totalPrice -= state.cartItems[action.payload].price
        }
    }
})


export const { addItemToCart, removeItemFromCart, quantityIncrement, quantityDecrement } = cartSlice.actions
export default cartSlice.reducer