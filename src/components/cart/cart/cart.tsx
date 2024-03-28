import root from './cart.module.scss'
import Quantity from './quantity/quantity'
import { useAppDispatch, useAppSelector } from '../../../hooks/hooks'
import { removeItemFromCart } from '../../../redux/slices/cartSlice'

const Cart = () => {
    const {cartItems, totalPrice} = useAppSelector(state => state.cart)
    const dispatch = useAppDispatch()

    const cartProducts = cartItems && cartItems.map((item, index:number) => {

        const totalPriceOfItem = (item.price * item.quantity).toFixed(2)

        return <tr key={item.id}>
                    <td>
                        <img src={item.image} alt='product' /> 
                        <p>
                        <span>{item.name}®</span> <br/>
                        <a onClick={() => dispatch(removeItemFromCart({index, totalPriceOfItem}))}>Remove</a> 
                        </p>
                    </td>
                    <td>${item.price}</td>
                    <td><Quantity id={index} quantity={item.quantity} />
                    </td>
                    <td>${totalPriceOfItem}</td>
                </tr>
    })
    

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

                        {cartProducts}
                    </tbody>
                </table>

                <div className={root.totalPrice}>
                    <div>
                        <div className={root.price}>
                            <h4>Sub-total</h4>
                            <h4>${(totalPrice).toFixed(2)}</h4>
                        </div>
                        <span>Tax and shipping cost will be calculated later</span>
                    </div>
                    <button>Check-out</button>
                </div>
            </div>
    </div>
}

export default Cart