

import { BrowserRouter, Route, Switch } from 'react-router-dom/cjs/react-router-dom.min'

import './App.css'
import { TelaDeCadastro } from './pages/TelaDeCadastro'
import { Login } from "./pages/Login"


function App() {

  return (
    <>

    <BrowserRouter>
    <Switch>
      <Route exact path='/TelaDeCadastro' component={TelaDeCadastro}/>
      <Route exact path="/Login" component={Login}/>
    </Switch>
    </BrowserRouter>



    </>
  )
}

export default App
