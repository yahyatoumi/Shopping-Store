import { CgShoppingCart } from "react-icons/cg"
import CartItemsContext from "./CartItemsContext";
import { useContext, useState, useEffect } from "react";
import ReactDOM from "react-dom";

const Cart = () => {
    const [cartItems] = useContext(CartItemsContext);
    const [cartDisplayed, setCartDisplayed] = useState(false);
    const [itemQuantities, setItemQuantities] = useState<{ [key: number]: number }>({});

    const displayCart = () => {
        if (cartItems.length !== 0)
            setCartDisplayed(true)
    }

    const incrementItemQuantity = (itemId: number) => {
        const newQuantities = { ...itemQuantities };
        newQuantities[itemId] = (newQuantities[itemId] || 1) + 1;
        setItemQuantities(newQuantities);
    }

    const decrementItemQuantity = (itemId: number) => {
        const newQuantities = { ...itemQuantities };
        newQuantities[itemId] = Math.max((newQuantities[itemId] || 1) - 1, 0);
        setItemQuantities(newQuantities);
    }

    const BackDrop = (props: { onClose: () => void }) => {
        return <div className="backdrop" onClick={props.onClose} />
    };

    const CartIcon = () => <div className="icons-container" onClick={displayCart}>
        <CgShoppingCart className="cart-icon" />
        <CartItemsContext.Consumer>
            {value => <p className="items-selected">{value[0].length}</p>}
        </CartItemsContext.Consumer>
    </div>

    const CartComponent = <div className="cart">
        
        {cartDisplayed ? <div className="the-cart">
            <div>
                <div className="header">
                    <div>Product</div>
                    <div>Price</div>
                    <div>Quality</div>
                    <div>Total</div>
                </div>
                {cartItems.map((item) =>
                    <div className="item-holder">
                        <div className="infos">
                            <div className="pic-holder">
                                <img src={item.images[0]} alt="" />
                            </div>
                            <p className="name">{item.title}</p>
                        </div>
                        <div className="price">
                            ${item.price}
                        </div>
                        <div className="amount">
                            <button className="decrement" onClick={() => decrementItemQuantity(item.id)}>-</button>
                            <div>{itemQuantities[item.id] ? itemQuantities[item.id] : 1}</div>
                            <button className="increment" onClick={() => incrementItemQuantity(item.id)}>+</button>
                        </div>
                        <div className="total">
                            {!isNaN(itemQuantities[item.id]) ? "$" + item.price * (itemQuantities[item.id] + 1) : "$" + item.price}
                        </div>
                    </div>
                )}
            </div>

        </div> : ""}
    </div>
    useEffect(() => {
        const cartRoot = document.getElementById("cart");
        const backdropRoot = document.getElementById("backdrop");
        if (!cartRoot) {
            const newCartRoot = document.createElement("div");
            newCartRoot.id = "cart";
            document.body.appendChild(newCartRoot);
        }
        if (!backdropRoot){
            const newCartRoot = document.createElement("div");
            newCartRoot.id = "backdrop";
            document.body.appendChild(newCartRoot);
        }
    }, []);
    if (!cartDisplayed)
        return <CartIcon />
    return <>
        {ReactDOM.createPortal(<BackDrop onClose={() => setCartDisplayed(false)} />, document.getElementById("backdrop")!)}
        {ReactDOM.createPortal(CartComponent, document.getElementById("cart")!)}
    </>
}

export default Cart;