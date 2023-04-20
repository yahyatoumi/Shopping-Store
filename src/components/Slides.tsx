import { useContext } from "react";
import RatingStarts from "./RatingStarts";
import ProductContext from "./ProductsContext";
import CartItemsContext from "./CartItemsContext";

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


const Slides = () => {
    const [products] = useContext(ProductContext)
    const [cartItems, setCartItems] = useContext(CartItemsContext);

    const addToItems = (product: Product) => {
        if (!cartItems.some(p => p.id === product.id))
            setCartItems([...cartItems, product]);
    }
    // const rand = Math.floor(Math.random() * 23);
    return <div className="slides-container">
        <div className="slider">
            {products ? products.slice(0, 6).map((product) => (
                <div className="product" key={product.id}>
                    <div className="product-pic">
                        <img src={product.images[0]} alt="" />
                    </div>
                    <div className="name-and-prix">
                        <p className="name">{product.title}</p>
                        <p className="prix">{product.price + "$"}</p>
                    </div>
                    <p className="produt-description" title={product.description}>
                        {product.description.slice(0, 150) + "..."}
                    </p>
                    <div className="rating">
                        <div className="stars">
                            <p>{product.rating}</p><RatingStarts rate={product.rating}/>
                        </div>
                    </div>
                    <button className="add-button" onClick={() => {addToItems(product)}}>Add to card</button>
                </div>
            )) : ""}
        </div>
    </div>
}

export default Slides;