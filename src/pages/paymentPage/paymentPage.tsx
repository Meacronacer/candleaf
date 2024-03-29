import Payment from "../../components/cart/payment/payment"
import Navbar from "../../components/navbar/navbar"


const PaymentPage = () => {
    return <>
        <Navbar showOnlyLogo={true} />
        <Payment/>
    </>
}


export default PaymentPage