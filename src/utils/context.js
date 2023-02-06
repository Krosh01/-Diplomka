import { createContext, useState } from "react";
import axios from "axios";

export const CustomContext = createContext();

const Context = (props) => {
  const [category, setCategory] = useState("");
  const [basket, setBasket] = useState(false);
  const [activ, setActiv] = useState(false);
  const [price, setPrice] = useState(1);
  const [burger, setBurger] = useState(false);
  const [products, setProducts] = useState({ data: [], error: "" });

  const getProducts = () => {
    axios(`http://localhost:4444/task`)
      .then(({ data }) => setProducts({ ...products, data: data }))
      .catch((error) => setProducts({ ...products, error: error }));
  };

  const value = {
    setCategory,
    getProducts,
    setBasket,
    setActiv,
    setPrice,
    setBurger,
    setProducts,
    category,
    burger,
    activ,
    basket,
    price,
  };

  return (
    <CustomContext.Provider value={value}>
      {props.children}
    </CustomContext.Provider>
  );
};

export default Context;
