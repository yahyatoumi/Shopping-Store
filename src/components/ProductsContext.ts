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

const ProductContext = createContext<[Product[], (products: Product[]) => void]>([[], () => {}]);

export default ProductContext;