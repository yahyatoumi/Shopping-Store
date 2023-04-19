import { useState, useEffect } from "react"
import { useQuery } from "react-query"
import fetchData from "./fetchData";
import RatingStarts from "./RatingStarts";
import ProductContext from "./ProductsContext";
import { useContext } from "react";

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
    const [category, setCategory] = useState("smartphones");
    const categories = ["smartphones", "laptops", "fragrances", "skincare", "groceries", "home-decoration"];
    let i = 0;

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
                    <button className="add-button">Add to card</button>
                </div>
            )}
        </div>
    </div>
}

export default BottomCategories;