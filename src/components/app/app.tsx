import Benefits from '../benefits/benefits'
import Footer from '../footer/footer'
import Header from '../header/header'
import Navbar from '../navbar/navbar'
import Popular from '../popular/popular'
import Products from '../products/products'
import Testimonials from '../testimonials/testimonials'
import root from './app.module.scss'

const App = () => {
    return <div className={root.app}>
        <Navbar/>
        <Header/>
        <Products/>
        <Benefits/>
        <Testimonials/>
        <Popular/>
        <Footer/>
    </div>
}

export default App