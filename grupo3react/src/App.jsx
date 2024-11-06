

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './App.css'
import { TelaDeCadastro } from './pages/Login/TelaDeCadastro'
import Produto from './pages/Produtos/Produto'
import CategoriaDetalhe from "./pages/Produtos/CategoriaDetalhe";
import { Carrinho } from './pages/Carrinho/Carrinho'
import { FinalCompra } from './pages/Finalizar/FinalCompra'
import { Login } from "./pages/Login/Login"
import Navbar from './components/Navbar'
import { Home } from './pages/Home/Home';

function App() {

  return (
    <>

    <BrowserRouter>
    <Navbar />
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/Produto' component={Produto} />
      <Route path='/categoria/:categoria' component={CategoriaDetalhe} />
      <Route exact path='/TelaDeCadastro' component={TelaDeCadastro}/>    
      <Route exact path='/FinalCompra' component={FinalCompra}/>
      <Route exact path="/Login" component={Login}/>
      <Route exact path='/Carrinho' component={Carrinho}/>
    </Switch>
    </BrowserRouter>
    </>
  )
}

export default App
