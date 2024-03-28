import { useAppDispatch } from '../../../../hooks/hooks'
import { quantityDecrement, quantityIncrement } from '../../../../redux/slices/cartSlice'
import root from './quantity.module.scss'

interface QuantityProps {
    id: number
    quantity: number
}


const Quantity: React.FC<QuantityProps> = ({id, quantity}) => {
    const dispatch = useAppDispatch()


    return <div className={root.quantity}>
            <button disabled={quantity === 1} onClick={() => dispatch(quantityDecrement(id))}>-</button>
            <input readOnly type="number" className={root.inputBox} value={quantity} />
            <button onClick={() => dispatch(quantityIncrement(id))}>+</button>
        </div>

}


export default Quantity