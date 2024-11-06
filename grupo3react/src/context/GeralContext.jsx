import { createContext, useState } from "react";

const GeralContext = createContext({});

const GeralProvider = ({ children }) => {
  const [carrinho, setCarrinho] = useState([]);

  return (
    <GeralContext.Provider value={{ carrinho, setCarrinho }}>
      {children}
    </GeralContext.Provider>
  );
};

export { GeralContext, GeralProvider };
