import "./style.css";

export const Product = ({ product, addProduct }) => {
  return (
    <li className="card">
      <div className="card__container-img">
        <img src={product.img} alt="" className="card__img" />
      </div>
      <div className="card__container-infos">
        <h1 className="card__name">{product.name}</h1>
        <p className="card__categoria">{product.category}</p>
        <p className="card__preco">
          R${" "}
          {product.price.toLocaleString("pt-br", {
            minimumFractionDigits: 2,
          })}
        </p>
        <button
          id={product.id}
          className="card__btnAdd"
          onClick={(event) => addProduct(event.target.id)}
        >
          Adicionar
        </button>
      </div>
    </li>
  );
};
