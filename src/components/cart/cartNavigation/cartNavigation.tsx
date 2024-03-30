import root from './cartNavigation.module.scss'
import { FaAngleRight } from "react-icons/fa6";
const navigate = ['Cart', 'Details', 'Shipping', 'Payment']

const CartNavigation = () => {
    let findCurrentPage = false

    const nav = navigate.map((item, index) => {
        let classNow = ''

        if (!findCurrentPage) {
            if (!window.location.href.endsWith(item.toLowerCase()) && !findCurrentPage) {
                classNow = 'green-text'
            } else {
                findCurrentPage = true
                classNow = root.current
            }
        }


        return <li key={index} className={root.cartNavigation}>
                <a className={classNow}>{item}</a>{index + 1 !== navigate.length && <FaAngleRight/>}
                </li>
     
    })    

    return <ul className={root.cartNavigation} >
                {nav}
            </ul>
}

export default CartNavigation