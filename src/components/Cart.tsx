import { CgShoppingCart } from "react-icons/cg"
import CartItemsContext from "./CartItemsContext";

const Cart = () => {
    return <div className="cart">
        <div className="icons-container">
            <CgShoppingCart className="cart-icon" />
            <CartItemsContext.Consumer>
                {value => <p className="items-selected">{value[0].length}</p>}
            </CartItemsContext.Consumer>
        </div>
    </div>
}

export default Cart;