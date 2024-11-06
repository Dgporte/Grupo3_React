import { useState, useContext } from 'react';
import './finalCompra.css';
import { GeralContext } from '../../context/GeralContext';

import { useEffect, useState } from 'react'
import { useHistory } from "react-router-dom";
import { api } from "../../api/api";
import './finalCompra.css'

export function FinalCompra () {
    const [checkSelecionado, setCheckSelecionado] = useState(null);
    const [valorTotal, setValorTotal] = useState("")
    const [quantidade, setQuantidade] = useState(0)
    const [pedidos, setPedidos] = useState([])
    

    useEffect(() => {
        getPedidos()
    }, [])

    const history = useHistory();

    const getUserId = () => {
        const id = JSON.parse(localStorage.getItem("user")).id
        return id;
    }

    const getPedidos = async() => {
            const id = getUserId();
            const response = await api.get("/pedidos");
            const pedidos = response.data.filter((invoice) => invoice.idUser === id);
            console.log(pedidos)
            setPedidos(pedidos);
    }

    const handleFinalizarCompra = async() => {
        try {
            const valorTotal = produto.reduce((total, item) => total + item.preco * item.quantidade, 0);
            const pedido = { 
                idUser:"idUsuario",
                valorTotal:valorTotal,
                itens:produto.map(item => ({
                    idProduto:item.id,
                    quantidade:item.quantidade
                }))
            }
          const response = await api.post('/pedidos', pedido);
          if (response.status === 201) {
            alert("Compra realizada com sucesso")
            history.push('/pedidos');
          }     
        } catch (error){
            alert("Ocorreu um erro")
        } 
    }

    const finalizarCompra = async() => {
        try {
          const valorTotal = produtos.reduce ((total, item) => total + item.preco * item.quantity,0);
          const pedido = {
            idUser:"idUsuario",
            valorTotal:valorTotal,
            itens:produtos.map(item => ({
              idProduto:item.id,
              quantidade:item.quantity
            }))
          };
          const response = await api.post('/pedidos',pedido);
          if(response.status === 201) {
            alert("Redirecionando para finalizar compra!");
            window.location.href = "/FinalCompra";
          }
        }catch(error){
          alert("Adicione produtos ao carrinho antes de finalizar a compra!");
        }
      }

    const calcularSubtotal = () => {
        console.log(carrinho);
        return carrinho.reduce((acc, item) => acc + item.preco * item.quantidade, 0);
    };

    return (
        <>
        <body className='bodyFinalizar'>
            <main>
        <div className='mainFinal'>
        <div className='produtoFinal'>
        <div className='tituloFinal'>
            <h3>Produtos</h3>
            {pedidos.map((pedido) => {
                <h1>{pedido.valorTotal}</h1>
            })}
            </div>
            <div className='subtotalFinal'>
                <h3>SUBTOTAL</h3> <h3 className='precoFinal'>R$</h3>
            </div>
        </div>
        <div className='termosFinal'>
            <h4>Informações importantes:</h4>
            <p>• Todos os itens são entregues apenas de forma digital por download ou créditos direto na conta e estão sujeitos à política de reembolso.</p>
            <p>• Verifique os requisitos de sistema na página de cada moeda e os Termos de Uso antes de realizar a compra.</p>
            <p>• Alguns itens possuem limite temporário de compra e podem levar em torno de 2 dias para poder fazer uma nova compra do mesmo item.</p>
            </div>
        </div>
        <div className='pagamentoFinal'>
            <div className='opcoesFinal'><h3>Formas de pagamento</h3></div>
            <div className='cartaoDeb'><input className='inputFinal2' checked={checkSelecionado === 0} onChange={() => handleCheckbocSelecionado(0)} type="checkbox" /><p>Cartao de Credito</p>
                <img className='mastercard1' src="src/img/mastercard-3.jpg" alt="" />
                <img className='visa1' src="src/img/visa.jpg" alt="" />
            </div>
            <div className='cartaoCre'><input className='input' checked={checkSelecionado === 1} onChange={() => handleCheckbocSelecionado(1)} type="checkbox" /><p>Cartao de Debito</p>
            <img className='mastercard2' src="src/img/mastercard-3.jpg" alt="" />
            <img className='visa2' src="src/img/visa.jpg" alt="" />
            </div>
            <div className='pix'><input className='input' checked={checkSelecionado === 2} onChange={() => handleCheckbocSelecionado(2)} type="checkbox" /><p>PIX</p>
            <img src="src/img/pixog.jpg" alt="" />
            </div>
            <div className='boleto'><input className='input' checked={checkSelecionado === 3} onChange={() => handleCheckbocSelecionado(3)} type="checkbox" /><p>Boleto</p>
                <img src="src/img/boleto-logo.png" alt="" />
            </div>
        </main>
        </body>
        
        </>
    )
    
}