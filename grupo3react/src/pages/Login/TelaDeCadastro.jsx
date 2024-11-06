import { useEffect, useState } from "react";
import { api } from "../api/api";
import { useHistory } from "react-router-dom";
import "./cadastro.css";

export function TelaDeCadastro() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [sucessMessage, setSucessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!nome || !email || !senha) {
      setErrorMessage("Todos os campos são obrigatórios.");
      setSucessMessage("");
      return;
    }
    const newUser = { nome, email, senha };

    try {
            const checkEmailResponse = await api.get("/users", {
                params: { email }
            });

            if (checkEmailResponse.data.length > 0) {
                setErrorMessage("Este e-mail já está em uso. Por favor, escolha outro.");
                setSucessMessage("");
                return;
            }
            
    const response = await api.post("/users", newUser);
      setSucessMessage("Usuário cadastrado com sucesso!");
      setErrorMessage("");
      setNome("");
      setEmail("");
      setSenha("");

      setTimeout(() => {
        history.push("/login");
    }, 1500);
    } catch (error) {
      console.error("Erro ao cadastrar usuário: ", error);
      setSucessMessage("Erro ao cadastrar usuário.");
      setSucessMessage("")
    }
  };

  const handleAdicionarNome = (e) => {
    setNome(e.target.value);
  };

  const handleAdicionarEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleAdicionarSenha = (e) => {
    setSenha(e.target.value);
  };

  const handleFormReset = () => {
    setNome("");
    setEmail("");
    setSenha("");
    setErrorMessage('');
  };

  return (
    <>
      <main className="main">
        <div className="form">
          <h1 className="cadastro">Cadastro</h1>
          <form onSubmit={handleSubmit} onReset={handleFormReset}>
            <label>Nome</label>
            <input
              value={nome}
              onChange={handleAdicionarNome}
              placeholder=" Digite seu nome"
              type="text"
            />
            <label>E-mail</label>
            <input
              value={email}
              onChange={handleAdicionarEmail}
              placeholder=" Digite seu e-mail"
              type="email"
              list="emails"
            />
            <datalist id="emails">
              <option value={`${email}@gmail.com`} />
              <option value={`${email}@yahoo.com`} />
              <option value={`${email}@icloud.com`} />
              <option value={`${email}@outlook.com`} />
              <option value={`${email}@hotmail.com`} />
            </datalist>
            <label>Senha</label>
            <input
              value={senha}
              onChange={handleAdicionarSenha}
              placeholder=" Digite sua senha"
              type="password"
            />
            {errorMessage && <div className="error-message">{errorMessage}</div>}
            {sucessMessage && <div className="messageCadastro">{sucessMessage}</div>}
            <button>Cadastrar</button>
            <p className="labelButton">
              Já possui cadastro? <a href="/login">Faça login!</a>
            </p>
          </form>
        </div>
      </main>
    </>
  );
}
