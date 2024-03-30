import { Link, useNavigate, Navigate } from 'react-router-dom'
import ShipTo from '../../common/shippTo/shippTo'
import ShippingMethod from '../../common/shippingMethod/shippingMethod'
import CartNavigation from '../cartNavigation/cartNavigation'
import SummaryProducts from '../summaryProducts/summaryProducts'
import root from './shipping.module.scss'
import { useAppSelector } from '../../../hooks/hooks'

const Shipping = () => {
    const navigate = useNavigate()
    const {email} = useAppSelector(state => state.shipping)

    if (!email) return <Navigate to='/' />
    

    return <section className={root.shipping}>

        <div className={root.shipping__inside}>
            <CartNavigation/>

            <ShipTo />

            <h3>Shipping method</h3>

            <ShippingMethod/>

            <div className={root.toPayment}>
                <Link to='candleaf/details' className='greenTextWithDash'>Back to details</Link>
                <button onClick={() => navigate('/payment')} >Go to payment</button>
            </div>

        </div>

        <SummaryProducts/>
    </section>
}


export default Shipping