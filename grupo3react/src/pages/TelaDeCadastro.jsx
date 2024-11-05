import { useState } from 'react'
import './cadastro.css'
export function TelaDeCadastro() {
    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const [cadastro, setCadastro] = useState([])

    const handleAdicionarNome = (e) => {
        setNome(e.target.value);
    }

    const handleAdicionarEmail = (e) => {
        setEmail(e.target.value);
    }

    const handleAdicionarSenha = (e) => {
        setSenha(e.target.value);
    }

    const handleFormReset = () => {
        setNome('');
        setEmail('');
        setSenha('');
    }

    const handleFazerCadastro = (e) => {
        e.preventDefault();
        let cadastros = {
            nome,
            email,
            senha
        }
        setCadastro([...cadastro, cadastros]);
        handleFormReset();
        alert("Cadastro bem sucedido");
    }


    return (
        <>
            <main className='main'>
                <div className='form'>
                <div className='image'>
                    <img src="src/img/logo10.png" alt="" />
                </div>
                    <h1 className='cadastro'>Cadastro</h1>
                    <form onSubmit={handleFazerCadastro} onReset={handleFormReset}>
                        <label>Nome</label>
                        <input value={nome} onChange={handleAdicionarNome} placeholder=' Digite seu nome' type="text" />
                        <label>E-mail</label>
                        <input value={email} onChange={handleAdicionarEmail} placeholder=' Digite seu e-mail' type="email" list="emails"/>
                        <datalist id="emails">
                            <option value={`${email}@gmail.com`}/>
                            <option value={`${email}@yahoo.com`}/>
                            <option value={`${email}@icloud.com`}/>
                            <option value={`${email}@outlook.com`}/>
                            <option value={`${email}@hotmail.com`}/>
                        </datalist>
                                        <label>Senha</label>
                                        <input value={senha} onChange={handleAdicionarSenha} placeholder=' Digite sua senha' type="password" />
                                        <button>Cadastrar</button>
                                        <p className='labelButton'>Já possui cadastro? <a href="/login">Faça login!</a></p>
                                    </form>
                                </div>
                            </main>
                        </>
          ) 
}