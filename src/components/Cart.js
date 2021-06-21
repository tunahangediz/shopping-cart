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
                            style={{ width: "200px" }}
                            alt="img"
                        />
                        <div className="flex flex-column gap-2 content-center">
                            <h1>{item.name}</h1>
                            <h1>
                                <strong>Total Price: ₺</strong>{" "}
                                {(item.amount * item.price).toFixed(2)}
                            </h1>
                            <h1>
                                <strong>Amount:</strong>
                                {item.amount}
                            </h1>
                            <div>
                                <button
                                    onClick={() => Context.decrement(item)}
                                    className="btn-primary"
                                    style={{
                                        width: "50px",
                                    }}
                                >
                                    <strong>
                                        <h1>-</h1>
                                    </strong>
                                </button>

                                <button
                                    onClick={() => Context.increment(item)}
                                    className="btn-primary"
                                    style={{
                                        width: "50px",
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
