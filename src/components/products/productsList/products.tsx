import { useGetProductsQuery } from '../../../redux/api/productsSlice'
import { Product } from '../types/product'
import ProductItem from '../product-item/product-item'
import root from './products.module.scss'

const Products: React.FC = () => {

    const {data, isLoading} = useGetProductsQuery({})

    if (isLoading) return null

    const products = data && data.map((item:Product) => <ProductItem key={item.id} {...item} />)

    return <section className={root.products}>
        <div className={root.text}>
            <h1 className={root.title}>Products</h1>
            <p>Order it for you or for your beloved ones </p>
        </div>

        <section className={root.productsList}>
                {products}
        </section>

    </section>  
}


export default Products