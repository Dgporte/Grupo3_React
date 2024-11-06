import React, { useEffect, useState } from "react";
import "./carrinho.css";
import { useContext } from "react";
import { GeralContext } from "../context/GeralContext";

export function Carrinho() {
  const { produtos, setProdutos, carrinho, setCarrinho } =
    useContext(GeralContext);

  const removerDoCarrinho = (produtoId) => {
    const produtoRemovido = carrinho.find((item) => item.id === produtoId);
    setCarrinho(carrinho.filter((item) => item.id !== produtoId));
    setProdutos(
      produtos.map((item) =>
        item.id === produtoId
          ? {
              ...item,
              quantidade: item.quantidade + produtoRemovido.quantidade,
            }
          : item
      )
    );
  };

  const atualizarQuantidade = (produtoId, novaQuantidade) => {
    setCarrinho(
      carrinho.map((item) =>
        item.id === produtoId ? { ...item, quantidade: novaQuantidade } : item
      )
    );
  };

  const calcularTotal = () => {
    return carrinho.reduce(
      (acc, item) => acc + item.preco * item.quantidade,
      0
    );
  };

  const limparCarrinho = () => {
    carrinho.forEach((item) => {
      setProdutos((prevProdutos) =>
        prevProdutos.map((produto) =>
          produto.id === item.id
            ? { ...produto, quantidade: produto.quantidade + item.quantidade }
            : produto
        )
      );
    });
    setCarrinho([]);
  };

  const finalizarCompra = () => {
    if (carrinho.length === 0) {
      alert("Adicione produtos ao carrinho antes de finalizar a compra!");
    } else {
      alert("Compra finalizada com sucesso!");
      limparCarrinho();
      window.location.href = "/produtos";
    }
  };

  return (
    <main className="main">
      <div className="imagem">
        <img src="src/img/logo10.png" alt="" />
      </div>
      <div className="form">
        <div className="carrinho-container">
          <h2 className="subtitulo">Carrinho</h2>
          <ul className="lista">
            {carrinho.map((item, index) => (
              <li key={index} onClick={() => removerDoCarrinho(item.id)}>
                <div className="item-info">
                  <h3>{item.nome}</h3>
                  <p>Preço: R$ {item.preco.toLocaleString()}</p>
                  <p>
                    Total: R$ {(item.preco * item.quantidade).toLocaleString()}
                  </p>
                </div>
                <div className="quantidade-container">
                  <input
                    type="number"
                    min="1"
                    value={item.quantidade}
                    onClick={(e) => e.stopPropagation()}
                    onChange={(e) =>
                      atualizarQuantidade(item.id, parseInt(e.target.value))
                    }
                    style={{ width: "50px", marginTop: "5px" }}
                  />
                </div>
              </li>
            ))}
          </ul>
          <div className="total-container">
            <h3 className="total">
              Total: R$ {calcularTotal().toLocaleString()}
            </h3>
          </div>
          <button
            className="limpar-carrinho"
            onClick={limparCarrinho}
            style={{ cursor: "pointer", transition: "transform 0.2s" }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.transform = "scale(1.05)")
            }
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
          >
            Limpar Carrinho
          </button>
          <button
            className="finalizar-compra"
            onClick={finalizarCompra}
            style={{ cursor: "pointer", transition: "transform 0.2s" }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.transform = "scale(1.05)")
            }
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
          >
            Finalizar Compra
          </button>
        </div>
      </div>
    </main>
  );
}

export default Carrinho;
