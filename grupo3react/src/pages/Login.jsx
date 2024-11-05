import { useEffect, useState } from "react";
import "./login.css";
import { api } from "../api/api";
export function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [error, SetError] = useState("");
  const [sucessMessage, setSucessMessage] = useState("");

  useEffect(() => {
    getallpost()
  },[])

  const getallpost = async () => {
    const response = await api.get('/users')
    setUsuario(response.data)
  }

  const handleEnviar = async (e) => {
    e.prevenetDefault();
    try {
      console.log("teste:", email, senha)
      const response = await api.get("/users", {
        params:{email:email, senha:senha}
      });
      console.log("response:", response);
      if(response.status === 200) {
        if(response.data.length === 1) {
          const user = response.data[0];
          if(user.email === email && user.senha === senha) {
            setSucessMessage("Usuário logado com sucesso!");
          }
          else {
            setSucessMessage("Email ou senha incorreta!");
          }
        }
        else {
          setSucessMessage("Email ou senha incorreta!");
        }
      }
      else {
        setSucessMessage("Erro ao logar usuário!");
      }
    }
    catch (error) {
      setSucessMessage("Erro ao logar usuário!");
    }
  };
  // const handleFormReset = () => {
  //   setEmail("");
  //   setSenha("");
  // };
  return (
    <>
      <main className="main">
        <div className="form">
          <div className="image">
            <img src="src/img/logo10.png" alt="" />
          </div>
          <h1 className="titulo">Login</h1>
          <form onSubmit={handleEnviar}>
            <label>E-mail</label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder=" Digite seu e-mail"
              type="email"
              list="emails"
            />
            <datalist id="emails"></datalist>
            <label>Senha</label>
            <input
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              placeholder=" Digite sua senha"
              type="password"
            />
            <label className="checkbox">
              <input type="checkbox" />
              Manter conectado
            </label>
            {sucessMessage && (
        <div>
          {sucessMessage}
        </div>
      )}
            <button type="submit">Logar</button>
            <p>
              Ainda não tem um cadastro?{" "}
              <a href="/TelaDeCadastro">Clique aqui!</a>
            </p>
          </form>
        </div>
      </main>
    </>
  );
}
export default Login;
