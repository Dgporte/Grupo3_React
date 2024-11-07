import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import "./login.css";
import { api } from "../../api/api";
export function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [error, SetError] = useState("");
  const [sucessMessage, setSucessMessage] = useState("");

  // useEffect(() => {
  //   getallpost()
  // },[])

  const history = useHistory();

  function reloadPage() {
    window.location.reload();
  }

  // const getallpost = async () => {
  //   const response = await api.get('/users')
  //   setUsuario(response.data)
  // }

  const handleEnviar = async (e) => {
    e.preventDefault();
    try {
      const response = await api.get("/users", {
        params:{email:email, senha:senha}
      });
      if(response.status === 200) {
        if(response.data.length === 1) {
          const user = response.data[0];
          if(user.email === email && user.senha === senha) {
            setSucessMessage("Usuário logado com sucesso!");
            localStorage.setItem("user", JSON.stringify(user));
          }       setTimeout(() => {
            history.push("/");
            reloadPage();
        }, 1500);
          
        }  else {
            setSucessMessage("Email ou senha inválidos!");
          }
        }
        else {
          setSucessMessage("Email ou senha inválidos!");
        }
      }
      // else {
      //   setSucessMessage("Erro ao logar usuário!");
      // }
    
    catch (error) {
      setSucessMessage("Erro ao logar usuário!");
    }
  };

  return (
    <>
      <main className="main">
        <div className="form">
          <h1 className="titulo">Login</h1>
          <form onSubmit={handleEnviar}>
            <label>E-mail</label>
            <input className="inputLogin"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder=" Digite seu e-mail"
              type="email"
            />
            <label>Senha</label>
            <input className="inputLogin"
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
        <div className="message">
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
