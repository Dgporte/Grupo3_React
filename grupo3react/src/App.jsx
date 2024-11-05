

import { BrowserRouter, Route, Switch } from 'react-router-dom/cjs/react-router-dom.min'

import './App.css'
import { TelaDeCadastro } from './pages/TelaDeCadastro'
import { Carrinho } from './pages/Carrinho'


function App() {

  return (
    <>

    <BrowserRouter>
    <Switch>
      <Route exact path='/TelaDeCadastro' component={TelaDeCadastro}/>
      <Route exact path='/Carrinho' component={Carrinho}/>
    </Switch>
    </BrowserRouter>



    </>
  )
}

export default App
