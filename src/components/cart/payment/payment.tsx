import ShipTo from '../../common/shippTo/shippTo'
import CartNavigation from '../cartNavigation/cartNavigation'
import SummaryProducts from '../summaryProducts/summaryProducts'
import root from './payment.module.scss'
import creditCartLogo from '../../../assets/CreditCardFill.svg'
import ShippingMethod from '../../common/shippingMethod/shippingMethod'


const Payment = () => {
    return <div className={root.payment}>

            <div className={root.paymentMethod}>
                <CartNavigation/>

                <ShipTo showShippMethodInContactInfo={true} />

                <h3>Payment method</h3>

                
                <div className={root.creditCart}>
                    <div className={root.logo}>
                        <img src={creditCartLogo} />
                        <p className={root.text}>Credit Card</p>
                    </div>


                    <div className={root.cardNumber}>
                        <input className={root.inputs} placeholder='Card Number' />
                        <input className={root.inputs} placeholder='Holder Name' />
                        <div className={root.expiration}>
                            <input className={root.inputs} placeholder='Expiration (MM/YY)' />
                            <input className={root.inputs} type='password' placeholder='CVV' />
                        </div>
                    </div>

                </div>

                <h3>Tax Informations</h3>

                <div className={root.taxInfo}>
                    <input className={root.inputs} placeholder='VAT number  (optional)'/>
                    <input className={root.inputs} placeholder='PEC (optional)'/>
                </div>

                <h3>Billing address</h3>

                <div className={root.billingAddress}>
                    <div className={root.address}>
                        <input className={root.radio} type='radio' id='same' checked />
                        <label htmlFor='same' >Same as the shipping address</label>
                    </div>

                    <div className='line'></div>

                    <div className={root.address}>
                        <input className={root.radio} type='radio' id='another' />
                        <label htmlFor='another' >Use a different address for billing</label>
                    </div>
                </div>

                <div className={root.paynow}>
                    <a>Back to shipping</a>
                    <button>Pay now</button>
                </div>
            
            </div>

            <SummaryProducts/>
    </div>
}


export default Payment