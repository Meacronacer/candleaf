import Logo from '../../assets/logo.svg'
import Vector from '../../assets/Vector.svg'
import Profile from '../../assets/Profile.svg'
import Cart from '../../assets/Cart.svg'
import root from './navbar.module.scss'
import { Link } from 'react-router-dom'


const Navbar = () => {

    return <nav className={root.navbar}>
        <Link to='/' className={root.logo} ><img src={Logo} /></Link>
        <ul className={root.links}>
            <li className={root.item}><a href="default.asp">Discovery <img src={Vector} /> </a></li>
            <li><a href="news.asp">About</a></li>
            <li><a href="contact.asp">Contact us</a></li>
        </ul>
        <div className={root.cart}>
            <img src={Profile} />
            <Link to='/cart'><img src={Cart} /></Link>
        </div>
    </nav>
}

export default Navbar