import { useContext, useRef, useState, useEffect } from "react";
import RatingStarts from "./RatingStarts";
import ProductContext from "../Contexts/ProductsContext";
import CartItemsContext from "../Contexts/CartItemsContext";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai"
import { motion } from "framer-motion"

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
    const [sliderWidth, setSliderWidth] = useState(0);
    const slider = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        slider.current ? setSliderWidth(slider.current.scrollWidth - slider.current.offsetWidth) : setSliderWidth(0)
    }, [])

    const addToItems = (product: Product) => {
        if (!cartItems.some(p => p.id === product.id))
            setCartItems([...cartItems, product]);
    }

    const handleScrollLeft = () => {
        if (slider.current) {
            slider.current.scrollLeft -= slider.current.offsetWidth - 50;
        }
    }

    const handleScrollRight = () => {
        if (slider.current) {
            slider.current.scrollLeft += slider.current.offsetWidth - 50;
        }
    }
    // const rand = Math.floor(Math.random() * 23);
    return (
        <div className="slides-container" ref={slider}>
            <div className="slider">
                <AiOutlineLeft className="left-button" onClick={handleScrollLeft} />
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
                                <p>{product.rating}</p><RatingStarts rate={product.rating} />
                            </div>
                        </div>
                        <button className="add-button" onClick={() => { addToItems(product) }}>Add to card</button>
                    </div>
                )) : ""}
                <AiOutlineRight className="right-button" onClick={handleScrollRight} />
            </div>
        </div>
    );
}

export default Slides;