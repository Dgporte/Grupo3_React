

import { BrowserRouter, Route, Switch } from 'react-router-dom/cjs/react-router-dom.min'

import './App.css'
import { TelaDeCadastro } from './pages/TelaDeCadastro'
import { FinalCompra } from './pages/finalCompra'


function App() {

  return (
    <>

    <BrowserRouter>
    <Switch>
      <Route exact path='/TelaDeCadastro' component={TelaDeCadastro}/>
      <Route exact path='/FinalCompra' component={FinalCompra}/>
    </Switch>
    </BrowserRouter>



    </>
  )
}

export default App
