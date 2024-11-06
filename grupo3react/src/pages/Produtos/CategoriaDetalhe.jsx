import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import './produto.css';

function CategoriaDetalhe() {
  const { categoria } = useParams();
  const [cryptocurrencies, setCryptocurrencies] = useState([]);

  useEffect(() => {
    const fetchCryptocurrencies = async () => {
      try {
        const response = await axios.get('http://localhost:3000/produtos');
        setCryptocurrencies(response.data)
        console.log("eeeee", response.data)
      } catch (error) {
        console.error('Erro ao buscar criptomoedas:', error);
      }
    };

    fetchCryptocurrencies();
  }, []);

  const filteredCryptos = cryptocurrencies.filter(crypto => crypto.categoria === categoria && crypto.quantidade > 0);

  return (
    <main className='bodyCategoriaDetalhe'>
    <div className="categoria-detalhe">
      <h1>{categoria}</h1>
      <br />
      <br />
      <div className="produto-categorias">
        <Link to="/categoria/Reserva de Valor">Criptomoedas de Reserva de Valor</Link>
        <Link to="/categoria/Inteligentes e dApps">Plataformas para Contratos Inteligentes e dApps</Link>
        <Link to="/categoria/Exchanges">Criptomoedas de Exchanges</Link>
        <Link to="/categoria/Transferências e Pagamentos">Criptomoedas para Transferências e Pagamentos</Link>
        <Link to="/categoria/Dados Externos">Oráculos e Dados Externos para Contratos Inteligentes</Link>
      </div>
      <div className="produto-lista">
        {filteredCryptos.map((crypto) => (
          <Link key={crypto.id} to={`/produto/${crypto.id}`} className="produto-card">
            <img className='img' src={crypto.imgurl} alt={crypto.nome}  style={{ width: '100%', height: '55%' }} />
            <h2>{crypto.nome}</h2>
            <div className="produto-info">
              <p className="produto-descricao">{crypto.descrição}</p>
              <p className="produto-preco">Preço: <strong>{crypto.preco.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</strong></p>
              <p className="produto-estoque">Estoque: <strong>{crypto.quantidade}</strong> unidades</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
    </main>
  );
}

export default CategoriaDetalhe;