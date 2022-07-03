import "./style.css";

export const CartProduct = ({ product, removerProduto, index }) => {
  const abreviarNome = (name) => {
    return name.length > 15 ? name.slice(0, 15) + "..." : name;
  };

  return (
    <li className="card__cart" id={product.name}>
      <div className="card__cart-containerImg">
        <img src={product.img} alt="" className="card__cart-img" />
      </div>
      <div className="card__cart-container-infos">
        <h1 className="card__cart-name">{abreviarNome(product.name)}</h1>
        <p className="card__cart-categoria">{product.category}</p>
      </div>
      <p
        id={product.id}
        className="card__cart-remove"
        onClick={() => removerProduto(index)}
      >
        Remover
      </p>
    </li>
  );
};
