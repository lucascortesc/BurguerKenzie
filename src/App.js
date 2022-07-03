import { Header } from "./components/Header";
import { useEffect, useState } from "react";
import { ProductList } from "./components/ProductsList";
import { Cart } from "./components/Cart";
import "./App.css";

function App() {
  const [products, setProducts] = useState([]);
  const [filtredProducts, setFiltredProducts] = useState([]);
  const [cartProducts, setCartProducts] = useState([]);

  useEffect(() => {
    fetch("https://hamburgueria-kenzie-json-serve.herokuapp.com/products")
      .then((res) => res.json())
      .then((res) => setProducts(res));
  }, []);

  useEffect(() => {
    setFiltredProducts(products);
  }, [products]);

  return (
    <div className="App">
      <Header products={products} setFiltredProducts={setFiltredProducts} />
      <div className="cointeiner__main">
        <ProductList
          products={filtredProducts}
          cart={cartProducts}
          setCart={setCartProducts}
        />
        <Cart cartProducts={cartProducts} setCartProducts={setCartProducts} />
      </div>
    </div>
  );
}

export default App;
