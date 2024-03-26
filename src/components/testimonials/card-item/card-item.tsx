import root from './card-item.module.scss'
import avatar from '../../../assets/avatar.png'
import { IoIosStar, IoIosStarHalf  } from "react-icons/io";
const CardItem = () => {
    return <div className={root.card}>
        <img src={avatar} alt='avatar' className={root.image}/>
        <div className={root.stars}>
            <IoIosStar color='#56b280' size={24}/>
            <IoIosStar color='#56b280' size={24}/>
            <IoIosStar color='#56b280' size={24}/>
            <IoIosStar color='#56b280' size={24}/>
            <IoIosStarHalf  color='#56b280' size={24}/>
        </div>

        <p className={root.text}>“I love it! No more air fresheners”</p>
        <span className={root.author}>Luisa</span>
    </div>
}


export default CardItem