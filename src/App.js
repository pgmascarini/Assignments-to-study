import './App.css';
import Header from './components/commons/Header';
import Aboutme from './components/pages/Aboutme';
import Contact from './components/pages/Contact';
import Home from './components/pages/Home';
import Footer from './components/commons/Footer';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


const App = () => {
  return (
    <Router>

      <Header></Header>

      <Switch>
        <Route path="/aboutme">
          <Aboutme />
        </Route>
        <Route path="/contato">
          <Contact />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>

      <Footer></Footer>

    </Router>
  );
}


export default App;
