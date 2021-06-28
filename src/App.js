import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import ProductList from "./page/ProductList";
import Cart from "./components/Cart/Cart";
import NavBar from "./components/NavBar";
import NotFound from "./page/NotFound";
import Modal from "./components/Modal";
import Details from "./page/Details";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/" component={ProductList} />
          <Route path="/details" component={Details} />
          <Route path="/cart" component={Cart} />
          <Route path="*" component={NotFound} />
          <Route />
        </Switch>
        <Modal />
      </Router>
    </>
  );
}

export default App;
