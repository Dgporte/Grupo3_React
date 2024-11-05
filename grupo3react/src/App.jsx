

import { BrowserRouter, Route, Switch } from 'react-router-dom/cjs/react-router-dom.min'

import './App.css'
import { TelaDeCadastro } from './pages/TelaDeCadastro'
import { Carrinho } from './pages/Carrinho'
import { FinalCompra } from './pages/finalCompra'
import { Login } from "./pages/Login"

function App() {

  return (
    <>

    <BrowserRouter>
    <Switch>
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
