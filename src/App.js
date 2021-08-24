import Header from './components/commons/header/Header';
import Home from './components/pages/home/Home';
import Footer from './components/commons/footer/Footer';
import Notfound from './components/pages/page-not-found/Notfound';
import Private from './components/pages/private/Private';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import Estudantes from './components/pages/private/estudantes/Estudantes';
import { useState } from 'react';

const App = () => {

const [isLogedState, setIsLogedState] = useState(false)

  return (
    <Router>

      <Header estaLogado={isLogedState} mudarEstadoLogado={setIsLogedState} />

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/private/estudantes">
         {isLogedState ? <Estudantes /> : <Redirect to="/private" />}
        </Route>
        <Route exact path="/private">
          <Private estaLogado={isLogedState} mudarEstadoLogado={setIsLogedState} />
        </Route>
        <Route>
          <Notfound />
        </Route>
      </Switch>

      <Footer estaLogado={isLogedState} mudarEstadoLogado={setIsLogedState}/>

    </Router>
  );
}


export default App;
