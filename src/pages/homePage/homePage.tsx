
import Benefits from "../../components/benefits/benefits"
import Header from "../../components/header/header"
import Popular from "../../components/popular/popular"
import Products from "../../components/products/productsList/products"
import Testimonials from "../../components/testimonials/testimonials"
import Layout from "../layout/layout"

const HomePage = () => {
    return <Layout>
        <Header/>
        <Products/>
        <Benefits/>
        <Testimonials/>
        <Popular/>
    </Layout>
}


export default HomePage 