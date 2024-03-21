import root from './header.module.scss'

const Header = () => {
    return <div className={root.header}>
        <div className={root.card}>
            <div>
                <h1 className={root.title}>
                        🌱 <br/>
                    The nature candle
                </h1>
                <p>
                    All handmade with natural soy wax, Candleaf is a companion for all your pleasure moments 
                </p>
            </div>

           <button className={root.btn} >Discovery our collection</button>
        </div>
    </div>
}


export default Header