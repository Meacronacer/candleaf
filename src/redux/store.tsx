
import { configureStore } from '@reduxjs/toolkit'
import { productsApi } from './api/productsSlice'
import cartSlice from './slices/cartSlice'

export const store = configureStore({
  reducer: {
    cart: cartSlice,
    [productsApi.reducerPath]: productsApi.reducer
  },
  middleware:(getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productsApi.middleware)
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch