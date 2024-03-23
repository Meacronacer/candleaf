import CartPage from '../../pages/cartPage/cartPage';
import HomePage from '../../pages/homePage/homePage';
import Layout from '../../pages/layout/layout';
import ProductDetailPage from '../../pages/productDetailPage/productDetailPage';
import Authentication from '../cart/authentication/authentication';
import Payment from '../cart/payment/payment';
import Shipping from '../cart/shipping/shipping';
import ThanksForOrder from '../cart/thanksForOrder/thanksForOrder';
import root from './app.module.scss'

import { Routes, Route, Navigate } from "react-router-dom";

const App = () => {
    return <div className={root.app}>
        <Routes>
            <Route path='/' element={<HomePage/>} />
            <Route path='/product' element={<ProductDetailPage/>} />
            <Route path='/cart' element={<CartPage/>} />
            <Route path='/auth' element={<Layout> <Authentication /> </Layout>} />
            <Route path='/shipping' element={<Layout> <Shipping/> </Layout>} />
            <Route path='/payment' element={<Layout> <Payment/> </Layout>} />
            <Route path='/thanks' element={<Layout> <ThanksForOrder/> </Layout>} />
        </Routes>
    </div>
}

export default App