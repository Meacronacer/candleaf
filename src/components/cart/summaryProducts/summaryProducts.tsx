import root from './summaryProducts.module.scss'
import spiced from '../../../assets/spiced-mint.png'


const SummaryProducts = () => {
    return <div className={root.summaryProducts}>
        <table>
            <tbody>
                <tr>
                    <td>
                        <img src={spiced} alt='product' /> 
                        <div className={root.itemCount}>1</div>
                        <p>
                        <span>Spiced Mint Candleaf®</span> <br/>
                        <span>$9.99</span> 
                        </p>
                    </td>
                </tr>
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
                $  9.99
            </span>
        </p>

        <p className={root.subTotal}>
            Shipping
            <span>
                Calculated at the next step
            </span>
        </p>

        <div className={root.line}></div>

        <p className={root.subTotal}>
            Total
            <span>
                $ 9.99
            </span>
        </p>

        
    </div>
}


export default SummaryProducts