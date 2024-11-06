import { useState, useEffect, useContext } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import './descricao.css';  
import { GeralContext } from '../../context/GeralContext';
import { api } from '../../api/api';

export function DescricaoProdutos() {
    const { id } = useParams(); 
    const [produto, setProduto] = useState({
        id: "faba",
        nome: "Produto",
        imgUrl: "http://", 
        descricao: "descrição do produto",
        preco: 10,
        categoria: "alimento",
        quantidade: 1
    });

    const history = useHistory();
    const { carrinho, adicionarAoCarrinho: adicionarNoCarrinhoContext } = useContext(GeralContext);

    const [alerta, setAlerta] = useState("");
    const [avaliacao, setAvaliacao] = useState(""); 
    const [avaliacoes, setAvaliacoes] = useState([]); 

    useEffect(() => {
        getProduto();
    }, [id]);

    async function getProduto(){ 
        try {
            const response = await api.get(`/produtos/${id}`);
            setProduto(response.data);
        } catch (error) {
            console.error("Erro ao buscar o produto:", error);
        }
    }

    const handleVoltar = () => {
        history.push('/produto');
    };

    const handleAdicionarAoCarrinho = () => {
        adicionarNoCarrinhoContext(produto.id);  
        console.log("Carrinho atualizado:", carrinho);

        setAlerta("Produto adicionado ao carrinho!");

        setTimeout(() => {
            setAlerta("");
        }, 3000);
    };

    const handleAvaliacaoChange = (event) => {
        setAvaliacao(event.target.value); 
    };

    const handleEnviarAvaliacao = () => {
        if (avaliacao.trim() === "") {
            alert("Por favor, escreva uma avaliação.");
            return;
        }

        setAvaliacoes([...avaliacoes, avaliacao]); 
        setAvaliacao(""); 
    };

    if (!produto) return <p>Carregando...</p>;

    return (
        <main className="produto-detalhes">
            <div className="produto-container">
                <img src={produto.imgurl} alt={produto.nome} className="produto-imagem" />
                
                <h1>{produto.nome}</h1>
                <p className="descricao">{produto.descrição}</p>
                <p className="preco">Preço: R${produto.preco.toFixed(2)}</p>
                <p className="categoria">Categoria: {produto.categoria}</p>

                <button onClick={handleVoltar}>Voltar para a listagem</button>

                <button onClick={handleAdicionarAoCarrinho}>Adicionar ao Carrinho</button>

                {alerta && <div className="alerta">{alerta}</div>}

                <div className="campo-avaliacao">
                    <textarea
                        value={avaliacao}
                        onChange={handleAvaliacaoChange}
                        placeholder="Escreva sua avaliação"
                    />
                    <button onClick={handleEnviarAvaliacao}>Enviar Avaliação</button>
                </div>

                <div className="avaliacoes">
                    {avaliacoes.length > 0 ? (
                        <div>
                            <h3>Avaliações:</h3>
                            <ul>
                                {avaliacoes.map((avaliacao, index) => (
                                    <li key={index}>{avaliacao}</li>
                                ))}
                            </ul>
                        </div>
                    ) : (
                        <p>Não há avaliações ainda.</p>
                    )}
                </div>
            </div>
        </main>
    );
}  
