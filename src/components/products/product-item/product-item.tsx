import root from './product-item.module.scss'
import spiced from '../../../assets/spiced-mint.png'

const ProductItem = () => {
    return <div className={root.card}>
                <img src={spiced} alt='product' />
            <div className={root.info}>
                <h6 className={root.title}>Spiced Mint</h6>
                <span className={root.price}>9.99$</span>
            </div>
    </div>
}


export default ProductItem