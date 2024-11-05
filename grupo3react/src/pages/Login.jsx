import { useState } from "react";
import "./login.css";
export function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [error, SetError] = useState("");

  const handleEnviar = (e) => {
    e.prevenetDefault();
    if (!email || !senha) {
      SetError("Por favor, preencha todos os campos");
      return;
    }
    console.log("Email:", email);
    console.log("Senha:", senha);
    SetError("");
  };
  const handleAdicionarEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleAdicionarSenha = (e) => {
    setSenha(e.target.value);
  };
  const handleFormReset = () => {
    setEmail('');
    setSenha('');
}
  return (
    <>
      <main className="main">
      <div className='form'>
        <div className="image">
          <img src="src/img/logo10.png" alt="" />
        </div>
        <h1 className="titulo">Login</h1>
        <form onSubmit={handleEnviar} onReset={handleFormReset}>
            <label>E-mail</label>
            <input value={email} onChange={handleAdicionarEmail} placeholder=' Digite seu e-mail' type="email" list="emails"/>
            <datalist id="emails">
            </datalist>
            <label>Senha</label>
            <input value={senha} onChange={handleAdicionarSenha} placeholder=' Digite sua senha' type="password" />
            <label className="checkbox">
            <input type="checkbox"/>
            Manter conectado
            </label>
            <button>Logar</button>
        <p>Ainda não tem um cadastro? <a href="/TelaDeCadastro">Clique aqui!</a></p>
        </form>
        </div>
      </main>
    </>
  );
}
export default Login;