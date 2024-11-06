import { useState, useEffect, useContext } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import './descricao.css';  
import { GeralContext } from '../../context/GeralContext';
import { api } from '../../api/api';

export function DescricaoProdutos(){
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

    if (!produto) return <p>Carregando...</p>;

    return (
        <main className="produto-detalhes">
            <div className="produto-container">
                <img src={produto.imgUrl} alt={produto.nome} className="produto-imagem" />
                <h1>{produto.nome}</h1>
                <p className="descricao">{produto.descricao}</p>
                <p className="preco">Preço: R${produto.preco.toFixed(2)}</p>
                <p className="categoria">Categoria: {produto.categoria}</p>

                <button onClick={handleVoltar}>Voltar para a listagem</button>

                <button onClick={handleAdicionarAoCarrinho}>Adicionar ao Carrinho</button>

                {/* Exibe o alerta se houver mensagem */}
                {alerta && <div className="alerta">{alerta}</div>}
            </div>
        </main>
    );
}

