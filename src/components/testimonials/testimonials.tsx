import CardItem from './card-item/card-item'
import root from './testimonials.module.scss'


const Testimonials = () => {
    return <section className={root.testimonials}>
            <div className={root.text}>
                <h1 className={root.title}>Testimonials</h1>
                <p>Some quotes from our happy customers</p>
            </div>
            <div className={root.cards}>
                <CardItem/>
                <CardItem/>
                <CardItem/>
            </div>
    </section>
}

export default Testimonials