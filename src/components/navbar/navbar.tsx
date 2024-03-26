import Logo from '../../assets/logo.svg'
import Vector from '../../assets/Vector.svg'
import Profile from '../../assets/Profile.svg'
import Cart from '../../assets/Cart.svg'
import root from './navbar.module.scss'
import { Link } from 'react-router-dom'
import { IoMenuSharp, IoCloseSharp } from "react-icons/io5";
import { useState } from 'react'

const Navbar = () => {
    const [menuToggle, setMenuToggle] = useState(true)


    return <nav className={root.navbar}>
        { menuToggle ? <IoMenuSharp size={40} onClick={() => setMenuToggle(prev => !prev)} className={root.mobileMenu} />
                     : <IoCloseSharp size={40} onClick={() => setMenuToggle(prev => !prev)} className={root.mobileMenu} /> }
        <Link to='/' className={root.logo} ><img src={Logo} alt='logo' /></Link>
        <ul className={menuToggle ? root.links : root.Mobilelinks}>
            <li className={root.item}><a href="default.asp">Discovery <img alt='v' src={Vector} /> </a></li>
            <li><a href="news.asp">About</a></li>
            <li><a href="contact.asp">Contact us</a></li>
        </ul>
        <div className={root.cart}>
            <img src={Profile} alt='profile' />
            <Link to='/cart'><img alt='cart' src={Cart} /></Link>
        </div>
    </nav>
}

export default Navbar