import root from './benefits.module.scss'
import benefits from '../../assets/benefits.png'
import checkmark from '../../assets/checkmark.svg'

const Benefits = () => {
    return <section className={root.benefits}>
        <div className={root.content} >
            <h1>Clean and <br/> fragrant soy wax</h1>
            <p className={root.textP}>Made for your home and for your wellness</p>
            <div className={root.ImageAndText}>
                <div className={root.image}>
                    <img src={benefits} alt='benefits' />
                </div>
                <div className={root.checkmarks}>
                    <p className={root.item}><img src={checkmark} />  Eco-sustainable:All recyclable materials, 0% CO2 emissions </p> 
                    <p className={root.item}><img src={checkmark} />  Hyphoallergenic: 100% natural, human friendly ingredients</p>
                    <p className={root.item}><img src={checkmark} />  Handmade: All candles are craftly made with love. </p> 
                    <p className={root.item}><img src={checkmark} />  Long burning: No more waste. Created for last long. </p>
                    <button className={root.learnMore}>Learn more</button>
                </div>
            </div>
        </div>

    </section>

}

export default Benefits