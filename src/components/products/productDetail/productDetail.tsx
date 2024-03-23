import root from './productDetail.module.scss'
import productImage from '../../../assets/productDetail.png'
import { BsCart3 } from "react-icons/bs";
import Quantity from '../../common/quantity/quantity';


const ProductDetail = () => {
    return <div className={root.productDetail}>
        <div className={root.leftContent}>
            <img src={productImage} alt='product' />
            <p>
            All hand-made with natural soy wax, Candleaf is <br/> made for your pleasure moments. <br/>
            </p>
            <span className={root.shipping}>🚚 FREE SHIPPING</span>
        </div>

        <div className={root.rightContent}>
            <h1>Spiced Mint Candleaf®</h1>
            <div style={{display: 'flex'}}>
                <div>
                    <span className={root.price}>$ 9.99</span>
                    <p className={root.quantityTitle}>Quantity</p>
                    <Quantity/>
                </div>

                <div className={root.subscribe}>
                    <div className={root.oneTime}>
                        <input type='radio' id='radio1' />
                        <label htmlFor='radio1' >One time purchase</label>
                    </div>

                    <div className={root.everyWeeks}>
                        <div className={root.weekTopContent}>
                            <input className={root.ewInput} type='radio' id='radio2' />
                            <label htmlFor='radio2' >Subscribe and delivery every</label>
                            <select id="cars">
                                <option >4 weeks</option>
                                <option >3 weeks</option>
                                <option >2 weeks</option>
                                <option >1 week</option>
                            </select>
                        </div>
                        <p className={root.description}>Subscribe now and get the 10% of discount on every recurring order.  The discount will be applied at checkout. See details</p>
                        <button className={root.btn}> <BsCart3 size={20} /> + Add to cart</button>
                    </div>

                </div>
            </div>

            <div className={root.info}>
                <span><li>Wax:</li> Top grade Soy wax that delivers a smoke less,  consistent burn</span> 
                <span><li>Fragrance:</li> Premium quality ingredients with natural essential oils </span> 
                <span><li>Burning Time:</li> 70-75 hours <li>Dimension:</li> 10cm x 5cm  <li>Weight:</li> 400g</span>
            </div>
        </div>
    </div>
}

export default ProductDetail