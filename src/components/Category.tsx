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

const Category: React.FC<{ products: Product[] }> = (props) => {
    if (props.products.length === 0)
        return <h1 className="card-items">loding...</h1>
    return <div className="category-card">
        <h1>Popular Categories</h1>
        <div className="card-items">
            {
                props.products.map((product) => (
                    <div className="card" key={product.id}>
                        <img src={product.images[0]} alt="" />
                        <div className="details">
                            <h3 className="type">{product.category.charAt(0).toUpperCase() + product.category.slice(1)}</h3>
                            <p className="type">{product.stock + " Item Available"}</p>
                        </div>
                    </div>
                ))
            }
        </div>
    </div>
}
export default Category;