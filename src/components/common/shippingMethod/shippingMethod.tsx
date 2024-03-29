// styles used from global.scss

import { Link } from "react-router-dom"

const ShippingMethod = ({firstChoose = false} : any) => {

    return <>
        {firstChoose ? 
            <div className='contact'>
                <p className='pText'>
                    Method
                    <span className='sSpan'title='Standard Shipping - FREE'
                    >Standard Shipping - FREE</span>
                </p>

                <Link to='/shipping' className='edit'>Edit</Link>
            </div>
            :
            <div className='shippingMethod'>
                <input defaultChecked type='radio'/>
                <p>Standard Shipping</p>
                <span  className='free'>Free</span>
            </div>
    }

    </>
}


export default ShippingMethod