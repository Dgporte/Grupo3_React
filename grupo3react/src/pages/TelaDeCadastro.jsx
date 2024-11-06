import { useState } from 'react'
import { api } from "../api/api";
import './cadastro.css'
import Login from './Login';
export function TelaDeCadastro() {
    const [nome, setNome] = useState("")
    const [email, setEmail] = useState("")
    const [senha, setSenha] = useState("")
    const [sucessMessage, setSucessMessage] = useState("");
    
    const handleSubmit = async (e) => {
        e.preventDefault();

        const newUser = {nome, email, senha}
    
        try {
            const response = await api.post("/users", newUser)
            setSucessMessage("Usuário cadastrado com sucesso!");
            setNome("");
            setEmail("");
            setSenha("");
        } catch (error) {
            console.error("Erro ao cadastrar usuário: ", error);
            setSucessMessage("Erro ao cadastrar usuário.");
        }
      }

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

    return (
        <>
            <main className='main'>
                <div className='form'>
                <div className='image'>
                    <img src="src/img/logo10.png" alt="" />
                </div>
                    <h1 className='cadastro'>Cadastro</h1>
                    <form onSubmit={handleSubmit} onReset={handleFormReset}>
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
                        {sucessMessage && (
                        <div className="message">
                        {sucessMessage}
                        </div>
                        )}
                        <button>Cadastrar</button>
                        <p className='labelButton'>Já possui cadastro? <a href="/login">Faça login!</a></p>
                                    </form>
                                </div>
                            </main>
                        </>
          ) 
}