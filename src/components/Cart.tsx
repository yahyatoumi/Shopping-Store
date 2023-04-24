import { CgShoppingCart } from "react-icons/cg"
import CartItemsContext from "../Contexts/CartItemsContext";
import { useContext, useState, useEffect } from "react";
import ReactDOM from "react-dom";
// import { BsFillTrashFill } from "react-icons/bs"

const Cart = () => {
    const [totalPrice, setTotalPrice] = useState(0);
    const [cartItems, setCartItems] = useContext(CartItemsContext);
    const [cartDisplayed, setCartDisplayed] = useState(false);
    const [itemQuantities, setItemQuantities] = useState<{ [key: number]: number }>({});

    const displayCart = () => {
        if (cartItems.length !== 0)
            setCartDisplayed(true)
    }

    const incrementItemQuantity = (itemId: number) => {
        const newQuantities = { ...itemQuantities };
        newQuantities[itemId] = (newQuantities[itemId] || 0) + 1;
        setItemQuantities(newQuantities);
        console.log(newQuantities);
        setTotalPrice(totalPrice + cartItems.filter((item) => item.id === itemId)[0].price)
    }

    const decrementItemQuantity = (itemId: number) => {
        const newQuantities = { ...itemQuantities };
        newQuantities[itemId] = Math.max((newQuantities[itemId] || 0) - 1, 0);
        setItemQuantities(newQuantities);
        if (itemQuantities[itemId] > 0)
            setTotalPrice(totalPrice - cartItems.filter((item) => item.id === itemId)[0].price)
    }

    const BackDrop = (props: { onClose: () => void }) => {
        return <div className="backdrop" onClick={props.onClose} />
    };

    const removeHandler = (itemId: number, price: number) => {
        setCartItems(cartItems.filter((item) => item.id !== itemId))
        setTotalPrice(totalPrice - (itemQuantities[itemId] * price))
        const newQuantities = { ...itemQuantities };
        newQuantities[itemId] = 0;
        setItemQuantities(newQuantities)
    }

    // useEffect(() => {
    //     if (cartItems.length)
    //         setTotalPrice(totalPrice + cartItems[cartItems.length - 1].price);
    //     console.log("hoho")
    // }, [cartItems])

    const CartIcon = () => <div className="icons-container" onClick={displayCart}>
        <CgShoppingCart className="cart-icon" />
        <CartItemsContext.Consumer>
            {value => <p className="items-selected">{value[0].length}</p>}
        </CartItemsContext.Consumer>
    </div>

    const CartComponent = cartDisplayed ?
        <div className="shopping-cart">
            <div className="the-cart">
                <div className="header">
                    <div>Product</div>
                    <div>Price</div>
                    <div>Quality</div>
                    <div>Total</div>
                </div>
                <div className="items-holder">
                    {cartItems.map((item) =>
                        <div className="item-holder" key={item.id}>
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
                                <div>{itemQuantities[item.id] ? itemQuantities[item.id] : 0}</div>
                                <button className="increment" onClick={() => incrementItemQuantity(item.id)}>+</button>
                            </div>
                            <div className="total">
                                <p>
                                {itemQuantities[item.id] ? "$" + item.price * itemQuantities[item.id] : "$0"}
                                </p>
                                <button className="remove" onClick={() => removeHandler(item.id, item.price)}>remove</button>
                            </div>
                        </div>
                    )}
                </div>
                <div className="total-price">
                    <p>{"Total Price:  $" + totalPrice}</p>
                </div>
            </div>
        </div>
        : ""
    useEffect(() => {
        const cartRoot = document.getElementById("cart");
        if (!cartRoot) {
            const newCartRoot = document.createElement("div");
            newCartRoot.id = "cart";
            document.body.appendChild(newCartRoot);
        }
    }, []);
    if (!cartDisplayed)
        return <CartIcon />
    return <>
        {ReactDOM.createPortal(<BackDrop onClose={() => setCartDisplayed(false)} />, document.getElementById("cart")!)}
        {ReactDOM.createPortal(CartComponent, document.getElementById("cart")!)}
    </>
}

export default Cart;