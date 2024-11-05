import React, { useEffect, useState } from 'react';
import './carrinho.css';
import produtosData from '../api/api';

export function Carrinho() {
    const [produtos, setProdutos] = useState([]);

    useEffect(() => {
        // Carregando os produtos do JSON
        setProdutos(produtosData.produtos); // Acessando a lista de produtos
    }, []);

    return (
        <main className="main">
            <div className="imagem">
                <img src="src/img/logo10.png" alt=""/>
            </div>
        <div className="form">   
                 
            <h1 className="titulo">Carrinho</h1>
                
            <div className="form2">
                <h2 className="subtitulo">Produtos</h2>
                <ul className="lista">
                    {produtos.map((produto) => (
                        <li key={produto.id}>
                            <h3>{produto.nome}</h3>
                            <p>Descrição: {produto.descrição}</p>
                            <p>Preço: R$ {produto.preco.toLocaleString()}</p>
                            <p>Categoria: {produto.categoria}</p>
                            <p>Quantidade: {produto.quantidade}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
        </main>  
    );
}

export default Carrinho;
