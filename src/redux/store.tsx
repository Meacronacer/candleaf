
import { persistStore,persistReducer,FLUSH,REHYDRATE,PAUSE,PERSIST,PURGE,REGISTER, } from 'redux-persist'
import { configureStore, combineReducers} from '@reduxjs/toolkit'
import { productsApi } from './api/productsSlice'
import cartSlice from './slices/cartSlice'
import shippingSlice from './slices/shippingSlice'
import storage from 'redux-persist/lib/storage'


const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['cart', 'shipping'],
}

const reducers = combineReducers({
    cart: cartSlice,
    shipping: shippingSlice,
    [productsApi.reducerPath]: productsApi.reducer
})

const persistedReducer = persistReducer(persistConfig, reducers)

export const store = configureStore({
  reducer: persistedReducer,
  middleware:(getDefaultMiddleware) =>
  getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }).concat(productsApi.middleware)
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const persistor = persistStore(store);