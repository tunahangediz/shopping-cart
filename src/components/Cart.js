import React, { useContext } from "react";
import Navbar from "./layout/Navbar";

import context from "../context/shoppingContext";

function Cart() {
    const Context = useContext(context);
    return (
        <div>
            <Navbar />
            <div className="container grid-2">
                {Context.cart.map((item) => (
                    <div key={Math.random() * 100} className="product">
                        <img
                            src={item.img}
                            style={{
                                maxWidth: "250px",
                                width: "100%",
                                maxHeight: "400px",
                            }}
                            alt="img"
                        />
                        <div className="flex flex-column gap-2 content-center">
                            <strong>{item.name}</strong>
                            <div>
                                <strong>Total Price: ₺</strong>{" "}
                                {(item.amount * item.price).toFixed(2)}
                            </div>

                            <div
                                className={
                                    "primary-orange flex align-center content-between"
                                }
                                style={{
                                    width: "150px",
                                    background: "#C9C1B1",
                                }}
                            >
                                <button
                                    onClick={() => Context.decrement(item)}
                                    className="btn-primary"
                                    style={{
                                        width: "100%",
                                        maxWidth: "50px",
                                        background: "#C9C1B1",
                                        border: "none",
                                        borderRight: "1px solid black",
                                    }}
                                >
                                    <strong>
                                        <h1>-</h1>
                                    </strong>
                                </button>

                                <strong>{item.amount}</strong>

                                <button
                                    onClick={() => Context.increment(item)}
                                    className="btn-primary"
                                    style={{
                                        width: "100%",
                                        maxWidth: "50px",
                                        background: "#C9C1B1",
                                        border: "none",
                                        borderLeft: "1px solid black",
                                    }}
                                >
                                    <strong>
                                        <h1>+</h1>
                                    </strong>
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Cart;
