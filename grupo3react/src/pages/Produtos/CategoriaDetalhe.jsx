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
        setCryptocurrencies(response.data.produtos);
      } catch (error) {
        console.error('Erro ao buscar criptomoedas:', error);
      }
    };

    fetchCryptocurrencies();
  }, []);

  const filteredCryptos = cryptocurrencies.filter(crypto => crypto.categoria === categoria && crypto.quantidade > 0);

  return (
    <div className="categoria-detalhe">
      <h1>{categoria}</h1>
      <div className="produto-lista">
        {filteredCryptos.map((crypto) => (
          <Link key={crypto.id} to={`/produto/${crypto.id}`} className="produto-card">
            <img className='img' src={crypto.imgurl} alt={crypto.nome} />
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
  );
}

export default CategoriaDetalhe;