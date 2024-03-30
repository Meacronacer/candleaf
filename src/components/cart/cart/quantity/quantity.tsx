import { useAppDispatch } from '../../../../hooks/hooks'
import { quantityDecrement, quantityIncrement } from '../../../../redux/slices/cartSlice'
import root from './quantity.module.scss'

interface QuantityProps {
    id: number
    quantity: number
    detailPage?: boolean
    incrementQuntity?: () => void
    decrementQuntity?: () => void
}


const Quantity: React.FC<QuantityProps> = ({id, quantity, incrementQuntity, decrementQuntity, detailPage = false}) => {
    const dispatch = useAppDispatch()

    return <div className={root.quantity}>
            {detailPage ? 
            <>
                <button disabled={quantity === 1} onClick={decrementQuntity}>-</button>
                <input readOnly type="number" className={root.inputBox} value={quantity} />
                <button onClick={incrementQuntity}>+</button>
            </>
                :
            <>
                <button disabled={quantity === 1} onClick={() => dispatch(quantityDecrement(id))}>-</button>
                <input readOnly type="number" className={root.inputBox} value={quantity} />
                <button onClick={() => dispatch(quantityIncrement(id))}>+</button>
            </>
            }
        </div>
}


export default Quantity