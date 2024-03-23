import CartNavigation from '../cartNavigation/cartNavigation'
import SummaryProducts from '../summaryProducts/summaryProducts'
import root from './authentication.module.scss'


const Authentication = () => {
    return <section className={root.authentication}>

        <div className={root.usefInfo}>
            <CartNavigation/>
            <div className={root.contact}>
                <h2>Contact</h2>
                <div className={root.account}>
                    <span>Do you have an account?</span>
                    <a className={root.login}>Login</a>
                </div>
            </div>

            <input className={root.EmailOrPhone} placeholder='Email or mobile phone number' />

            <div className={root.discount}>
                <input type='checkbox' id='saveInfo' />
                <label htmlFor='saveInfo'>Add me to Candleaf newsletter for a 10% discount</label>
            </div>

            <div className={root.ShippingAddress}>
                <h2>Shipping Address</h2>

                <div className={root.nameAndSecondName} >
                    <input className={root.name} placeholder='Name' />
                    <input className={root.secondName} placeholder='Second Name' />
                </div>

                <input className={root.EmailOrPhone} placeholder='Address and number' />
                <input className={root.EmailOrPhone} placeholder='Shipping note (optional)' />


                <div className={root.city}>
                    <input placeholder='City' />
                    <input placeholder='Postal Code' />
                    <input placeholder='Province' list="select" name="select" />

                    <datalist id="select">    
                        <option value="Trans"/>
                        <option value="Fund"/>
                        <option value="Insta"/>
                    </datalist>
                </div>

                <input className={root.EmailOrPhone} placeholder='Country/Region' />

                <div className={root.discount}>
                    <input type='checkbox' id='discount' />
                    <label htmlFor='discount'>Save this informations for a future fast checkout</label>
                </div>
            </div>

            <div className={root.submit}>
                <a className={root.back}>Back to cart</a>
                <button>Go to shipping</button>
            </div>

        </div>

        <SummaryProducts/>
    </section>
}


export default Authentication