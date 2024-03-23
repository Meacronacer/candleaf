import ShippingMethod from '../shippingMethod/shippingMethod'
import root from './shipTo.module.scss'


const ShipTo = ({showShippMethodInContactInfo = false}) => {

    return <div className={root.contactInfo}>
        <div className={root.contact}>
            <p className={root.pText}>
                Contact
                <span className={root.sSpan} title='joe.spagnuolo@uxbly.com'>joe.spagnuolo@uxbly.com</span>
            </p>

            <a className={root.edit}>Edit</a>
        </div>

        <div className={root.line}></div>

        <div className={root.contact}>
            <p className={root.pText}>
                Ship to
                <span className={root.sSpan} title='Via Firenze 23, 92023, Campobello di  Licata AG, Italia'
                >Via Firenze 23, 92023, Campobello di  Licata AG, Italia</span>
            </p>

            <a className={root.edit}>Edit</a>
        </div>

        {showShippMethodInContactInfo && <>
            <div className={root.line}></div>

                <ShippingMethod firstChoose={true}/>
        </>}
    </div>
}


export default ShipTo