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
                            <h3 style={{ position: "relative" }}>
                                CART
                                <span
                                    style={{
                                        color: "white",
                                        position: "absolute",
                                        right: "-24px",
                                        top: "-12px",
                                        backgroundColor: "black",
                                        borderRadius: "50%",
                                        width: "23px",
                                        height: "23px",
                                        display: "flex",
                                        justifyContent: "center",
                                    }}
                                >
                                    {Context.cart.length >= 0
                                        ? " " + Context.cart.length
                                        : ""}
                                </span>
                            </h3>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
