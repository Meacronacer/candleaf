



const CartNavigation = () => {
    return <ul style={{display: "flex", columnGap: "10px"}} >
                <li><a>Cart</a></li>
                <li><span>&#62;</span></li>
                <li><a>Details</a></li>
                <li><span>&#62;</span></li>
                <li><a>Shipping</a></li>
                <li><span>&#62;</span></li>
                <li><a>Payment</a></li>
            </ul>
}

export default CartNavigation