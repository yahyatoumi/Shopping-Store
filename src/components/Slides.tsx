import { useState, useEffect } from "react";
import { useQuery } from "react-query";
import fetchData from "./fetchData";

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
            if (products)
                console.log("hihi", products[0]?.title.slice(5))
            console.log("hoho", products);
        }
    }, [data, products]);
    return <div className="slides-container">
        <div className="slider">
            {products ? products.slice(0, 6).map((product) => (
                <div className="product">
                    <div className="product-pic">
                        <img src="https://uploads-ssl.webflow.com/63e857eaeaf853471d5335ff/63e8c4e7e006821d3b04db74_Tote%20Medium-min.png" alt="" />
                    </div>
                    <div className="name-and-prix">
                        <p className="name">{product.title}</p>
                        <p className="prix">{product.price + "$"}</p>
                    </div>
                    <div className="produt-description">
                        {product.description}
                    </div>
                    <div className="rating">
                        <div className="stars">*****</div>
                        <p className="n-of-votes">
                            {"(121)"}
                        </p>
                    </div>
                    <button className="add-button">Add to card</button>
                </div>
            )) : ""}
        </div>
    </div>
}

export default Slides;