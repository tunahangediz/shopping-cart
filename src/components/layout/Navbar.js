import React, { useContext } from "react";
import { Link } from "react-router-dom";
import context from "../../context/shoppingContext";

const Navbar = () => {
    const Context = useContext(context);

    return (
        <div className="navbar bg-primary">
            <Link to="/">
                {" "}
                <h1 style={{ color: "black" }}>SHOPPİNG</h1>
            </Link>
            <div>
                <ul>
                    <li>
                        <Link to="/">
                            <h3>HOME</h3>
                        </Link>
                    </li>
                    <li>
                        <Link to="/cart">
                            <h3>
                                CART
                                <strong style={{ color: "tomato" }}>
                                    {Context.cart.length > 0
                                        ? " " + Context.cart.length
                                        : ""}
                                </strong>
                            </h3>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
