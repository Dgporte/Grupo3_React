

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './App.css'
import { TelaDeCadastro } from './pages/TelaDeCadastro'
import Produto from './pages/Produtos/Produto'
import CategoriaDetalhe from "./pages/Produtos/CategoriaDetalhe";
import { Carrinho } from './pages/Carrinho'
import { FinalCompra } from './pages/finalCompra'
import { Login } from "./pages/Login"

function App() {

  return (
    <>

    <BrowserRouter>
    <Switch>
      <Route exact path='/TelaDeCadastro' component={TelaDeCadastro}/>
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
