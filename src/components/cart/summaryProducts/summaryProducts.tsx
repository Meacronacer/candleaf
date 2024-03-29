import root from './summaryProducts.module.scss'
import spiced from '../../../assets/spiced-mint.png'
import { useAppSelector } from '../../../hooks/hooks'


const SummaryProducts = () => {
    const {cartItems, totalPrice, isPaid} = useAppSelector(state => state.cart)

    const products = cartItems.map(item => {
        return <tr key={item.id}>
                <td>
                        <img src={item.image} alt='product' /> 
                        <div className={root.itemCount}>{item.quantity}</div>
                        <p>
                        <span>{item.name}®</span> <br/>
                        <span className={isPaid ? 'green-text': ''}>${(item.price * item.quantity).toFixed(2)}</span> 
                        </p>
                    </td>
                </tr>
    })

    return <div className={root.summaryProducts}>
        <table>
            <tbody>
                {products}
            </tbody>
        </table>

        <div className={root.coupon}>
            <input placeholder='Coupon code' />
            <button className={root.addCodeBtn} >Add code</button>
        </div>

        <div className={root.line}></div>

        <p className={root.subTotal}>
            Subtotal
            <span>
                $  {totalPrice}
            </span>
        </p>

        <p className={root.subTotal}>
            Shipping
            <span>
                Calculated at the next step
            </span>
        </p>

        <div className={root.line}></div>

        <p className={`${root.subTotal} ${isPaid ? 'green-text': ''}`}>
        {isPaid? 'Paid' : 'Total'}
            <span>
                $ {totalPrice}
            </span>
        </p>

        
    </div>
}


export default SummaryProducts