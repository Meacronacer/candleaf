import root from './quantity.module.scss'


const Quantity = () => {
    return <div className={root.quantity}>
            <button>-</button>
            <input type="number" className={root.inputBox} value="1" />
            <button>+</button>
        </div>

}


export default Quantity