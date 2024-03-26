import CartNavigation from '../cartNavigation/cartNavigation'
import SummaryProducts from '../summaryProducts/summaryProducts'
import root from './thanksForOrder.module.scss'
import checkCircle from '../../../assets/CheckCircle.svg'

const ThanksForOrder = () => {
    return <div className={root.order}>
        <div className={root.thanks}>
            <CartNavigation/>

            <div className={root.text}>
                <img className={root.image} alt='checkCircle' src={checkCircle} />
                <h2>Payment Confirmed</h2>
                <span >ORDER #2039</span>
                <p className={root.desc}> Thank you Joe for buying Candleaf. The nature is grateful to you. <br/>
                     Now that your order is confirmed it will be ready to ship in 2 days. <br/>
                      Please check your inbox in the future for your order updates. <br/>
                </p>
            </div>

            <button>Back to shopping</button>

            <a className='greenTextWithDash'>Print receipt</a>

        </div>

        <SummaryProducts/>

    </div>
}



export default ThanksForOrder