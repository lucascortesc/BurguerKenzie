import { useState } from "react";
import "./style.css";

export const Header = ({ products, setFiltredProducts }) => {
  const [inputValue, setInputValue] = useState("");

  const filter = () => {
    if (inputValue) {
      const productFilter = inputValue
        .toLowerCase()
        .trim()
        .normalize("NFD")
        .replace(/[^a-zA-Zs]/g, "");

      setFiltredProducts(
        products.filter(({ name, category }) => {
          if (
            name
              .toLowerCase()
              .normalize("NFD")
              .replace(/[^a-zA-Zs]/g, "")
              .includes(productFilter) ||
            category
              .toLowerCase()
              .normalize("NFD")
              .replace(/[^a-zA-Zs]/g, "")
              .includes(productFilter)
          ) {
            return true;
          }
          return false;
        })
      );
    } else {
      setFiltredProducts(products);
    }
  };

  return (
    <div className="header__container">
      <h1>
        Burguer <span>Kenzie</span>
      </h1>
      <div className="header__container-pesquisa">
        <input
          onChange={(event) => setInputValue(event.target.value)}
          type="text"
          placeholder="Digitar pesquisa"
        />
        <button onClick={() => filter()}>Pesquisar</button>
      </div>
    </div>
  );
};
