import React, { createContext, useState } from 'react';

export const GeralContext = createContext();

export const GeralProvider = ({ children }) => {
    const [carrinho, setCarrinho] = useState([]);

    const adicionarAoCarrinho = (produto) => {
        const produtoExistente = carrinho.find(item => item.id === produto.id);

        if (produtoExistente) {
            setCarrinho((prevCarrinho) =>
                prevCarrinho.map(item => 
                    item.id === produto.id ? { ...item, quantidade: item.quantidade + 1 } : item
                )
            );
        } else {
            setCarrinho((prevCarrinho) => [...prevCarrinho, { ...produto, quantidade: 1 }]);
        }
    };

    return (
        <GeralContext.Provider value={{ carrinho, adicionarAoCarrinho }}>
            {children}
        </GeralContext.Provider>
    );
};
