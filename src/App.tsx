import Description from "./components/Description";
import Infos from "./components/Infos";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import TopCategories from "./components/TopCategories";
import Slides from "./components/Slides";
import BottomCategories from "./components/BottomCategories";
import ProductContext from "./Contexts/ProductsContext";
import CartItemsContext from "./Contexts/CartItemsContext";
import { useContext, useEffect, useState } from "react";
import { useQuery } from "react-query";
import fetchData from "./components/fetchData";
import Cart from "./components/Cart";

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

const App = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [cartItems, setCartItems] = useState<Product[]>([]);
  const { data } = useQuery<Product[]>("products", fetchData);
  useEffect(() => {
    if (data)
      setProducts(data)
  }, [data])


  return (
    <Router>
      <ProductContext.Provider value={[products, setProducts]}>
        <CartItemsContext.Provider value={[cartItems, setCartItems]}>
          <Routes>
            <Route>
              <Route path="/" element={
                <>
                  <Infos />
                  <Navbar />
                  <Description />
                  <TopCategories />
                  <Slides />
                  <BottomCategories />
                  <Cart />
                </>
              } />
            </Route>
          </Routes>
        </CartItemsContext.Provider>
      </ProductContext.Provider>
    </Router>
  );
}

export default App;
