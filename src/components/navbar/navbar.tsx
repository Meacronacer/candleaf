import Logo from '../../assets/logo.svg'
import Vector from '../../assets/Vector.svg'
import Profile from '../../assets/Profile.svg'
import Cart from '../../assets/Cart.svg'
import root from './navbar.module.scss'
import { Link } from 'react-router-dom'
import { IoMenuSharp, IoCloseSharp } from "react-icons/io5";
import { useState } from 'react'
import { useAppSelector } from '../../hooks/hooks'


interface navbarProps {
    showOnlyLogo?: boolean
}

const Navbar: React.FC<navbarProps> = ({showOnlyLogo = false}) => {
    const [menuToggle, setMenuToggle] = useState(true)
    const {count} = useAppSelector(state => state.cart)

    if (showOnlyLogo) {
        return <nav className={root.navbar}><Link to='/' className={root.logo} ><img src={Logo} alt='logo' /></Link></nav>
    }

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
            {count > 0 && <div className={root.itemCount}>{count}</div>}
        </div>
    </nav>
}

export default Navbar