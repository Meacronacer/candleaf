import Logo from '../../assets/logo.svg'
import Vector from '../../assets/Vector.svg'
import Profile from '../../assets/Profile.svg'
import Cart from '../../assets/Cart.svg'
import root from './navbar.module.scss'


const Navbar = () => {
    return <nav className={root.navbar}>
        <a className={root.logo} ><img src={Logo} /></a>
        <ul className={root.links}>
            <li className={root.item}><a href="default.asp">Discovery <img src={Vector} /> </a></li>
            <li><a href="news.asp">About</a></li>
            <li><a href="contact.asp">Contact us</a></li>
        </ul>
        <div className={root.cart}>
            <img src={Profile} />
            <img src={Cart} />
        </div>
    </nav>
}

export default Navbar