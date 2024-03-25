import ProductItem from '../product-item/product-item'
import root from './products.module.scss'

const Products = () => {
    return <section className={root.products}>
        <div className={root.text}>
            <h1 className={root.title}>Products</h1>
            <p>Order it for you or for your beloved ones </p>
        </div>

        <section className={root.productsList}>
            <ProductItem/>
            <ProductItem/>
            <ProductItem/>
            <ProductItem/>
            <ProductItem/>
            <ProductItem/>
            <ProductItem/>
            <ProductItem/>
        </section>

    </section>  
}


export default Products