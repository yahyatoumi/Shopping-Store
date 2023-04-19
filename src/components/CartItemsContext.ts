import { createContext } from "react";

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



const CartItemsContext = createContext<[Product[], (products: Product[]) => void]>([[{
    brand: "Apple",
    category: "smartphones",
    description :"An apple mobile which is nothing like apple",
    discountPercentage : 12.96,
    id : 1,
    images : ['https://i.dummyjson.com/data/products/1/1.jpg', 'https://i.dummyjson.com/data/products/1/2.jpg', 'https://i.dummyjson.com/data/products/1/3.jpg', 'https://i.dummyjson.com/data/products/1/4.jpg', 'https://i.dummyjson.com/data/products/1/thumbnail.jpg'],
    price : 549,
    rating :    4.69,
    stock : 94,
    thumbnail : "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
    title : "iPhone 9",
}], () => {}]);

export default CartItemsContext;

