import React, { useEffect, useState, useContext } from "react";
import { api } from "../../api/api";
import "./Historico.css";
import { GeralContext } from "../../context/GeralContext";

export function Historico() {
  const [pedidos, setPedidos] = useState([]);
  const [produtos, setProdutos] = useState({})
  const [user, setUser] = useState([]);

  useEffect(() => {
    const loggedUser = JSON.parse(localStorage.getItem("user"));
    if (loggedUser) {
        setUser(loggedUser);
    }
}, []);

useEffect(() => {
    

  if (user) {
  const fetchPedidos = async () => {
    try {
      const response = await api.get("/pedidos");
          const filterPedidos = response.data.filter(
            (pedidos) => pedidos.idUser === user.id
          );
      setPedidos(filterPedidos);

      const productIds = [...new Set(response.data.flatMap((pedido) => 
        pedido.itens.map((item) => item.idProduto)
      ))];
      const produtosData = {};
      await Promise.all(
        productIds.map(async (id) => {
          const produtoResponse = await api.get(`/produtos/${id}`);
          produtosData[id] = produtoResponse.data;
        })
      );

      setProdutos(produtosData);
    } catch (error) {
      console.error("Erro ao buscar pedidos ou produtos:", error);
    }
  }
  fetchPedidos();
  }
  },[user]);
  return (
    <main className="mainHistorico">
      <h1 className="tituloHistorico">Histórico de Pedidos</h1>
      <hr className="linhaHistorico" />
      <div className="nomeTitulo">
        <h3 className="pedidoHistorico">Pedido</h3>
        <h3 className="valorHistorico">Valor</h3>
        <h3>Quantidade</h3>
      </div>
      <div className="containerHistorico">
        {pedidos.length > 0 ? (
          pedidos.map((pedido) => (
            <div key={pedido.id} className="itemHistorico">
              <p>#{pedido.id}</p>
              <p>R$ {pedido.valorTotal.toFixed(2)}</p>
              <ul>
                {pedido.itens.map((item) => {
                  const produto = produtos[item.idProduto];
                 return produto ? (
                    <li key={item.idProduto}>
                      {item.quantidade}x
                    </li>
                  ) : (
                    <li key={item.idProduto}>Produto não encontrado</li>
                  );
                })}
              </ul>
            </div>
          ))
        ) : (
          <p>Você ainda não realizou nenhum pedido.</p>
        )}
      </div>
    </main>
  );
}

export default Historico;