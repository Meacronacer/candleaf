import root from './footer.module.scss'
import FooterLogo from '../../assets/footer.svg'

const Footer = () => {
    return <section className={root.footer}>
        <div className={root.line}></div>
        <div className={root.info} style={{display: 'flex'}}>
            <div className={root.logo}>
                <img className={root.image} src={FooterLogo} />
                <p className={root.description}>
                    Your natural candle made for <br/> your home and for your wellness.
                </p>
            </div>
            <div className={root.terms}>
                    <ul>
                        <li><a>Discovery</a></li>
                        <li><a>New season</a></li>
                        <li><a>Most searched</a></li>
                        <li><a>Most selled</a></li>
                    </ul>
                    <ul>
                        <li><a>About</a></li>
                        <li><a>Help</a></li>
                        <li><a>Shipping</a></li>
                        <li><a>Affiliate</a></li>
                    </ul>
                    <ul>
                        <li><a>Info</a></li>
                        <li><a>Contact</a></li>
                        <li><a>Privacy Policies</a></li>
                        <li><a>Terms & Conditions</a></li>
                    </ul>
            </div>
        </div>
    </section>
}


export default Footer