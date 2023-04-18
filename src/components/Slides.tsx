import { useState, useEffect } from "react";
import { useQuery } from "react-query";
import fetchData from "./fetchData";
import RatingStarts from "./RatingStarts";

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
    const [products, setProducts] = useState<Product[]>();
    const { data } = useQuery<Product[]>("products", fetchData);
    useEffect(() => {
        if (data) {
            setProducts(data);
        }
    }, [data, products]);
    const rand = Math.floor(Math.random() * 23);
    return <div className="slides-container">
        <div className="slider">
            {products ? products.slice(rand, rand + 6).map((product) => (
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
                    <button className="add-button">Add to card</button>
                </div>
            )) : ""}
        </div>
    </div>
}

export default Slides;