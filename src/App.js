import Header from './components/commons/header/Header';
import Home from './components/pages/home/Home';
import Footer from './components/commons/footer/Footer';
import Notfound from './components/pages/page-not-found/Notfound';
import Private from './components/pages/private/Private';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <Router>

      <Header />

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/private">
          <Private />
        </Route>
        <Route>
          <Notfound />
        </Route>
      </Switch>

      <Footer />

    </Router>
  );
}


export default App;
