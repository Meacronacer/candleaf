import root from './cart.module.scss'
import spiced from '../../../assets/spiced-mint.png'
import Quantity from '../../common/quantity/quantity'

const Cart = () => {
    return <div className={root.cart}>
            <h1 className={root.title}>Your cart Items</h1>
            <a>Back to shopping</a>

            <div className={root.productsTable}>
                <table>
                    <tbody>
                        <tr>
                            <th>Product</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Total</th>
                        </tr>

                        <tr>
                            <td>
                                <img src={spiced} alt='product' /> 
                                <p>
                                <span>Spiced Mint Candleaf®</span> <br/>
                                <a>Remove</a> 
                                </p>
                            </td>
                            <td>$9.99</td>
                            <td><Quantity/></td>
                            <td>$9.99</td>
                        </tr>
                    </tbody>
                </table>

                <div className={root.totalPrice}>
                    <div>
                        <div className={root.price}>
                            <h4>Sub-total</h4>
                            <h4>$9.99</h4>
                        </div>
                        <span>Tax and shipping cost will be calculated later</span>
                    </div>
                    <button>Check-out</button>
                </div>
            </div>
    </div>
}

export default Cart