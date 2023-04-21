import { useState } from "react";
import Category from "./Category";
import { FaAngleDown } from "react-icons/fa"
import ProductContext from "../Contexts/ProductsContext";

const Navbar = () => {
    const [categoryDisplayed, setCategoryDisplayed] = useState(false);
    const [displayMenu, setDisplayMenu] = useState(false);
    return <nav>
        <div className="big-screen">
            <div className="logo">
                <img src="https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e86ab4c21faa7bc0bd90dd_Logo.svg" alt="" />
            </div>
            <div className="menu">
                <ul>
                    <li className="category" onClick={() => setCategoryDisplayed(!categoryDisplayed)}>
                        Category
                        <FaAngleDown />
                    </li>

                    {categoryDisplayed ? <ProductContext.Consumer>
                        {value => <Category products={value[0] ? value[0].slice(0, 6) : []} />}
                    </ProductContext.Consumer> : ""}
                    <li>Deals</li>
                    <li>Whats's New</li>
                    <li>Delivery</li>
                </ul>
                <div className="search-bar">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path opacity="0.8" d="M8.33317 3.33317C5.57175 3.33317 3.33317 5.57175 3.33317 8.33317C3.33317 11.0946 5.57175 13.3332 8.33317 13.3332C11.0946 13.3332 13.3332 11.0946 13.3332 8.33317C13.3332 5.57175 11.0946 3.33317 8.33317 3.33317ZM1.6665 8.33317C1.6665 4.65127 4.65127 1.6665 8.33317 1.6665C12.0151 1.6665 14.9998 4.65127 14.9998 8.33317C14.9998 9.87376 14.4773 11.2923 13.5997 12.4212L18.0891 16.9106C18.4145 17.236 18.4145 17.7637 18.0891 18.0891C17.7637 18.4145 17.236 18.4145 16.9106 18.0891L12.4212 13.5997C11.2923 14.4773 9.87376 14.9998 8.33317 14.9998C4.65127 14.9998 1.6665 12.0151 1.6665 8.33317Z" fill="#231F1E" data-darkreader-inline-fill="" ></path>
                    </svg>
                    <input type="text" placeholder="Search Product" />
                </div>
            </div>
            <div className="account-cart">
                <div className="account">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png" className="user-icon" alt="" />
                    <p>
                        Account
                    </p>
                </div>
                <div className="cart">
                    <img src="https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63eb3dec9b865e78d4ff6b8d_shopping-cart-add.png" alt="" />
                    <p>
                        Cart
                    </p>
                </div>
            </div>
            <div className="extand-icon" onClick={e => setDisplayMenu(!displayMenu)}>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
        {displayMenu ? <div className="small-screen-nav">
            <ul>
                <li className="category" onClick={() => setCategoryDisplayed(!categoryDisplayed)}>
                    Category
                    <FaAngleDown />
                </li>
                {categoryDisplayed ? <ProductContext.Consumer>
                    {value => <Category products={value[0] ? value[0].slice(0, 6) : []} />}
                </ProductContext.Consumer> : ""}
                <li>Deals</li>
                <li>Whats's New</li>
                <li>Delivery</li>
            </ul>
        </div> : ""}
    </nav>
}
export default Navbar;