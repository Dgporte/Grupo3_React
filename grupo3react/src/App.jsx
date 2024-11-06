

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './App.css'
import { TelaDeCadastro } from './pages/TelaDeCadastro'
import Produto from './pages/Produtos/Produto'
import CategoriaDetalhe from "./pages/Produtos/CategoriaDetalhe";


function App() {

  return (
    <>

    <BrowserRouter>
    <Switch>
      <Route exact path='/TelaDeCadastro' component={TelaDeCadastro}/>
      <Route exact path='/Produto' component={Produto} />
      <Route path='/categoria/:categoria' component={CategoriaDetalhe} />
    </Switch>
    </BrowserRouter>



    </>
  )
}

export default App
