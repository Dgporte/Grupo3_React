

import { BrowserRouter, Route, Switch } from 'react-router-dom/cjs/react-router-dom.min'

import './App.css'
import { TelaDeCadastro } from './pages/TelaDeCadastro'


function App() {

  return (
    <>

    <BrowserRouter>
    <Switch>
      <Route exact path='/TelaDeCadastro' component={TelaDeCadastro}/>
    </Switch>
    </BrowserRouter>



    </>
  )
}

export default App
