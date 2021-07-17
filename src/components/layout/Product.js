import { useContext } from "react";
import shoppingContext from "../../context/shoppingContext";
const Product = ({ product }) => {
    const ShoppingContext = useContext(shoppingContext);

    return (
        <div className="product ">
            <img
                src={product.image}
                style={{ maxWidth: "250px", width: "100%", maxHeight: "400px" }}
                alt=""
            />

            <div className="flex flex-column gap-4 content-center">
                <h4>{product.name}</h4>
                <p>
                    <strong>Author: </strong>
                    {product.author}
                </p>
                <p>
                    <strong>Price: </strong>
                    {"₺ " + product.price}
                </p>
                <button
                    onClick={() => ShoppingContext.AddCart(product)}
                    className="btn-primary"
                    style={{
                        width: "100%",
                        maxWidth: "250px",
                        padding: "10px",
                    }}
                >
                    <strong>Add to Cart </strong>
                </button>
            </div>
        </div>
    );
};

export default Product;
