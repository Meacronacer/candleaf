import { Link, useNavigate } from 'react-router-dom'
import ShipTo from '../../common/shippTo/shippTo'
import ShippingMethod from '../../common/shippingMethod/shippingMethod'
import CartNavigation from '../cartNavigation/cartNavigation'
import SummaryProducts from '../summaryProducts/summaryProducts'
import root from './shipping.module.scss'

const Shipping = () => {
    const navigate = useNavigate()

    return <div className={root.shipping}>

        <div className={root.shipping__inside}>
            <CartNavigation/>

            <ShipTo />

            <h3>Shipping method</h3>

            <ShippingMethod/>

            <div className={root.toPayment}>
                <Link to='/checkout' className={root.back}>Back to details</Link>
                <button onClick={() => navigate('/payment')} >Go to payment</button>
            </div>

        </div>

        <SummaryProducts/>
    </div>
}


export default Shipping