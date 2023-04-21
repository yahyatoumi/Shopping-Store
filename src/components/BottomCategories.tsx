import { useState } from "react"
import RatingStarts from "./RatingStarts";
import ProductContext from "../Contexts/ProductsContext";
import { useContext } from "react";
import CartItemsContext from "../Contexts/CartItemsContext";

interface Product {
    brand: string,
    category: string,
    description: string,
    discountPercentage: number,
    id: number,
    images: string[],
    price: number,
    rating: number,
    stock: number,
    thumbnail: string,
    title: string
}

const BottomCategories = () => {
    const [products] = useContext(ProductContext);
    const [cartItems, setCartItems] = useContext(CartItemsContext);
    const [category, setCategory] = useState("smartphones");
    const categories = ["smartphones", "laptops", "fragrances", "skincare", "groceries", "home-decoration"];
    let i = 0;
    const addToItems = (product: Product) => {
        if (!cartItems.some(p => p.id === product.id))
            setCartItems([...cartItems, product]);
    }

    const results = products ? products.filter(products => products.category === category) : [];
    return <div className="bottom-categories">
        <h2>Todays Best Deals For You!</h2>
        <ul>
            {categories.map((c) => <li key={i++} onClick={() => setCategory(c)} className={c === category ? "selected" : ""}>
                {c}
            </li>)}
        </ul>
        <div className="category-items">
            {results.map((product) =>
                <div className="product" key={product.id}>
                    <div className="product-pic">
                        <img src={product.images[0]} alt="" />
                    </div>
                    <div className="name-and-prix">
                        <p className="name" title={product.title}>{product.title}</p>
                        <p className="prix">{product.price + "$"}</p>
                    </div>
                    <p className="produt-description" title={product.description}>
                        {product.description.slice(0, 150) + "..."}
                    </p>
                    <div className="rating">
                        <div className="stars">
                            <p>{product.rating}</p><RatingStarts rate={product.rating} />
                        </div>
                    </div>
                    <button className="add-button" onClick={() => addToItems(product)}>Add to card</button>
                </div>
            )}
        </div>
    </div>
}

export default BottomCategories;