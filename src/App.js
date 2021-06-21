import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import ShoppingStateContext from "./context/ShoppingState";
import Navbar from "./components/layout/Navbar.js";

import Products from "./components/layout/Products";
import Cart from "./components/Cart";
function App() {
    return (
        <ShoppingStateContext>
            <Router>
                <Switch>
                    <Route exact path="/">
                        <Navbar></Navbar>
                        <div className="container">
                            <Products></Products>
                        </div>
                    </Route>
                    <Route exact path="/cart">
                        <Cart />
                    </Route>
                </Switch>
            </Router>
        </ShoppingStateContext>
    );
}

export default App;
