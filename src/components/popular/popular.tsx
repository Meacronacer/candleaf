import ProductItem from '../products/product-item/product-item'
import root from './popular.module.scss'
import { useGetPopularProductsQuery } from '../../redux/api/productsSlice'
import { Product } from '../products/types/product'

const Popular = () => {

    const {data, isLoading} = useGetPopularProductsQuery({})

    if (isLoading) return null

    const products = data && data.map((item:Product) => <ProductItem key={item.id} {...item} />)

    return <section className={root.popular}>
        <div className={root.text}>
            <h1 className={root.title}>Popular</h1>
            <p  className={root.pText}>Our top selling product that you may like</p>
            <div className={root.popularProductList}>
                {products}
            </div>
        </div>
    </section>
}


export default Popular