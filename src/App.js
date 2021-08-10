import Header from './components/commons/header/Header';
import Home from './components/pages/Home';
import Footer from './components/commons/footer/Footer';
import Notfound from './components/pages/Notfound';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


const App = () => {
  return (
    <Router>

      <Header />

      <Switch>
        <Route exact path="/">
          <Home />
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
