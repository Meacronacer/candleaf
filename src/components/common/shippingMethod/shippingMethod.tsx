
import root from './shippingMethod.module.scss'

const ShippingMethod = ({firstChoose = false} : any) => {

    return <>
        {firstChoose ? 
            <div className={root.contact}>
                <p className={root.pText}>
                    Method
                    <span className={root.sSpan} title='Standard Shipping - FREE'
                    >Standard Shipping - FREE</span>
                </p>

                <a className={root.edit}>Edit</a>
            </div>
            :
            <div className={root.shippingMethod}>
                <input type='radio'/>
                <p>Standard Shipping</p>
                <span  className={root.free}>Free</span>
            </div>
    }

    </>
}


export default ShippingMethod