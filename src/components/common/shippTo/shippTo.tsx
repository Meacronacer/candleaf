import ShippingMethod from '../shippingMethod/shippingMethod'
import root from './shipTo.module.scss'
// styles used from global.scss

const ShipTo = ({showShippMethodInContactInfo = false}) => {

    return <div className={root.contactInfo}>
        <div className='contact'>
            <p className='pText'>
                Contact
                <span className='sSpan' title='joe.spagnuolo@uxbly.com'>joe.spagnuolo@uxbly.com</span>
            </p>

            <a className='edit'>Edit</a>
        </div>

        <div className='line'></div>

        <div className='contact'>
            <p className='pText'>
                Ship to
                <span className='sSpan' title='Via Firenze 23, 92023, Campobello di  Licata AG, Italia'
                >Via Firenze 23, 92023, Campobello di  Licata AG, Italia</span>
            </p>

            <a className='edit'>Edit</a>
        </div>

        {showShippMethodInContactInfo && <>
            <div className='line'></div>

                <ShippingMethod firstChoose={true}/>
        </>}
    </div>
}


export default ShipTo