import root from './productDetail.module.scss'
import { useEffect } from 'react';
import { BsCart3 } from "react-icons/bs";
import { useParams } from 'react-router-dom';
import { useGetProductByIdQuery } from '../../../redux/api/productsSlice';
import { useState } from 'react';
import { addItemToCart } from '../../../redux/slices/cartSlice';
import { useAppDispatch } from '../../../hooks/hooks';
import { PuffLoader } from 'react-spinners';
import Quantity from '../../cart/cart/quantity/quantity';


const ProductDetail: React.FC = () => {
    const [quantity] = useState<number>(1)
    const dispatch = useAppDispatch()

    const {productId} = useParams()
    const {data, isLoading} = useGetProductByIdQuery(productId)

    useEffect(() => {
        window.scrollTo(0, 0)
    },[])

    if (isLoading) {
        return <div style={{marginTop: '150px'}} ><PuffLoader size={300} color="#36d7b7" /> </div>
    }

    return <div className={root.productDetail}>

        <div className={root.info}>
            <img className={root.image} src={data.image} />

            <div className={root.info__inner}>
                <div className={root.title}>
                    <h2>{data.name}®</h2>
                </div>

                <div className={root.productInfo}>
                    <div className={root.priceAndQuantity}>
                        <span className={root.price}>${data.price}</span>
                        <div className={root.quantity}>
                            {/* <Quantity id={data.id} quantity={1} /> */}
                        </div>
                    </div>

                    <div className={root.purchase}>

                        <div className={root.oneTime}>
                            <input type='radio' id='oneTime' name='week' />
                            <label htmlFor='oneTime' >One time purchase</label>

                        </div>
                        
                        <div className={root.everyWeek}>
                            <div className={root.weekInput}>
                                <input type='radio' id='evryTime' name='week' />
                                <label htmlFor='evryTime' >Subscribe and delivery every </label>
                                <select name="weeks" id="weeks">
                                    <option value="4 weeks">4 weeks</option>
                                    <option value="3 weeks">3 weeks</option>
                                    <option value="2 weeks">2 weeks</option>
                                    <option value="1 weeks">1 week</option>
                                </select>
                            </div>
                            <p className={root.description}>
                                Subscribe now and get the 10% of discount on every recurring order.
                                The discount will be applied at checkout. See details
                            </p>

                        </div>


                        <button
                        onClick={() => dispatch(addItemToCart({...data, quantity}))} 
                        className={root.addToCart}> <BsCart3/> + Add to cart</button>
                    </div>
                    

                </div>
            </div>

        </div>

        <div className={root.delivery}>
            
            <div className={root.deliviryInfo}>
                <p>All hand-made with natural soy wax, Candleaf is made for your pleasure moments</p>
                <br/>
                <span className={root.car}>🚚 FREE SHIPPING</span>
        
            </div>
    
    
            <div className={root.productOptions}>
                    <span className={root.spans}><li className={root.lins}>Wax:</li> Top grade Soy wax that delivers a smoke less,  consistent burn</span> 
                    <span className={root.spans}><li className={root.lins}>Fragrance:</li> Premium quality ingredients with natural essential oils </span> 
                    <span className={root.spans}><li className={root.lins}>Burning Time:</li> 70-75 hours <li className={root.lins}>Dimension:</li> 10cm x 5cm  <li className={root.lins}>Weight:</li> 400g</span>
            </div>
    
        </div>

    </div>
}

export default ProductDetail