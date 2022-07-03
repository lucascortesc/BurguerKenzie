import { CartProduct } from "../CartProduct";
import "./style.css";

export const Cart = ({ cartProducts, setCartProducts }) => {
  const removerProduto = (index) => {
    setCartProducts(cartProducts.filter((product, i) => i !== index));
  };

  const total = () => {
    return cartProducts.reduce((acc, { price }) => acc + price, 0);
  };

  const removerTodos = () => {
    setCartProducts([]);
  };

  return (
    <div className="container__cart">
      <div className="cart__header">
        <p>Carrinho de compras</p>
      </div>
      <div className="cart">
        <ul className="vitrineCart">
          {cartProducts.length > 0 ? (
            cartProducts.map((product, index) => {
              return (
                <CartProduct
                  key={index}
                  product={product}
                  removerProduto={removerProduto}
                  index={index}
                />
              );
            })
          ) : (
            <div className="cart__empty">
              <h1>Sua sacola está vazia</h1>
              <p>Adicione itens</p>
            </div>
          )}
        </ul>
        {cartProducts.length > 0 && (
          <div>
            <div className="cart__total">
              <p>Total</p>
              <span>
                R${" "}
                {total().toLocaleString("pt-br", {
                  minimumFractionDigits: 2,
                })}
              </span>
            </div>
            <button
              className="cart__removerTodos"
              onClick={() => removerTodos()}
            >
              Remover todos
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
