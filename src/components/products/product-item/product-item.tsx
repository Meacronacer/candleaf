import root from './product-item.module.scss'
import { Product } from '../types/product'
import { useNavigate } from 'react-router-dom'

const ProductItem: React.FC<Product> = ({id, name, image, price}) => {
    const navigate = useNavigate()


    return <div onClick={() => navigate(`product/${id}`)} className={root.card}>
                <img src={image} alt='product' />
            <div className={root.info}>
                <p className={root.title}>{name}</p>
                <span className={root.price}>{price}$</span>
            </div>
    </div>
}


export default ProductItem