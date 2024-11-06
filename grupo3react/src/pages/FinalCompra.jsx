
import { useState } from 'react'
import './finalCompra.css'

export function FinalCompra () {
const [checkSelecionado, setCheckSelecionado] = useState(null);


const handleCheckbocSelecionado = (index) => {
    setCheckSelecionado(index);
}

    return (
        <>
        <main>
        <div className='main'>
        <div className='produto'>
        <div className='titulo'>
            <h3>Produtos</h3>
            </div>
        <div className='cupom'>
            <h3>Possui um cupom de desconto ou voucher?</h3>
            <div className='seuCupom'>
            <input placeholder='DIGITE SEU CUPOM' type="text" /> <button className='remover'>REMOVER</button>
            </div>
            </div>
            <div className='subtotal'>
                <h3>SUBTOTAL</h3> <h3 className='preco'>R$</h3>
            </div>
        </div>
        <div className='termos'>
            <h4>Informações importantes:</h4>
            <p>• Todos os itens são entregues apenas de forma digital por download ou créditos direto na conta e estão sujeitos à política de reembolso.</p>
            <p>• Verifique os requisitos de sistema na página de cada moeda e os Termos de Uso antes de realizar a compra.</p>
            <p>• Alguns itens possuem limite temporário de compra e podem levar em torno de 2 dias para poder fazer uma nova compra do mesmo item.</p>
            </div>
        </div>
        <div className='pagamento'>
            <div className='opcoes'><h3>Formas de pagamento</h3></div>
            <div className='cartaoDeb'><input className='input' checked={checkSelecionado === 0} onChange={() => handleCheckbocSelecionado(0)} type="checkbox" /><p>Cartao de Credito</p>
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
            <div className='finalizar'><h3 className='valorT'>Valor Total</h3> <h3 className='real'>R$</h3></div>
            <button className='pagar'>Pagar</button>
        </div>
        </main>
        </>
    )
    
}