import root from './productDetail.module.scss'
import productImage from '../../../assets/productDetail.png'
import { BsCart3 } from "react-icons/bs";
import Quantity from '../../common/quantity/quantity';


const ProductDetail = () => {
    return <div className={root.productDetail}>
        <div className={root.leftContent}>
            <div className={root.logoInfo}>
                <img src={productImage} alt='product' />
                <p className={root.shipping}>
                All hand-made with natural soy wax, Candleaf is <br/> made for your pleasure moments. <br/>
                </p>
                <span className={root.shipping}>🚚 FREE SHIPPING</span>
            </div>
        </div>

        <div className={root.rightContent}>
            <h2>Spiced Mint Candleaf®</h2>
            
            <div className={root.content}>
                <div className={root.priceAndQuantity}>
                    <span className={root.price}>$ 9.99</span>
                    <p className={root.quantity}>Quantity</p>
                    <Quantity/>
                </div>

                <div className={root.timePurchase}>
                    <div className={root.oneTime}>
                        <input type='radio' id='oneTime' />
                        <label htmlFor="oneTime">One time purchase</label>
                    </div>

                    <div className={root.evryWeek}>
                        <div className={root.subscribe}>
                            <input type="radio" id='evryWeek' />
                            <label htmlFor='evryWeek'>Subscribe and delivery every </label>
                            <select name="weeks" id="weeks">
                                <option value="4 weeks">4 weeks</option>
                                <option value="3 weeks">3 weeks</option>
                                <option value="2 weeks">2 weeks</option>
                                <option value="1 wekk">1 week</option>
                            </select>
                        </div>
                        <p className={root.description}>
                            Subscribe now and get the 10% of discount
                            on every recurring order.  The discount will
                            be applied at checkout. See details
                        </p>
                    </div>
                    <button className={root.btn}><BsCart3/> + Add to cart</button>
                </div>
            </div>



            <div className={root.info}>
                <span className={root.spans}><li className={root.lins}>Wax:</li> Top grade Soy wax that delivers a smoke less,  consistent burn</span> 
                <span className={root.spans}><li className={root.lins}>Fragrance:</li> Premium quality ingredients with natural essential oils </span> 
                <span className={root.spans}><li className={root.lins}>Burning Time:</li> 70-75 hours <li className={root.lins}>Dimension:</li> 10cm x 5cm  <li className={root.lins}>Weight:</li> 400g</span>
            </div>
        </div>
    </div>
}

export default ProductDetail