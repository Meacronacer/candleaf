import { createSlice, PayloadAction } from "@reduxjs/toolkit";


export interface contactInfo {
    email: string
    shipping: shippingAddress[]
}

interface shippingAddress {
    name: string
    secondName:string
    address: string
    shippingNote: string
    city: string
    postalCode: number
    province: string
    country: string
}


const initialState: contactInfo = {
    email: '',
    shipping: []
}


const shippingSlice = createSlice({
    name:'shipping',
    initialState,
    reducers: {
        changeShippingAddress: (state, action:PayloadAction<contactInfo>) => {
            state.email = action.payload.email
            state.shipping = action.payload.shipping
        }
    }
})

export default shippingSlice.reducer
export const { changeShippingAddress } = shippingSlice.actions 