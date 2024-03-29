import CartPage from '../pages/cartPage/cartPage';
import CheckOutPage from '../pages/checkoutPage/checkoutPage';
import HomePage from '../pages/homePage/homePage';
import Layout from '../pages/layout/layout';
import PaymentPage from '../pages/paymentPage/paymentPage';
import ProductDetailPage from '../pages/productDetailPage/productDetailPage';
import ShippingPage from '../pages/shippingPage/shippingPage';
import ThanksForOrder from '../components/cart/thanksForOrder/thanksForOrder';
import root from './app.module.scss'

import { Routes, Route } from "react-router-dom";

const App = () => {
    return <div className={root.app}>
        <Routes>
            <Route path='/' element={<HomePage/>} />
            <Route path='/product/:productId' element={<ProductDetailPage/>} />
            <Route path='/cart' element={<CartPage/>} />
            <Route path='/checkout' element={<CheckOutPage/> } />
            <Route path='/shipping' element={<ShippingPage/> } />
            <Route path='/payment' element={<PaymentPage/> } />
            <Route path='/thanks' element={<Layout> <ThanksForOrder/> </Layout>} />
        </Routes>
    </div>
}

export default App