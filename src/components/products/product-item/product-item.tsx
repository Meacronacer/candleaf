import root from './product-item.module.scss'
import spiced from '../../../assets/spiced-mint.png'

const ProductItem = () => {
    return <div className={root.card}>
            <div className={root.bg}>
                <img src={spiced} alt='product' />
            </div>
            <div className={root.price}>
                <h6>Spiced Mint</h6>
                <span>9.99$</span>
            </div>
    </div>
}


export default ProductItem