// styles used from global.scss

const ShippingMethod = ({firstChoose = false} : any) => {

    return <>
        {firstChoose ? 
            <div className='contact'>
                <p className='pText'>
                    Method
                    <span className='sSpan'title='Standard Shipping - FREE'
                    >Standard Shipping - FREE</span>
                </p>

                <a className='edit'>Edit</a>
            </div>
            :
            <div className='shippingMethod'>
                <input checked type='radio'/>
                <p>Standard Shipping</p>
                <span  className='free'>Free</span>
            </div>
    }

    </>
}


export default ShippingMethod