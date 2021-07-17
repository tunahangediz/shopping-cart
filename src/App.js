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
                    <div className="container">
                        <Route exact path="/">
                            <Navbar></Navbar>

                            <Products></Products>
                        </Route>
                        <Route exact path="/cart">
                            <Cart />
                        </Route>
                    </div>
                </Switch>
            </Router>
        </ShoppingStateContext>
    );
}

export default App;
