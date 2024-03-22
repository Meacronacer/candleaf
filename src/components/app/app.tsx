import CartPage from '../../pages/cartPage/cartPage';
import HomePage from '../../pages/homePage/homePage';
import ProductDetailPage from '../../pages/productDetailPage/productDetailPage';
import root from './app.module.scss'

import { Routes, Route, Navigate } from "react-router-dom";

const App = () => {
    return <div className={root.app}>
        <Routes>
            <Route path='/' element={<HomePage/>} />
            <Route path='/product' element={<ProductDetailPage/>} />
            <Route path='/cart' element={<CartPage/>} />
            <Route path='/payment' />
        </Routes>
    </div>
}

export default App