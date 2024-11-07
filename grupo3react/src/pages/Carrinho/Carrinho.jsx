import React, { useEffect, useState, useContext } from "react";
import "./carrinho.css";
import { GeralContext } from "../../context/GeralContext";
import { api } from "../../api/api";

export function Carrinho() {
  const { carrinho, setCarrinho } = useContext(GeralContext);
  const [produtosDetalhados, setProdutosDetalhados] = useState([]);
  const [erro, setErro] = useState(null);

  useEffect(() => {
    if (carrinho.length === 0) {
      setProdutosDetalhados([]);
    } else {
      const fetchProdutosDetalhados = async () => {
        try {
          const detalhes = await Promise.all(
            carrinho.map(async (item) => {
              const response = await api.get(`/produtos/${item.id}`);
              return { ...response.data, quantidade: item.quantidade };
            })
          );
          setProdutosDetalhados(detalhes.filter(Boolean));
        } catch (error) {
          console.error("Erro ao buscar detalhes dos produtos:", error);
          setErro("Falha ao carregar os produtos. Tente novamente mais tarde.");
        }
      };
      fetchProdutosDetalhados();
    }
  }, [carrinho]);

  const calcularTotal = () => {
    return produtosDetalhados.reduce(
      (acc, item) => acc + item.preco * item.quantidade,
      0
    );
  };

  const limparCarrinho = () => {
    setCarrinho([]);
  };

  const finalizarCompra = () => {
    if (carrinho.length === 0) {
      alert("Adicione produtos ao carrinho antes de finalizar a compra!");
    } else {
      alert("Compra finalizada com sucesso!");
      setTimeout(() => {
        window.location.href = "/produto";
        // limparCarrinho();
      }, 1500);
    }
  };

  const removerProduto = (id) => {
    setCarrinho(carrinho.filter(item => item.id !== id));
  };

  useEffect(() => {
    console.log("Carrinho após limpeza:", carrinho);
  }, [carrinho]);

  return (
    <main className="main">
      <div className="form">
        <div className="carrinho-container">
          <h2 className="subtitulo">Carrinho</h2>

          {erro && <div className="erro">{erro}</div>}

          {produtosDetalhados.length === 0 ? (
            <p>Carrinho vazio. Adicione produtos para continuar.</p>
          ) : (
            <ul className="lista">
              {produtosDetalhados.map((item, index) => (
                <li
                  key={index}
                  onClick={() => removerProduto(item.id)}
                  style={{
                    cursor: "pointer",
                    transition: "transform 0.2s",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
                  onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
                >
                  <div className="item-info">
                    <h3>{item.nome}</h3>
                    <p>Preço: R$ {item.preco.toFixed(2)}</p>
                    <p>
                      Total: R$ {(item.preco * item.quantidade).toFixed(2)}
                    </p>
                  </div>
                  <div className="quantidade-container">
                    <p>Quantidade: {item.quantidade}</p>
                  </div>
                </li>
              ))}
            </ul>
          )}

          <div className="total-container">
            <h3 className="total">
              Total: R$ {calcularTotal().toFixed(2)}
            </h3>
          </div>

          <button
            className="limpar-carrinho"
            onClick={limparCarrinho}
            style={{ cursor: "pointer", transition: "transform 0.2s" }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.transform = "scale(1.05)")}
            onMouseLeave={(e) =>
              (e.currentTarget.style.transform = "scale(1)")}
          >
            Limpar Carrinho
          </button>

          <button
            className="finalizar-compra"
            onClick={finalizarCompra}
            style={{ cursor: "pointer", transition: "transform 0.2s" }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.transform = "scale(1.05)")}
            onMouseLeave={(e) =>
              (e.currentTarget.style.transform = "scale(1)")}
          >
            Finalizar Compra
          </button>
        </div>
      </div>
    </main>
  );
}

export default Carrinho;
