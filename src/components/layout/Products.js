import React, { useContext } from "react";
import shoppingContext from "../../context/shoppingContext";
import Product from "./Product";
const Products = () => {
    const ShoppingContext = useContext(shoppingContext);

    return (
        <div className="grid-2">
            {ShoppingContext.products.map((product) => (
                <Product key={Math.random() * 100} product={product}></Product>
            ))}
        </div>
    );
};

export default Products;
