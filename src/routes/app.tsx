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
            <Route path='candleaf/' element={<HomePage/>} />
            <Route path='candleaf/product/:productId' element={<ProductDetailPage/>} />
            <Route path='candleaf/cart' element={<CartPage/>} />
            <Route path='candleaf/details' element={<CheckOutPage/> } />
            <Route path='candleaf/shipping' element={<ShippingPage/> } />
            <Route path='candleaf/payment' element={<PaymentPage/> } />
            <Route path='candleaf/thanks' element={<Layout> <ThanksForOrder/> </Layout>} />
            <Route path='*' element={<div><h1>PAGE NOT FOUND 404</h1></div>} />
        </Routes>
    </div>
}

export default App