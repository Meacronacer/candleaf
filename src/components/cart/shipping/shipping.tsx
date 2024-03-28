import ShipTo from '../../common/shippTo/shippTo'
import ShippingMethod from '../../common/shippingMethod/shippingMethod'
import CartNavigation from '../cartNavigation/cartNavigation'
import SummaryProducts from '../summaryProducts/summaryProducts'
import root from './shipping.module.scss'


const Shipping = () => {

    return <div className={root.shipping}>

        <div className={root.shipping__inside}>
            <CartNavigation/>

            <ShipTo />

            <h3>Shipping method</h3>

            <ShippingMethod/>

            <div className={root.toPayment}>
                <a className={root.back}>Back to details</a>
                <button>Go to payment</button>
            </div>

        </div>

        <SummaryProducts/>
    </div>
}


export default Shipping