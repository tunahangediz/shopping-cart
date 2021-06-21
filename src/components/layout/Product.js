import { useContext } from "react";
import shoppingContext from "../../context/shoppingContext";
const Product = ({ product }) => {
    const ShoppingContext = useContext(shoppingContext);

    return (
        <div className="product">
            <img src={product.image} style={{ width: "250px" }} alt="" />

            <div className="flex flex-column gap-4 content-center">
                <h4>{product.name}</h4>
                <p>
                    <strong>Yazar: </strong>
                    {product.author}
                </p>
                <p>
                    <strong>Fiyat: </strong>
                    {"₺ " + product.price}
                </p>
                <button
                    onClick={() => ShoppingContext.AddCart(product)}
                    className="btn-primary"
                    style={{ width: "100px", padding: "8px" }}
                >
                    Satın All
                </button>
            </div>
        </div>
    );
};

export default Product;
