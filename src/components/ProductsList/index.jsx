import { Product } from "../Product";
import "./style.css";

export const ProductList = ({ products, cart, setCart }) => {
  const addProduct = (idProduct) => {
    if (!cart.find(({ id }) => id === Number(idProduct))) {
      setCart([
        ...cart,
        ...products.filter((product) => product.id === Number(idProduct)),
      ]);
    }
  };

  return (
    <ul className="vitrineProducts">
      {products.map((product) => {
        return (
          <Product product={product} addProduct={addProduct} key={product.id} />
        );
      })}
    </ul>
  );
};
