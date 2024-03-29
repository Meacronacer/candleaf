import { Link } from 'react-router-dom'
import { useAppSelector } from '../../../hooks/hooks'
import ShippingMethod from '../shippingMethod/shippingMethod'
import root from './shipTo.module.scss'
// styles used from global.scss

const ShipTo = ({showShippMethodInContactInfo = false}) => {

    const {email, shipping} = useAppSelector(state => state.shipping)

    return <div className={root.contactInfo}>
        <div className='contact'>
            <p className='pText'>
                Contact
                <span className='sSpan' title={email}>{email}</span>
            </p>

            <Link to='/checkout' className='edit'>Edit</Link>
        </div>

        <div className='line'></div>

        <div className='contact'>
            <p className='pText'>
                Ship to
                <span className='sSpan' title={`${shipping[2].address}, ${shipping[5].postalCode}, ${shipping[4].city}, ${shipping[7].country}`}
                >{shipping[2].address}, {shipping[5].postalCode}, {shipping[4].city}, {shipping[7].country}zxccccccccccccccccccccccccccccccc</span>
            </p>

            <Link to='/checkout' className='edit'>Edit</Link>
        </div>

        {showShippMethodInContactInfo && <>
            <div className='line'></div>

                <ShippingMethod firstChoose={true}/>
        </>}
    </div>
}


export default ShipTo