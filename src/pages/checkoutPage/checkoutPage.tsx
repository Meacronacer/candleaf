import Authentication from "../../components/cart/checkout/checkout"
import Navbar from "../../components/navbar/navbar"


const CheckOutPage = () => {
    return <>
        <Navbar showOnlyLogo={true}/>
        <Authentication/>
    </>
}


export default CheckOutPage