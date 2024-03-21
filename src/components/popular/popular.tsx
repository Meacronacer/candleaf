import ProductItem from '../products/product-item/product-item'
import root from './popular.module.scss'

const Popular = () => {
    return <section className={root.popular}>
        <div className={root.text}>
            <h1 className={root.title}>Popular</h1>
            <p  className={root.pText}>Our top selling product that you may like</p>
            <div className={root.popularProductList}>
                <ProductItem/>
                <ProductItem/>
                <ProductItem/>
                <ProductItem/>
            </div>
        </div>
    </section>
}


export default Popular