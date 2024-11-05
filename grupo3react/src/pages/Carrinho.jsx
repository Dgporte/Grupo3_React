import React, { useEffect, useState } from 'react';
import './carrinho.css';
import produtosData from '../api/api';

export function Carrinho() {
    const [produtos, setProdutos] = useState([]);
    const [carrinho, setCarrinho] = useState([]);

    useEffect(() => {
        setProdutos(produtosData.produtos);
    }, []);

    const adicionarAoCarrinho = (produto) => {
        setCarrinho([...carrinho, produto]);
    };

    return (
        <main className="main">
            <div className="imagem">
                <img src="src/img/logo10.png" alt="" />
            </div>
            <div className="form">


                <h1 className="titulo">Carrinho</h1>

                <div className="form2">
                    <div className="produtos-container">
                        <h2 className="subtitulo">Produtos</h2>
                        <ul className="lista">
                            {produtos.map((produto) => (
                                <li
                                    key={produto.id}
                                    onClick={() => adicionarAoCarrinho(produto)}
                                    style={{ cursor: 'pointer', transition: 'transform 0.2s' }}
                                    onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                                    onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                                >
                                    <h3>{produto.nome}</h3>
                                    <p>Descrição: {produto.descrição}</p>
                                    <p>Preço: R$ {produto.preco.toLocaleString()}</p>
                                    <p>Categoria: {produto.categoria}</p>
                                    <p>Quantidade: {produto.quantidade}</p>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="carrinho-container">
                        <h2 className="subtitulo">Carrinho</h2>
                        <ul className="lista">
                            {carrinho.map((item, index) => (
                                <li key={index}>
                                    <h3>{item.nome}</h3>
                                    <p>Preço: R$ {item.preco.toLocaleString()}</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default Carrinho;
