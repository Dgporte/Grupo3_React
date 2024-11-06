import { useState, useContext } from 'react';
import './finalCompra.css';
import { GeralContext } from '../../context/GeralContext';

export function FinalCompra() {
    const { carrinho } = useContext(GeralContext);  // Acessa o carrinho do contexto
    const [checkSelecionado, setCheckSelecionado] = useState(null);

    const handleCheckbocSelecionado = (index) => {
        setCheckSelecionado(index);
    };

    const calcularSubtotal = () => {
        console.log(carrinho);
        return carrinho.reduce((acc, item) => acc + item.preco * item.quantidade, 0);
    };

    return (
        <main>
            <div className='mainFinal'>
                <div className='produtoFinal'>
                    <div className='tituloFinal'>
                        <h3>Produtos</h3>
                    </div>

                    <ul>
                        {carrinho.map((item) => (
                            <li key={item.id} className='produtoItem'>
                                <span>{item.nome}</span>
                                <span>Quantidade: {item.quantidade}</span>
                                <span>Preço: R$ {item.preco.toLocaleString()}</span>
                            </li>
                        ))}
                    </ul>

                    <div className='subtotalFinal'>
                        <h3>SUBTOTAL</h3>
                        <h3 className='precoFinal'>R$ {calcularSubtotal().toLocaleString()}</h3>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default FinalCompra;
