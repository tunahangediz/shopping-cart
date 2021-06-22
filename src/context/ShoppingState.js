import axios from "axios";
import React, { useEffect, useReducer } from "react";
import ShoppingContext from "./shoppingContext";
import shoppingReducer from "./shoppingReducer";
import { ADD_CART, GET_PRODUCTS } from "./types";

function ShoppingState(props) {
    const initialState = {
        products: [
            {
                id: 1,
                name: "Simyacı",
                author: "Paulo Coelho",
                price: 9.99,
                image: "https://images-na.ssl-images-amazon.com/images/I/51eqjXwFzwL._SX344_BO1,204,203,200_.jpg",
            },
            {
                id: 2,
                name: "Yüzyıllık Yalnızlık",
                author: "Gabriel García Márquez",
                price: 19.99,
                image: "https://images-na.ssl-images-amazon.com/images/I/51A1ZxGf94L._SY291_BO1,204,203,200_QL40_ML2_.jpg",
            },
            {
                id: 3,
                name: "Annemi Bir Kez Daha Görebilsem",
                author: "Zana Muhsen",
                price: 16.99,
                image: "https://content.babil.com/urun/13df0fdbdfbe477d8c8ee30d2e15292c/Front/Big",
            },
            {
                id: 4,
                name: "Ekmek Kavgası",
                author: "Orhan Kemal",
                price: 19.99,
                image: "https://images-na.ssl-images-amazon.com/images/I/41BJdviD3TL._SX340_BO1,204,203,200_.jpg",
            },
            {
                id: 5,
                name: "Aşk",
                author: "Elif Şafak",
                price: 25.99,
                image: "https://images-na.ssl-images-amazon.com/images/I/414N7XbRE%2BL._SX344_BO1,204,203,200_.jpg",
            },
        ],
        cart: [],
        money: 200,
        loading: false,
    };
    const [state, dispatch] = useReducer(shoppingReducer, initialState);

    // useEffect(() => {
    //     const GetUsers = async () => {
    //         try {
    //             const response = await axios.get(
    //                 " http://localhost:8000/products",
    //             );

    //             dispatch({ type: GET_PRODUCTS, payload: response.data });
    //         } catch (error) {
    //             console.log(error);
    //         }
    //     };
    //     GetUsers();
    // }, []);

    //add product to cart

    const AddCart = (product) => {
        const checkCart = state.cart.find((item) => item.id === product.id);
        if (checkCart) {
            const newCart = state.cart.map((item) =>
                item.id === product.id
                    ? { ...item, amount: item.amount + 1 }
                    : item,
            );
            dispatch({ type: ADD_CART, payload: newCart });
        } else {
            const newCart = [...state.cart];
            newCart.push({
                id: product.id,
                name: product.name,
                price: product.price,
                img: product.image,
                amount: 1,
            });
            dispatch({ type: ADD_CART, payload: newCart });
        }
    };

    const increment = (product) => {
        const newCart = state.cart.map((item) =>
            item.id === product.id
                ? { ...item, amount: item.amount + 1 }
                : item,
        );
        dispatch({ type: ADD_CART, payload: newCart });
    };

    const decrement = (product) => {
        let newCart;
        let index;
        if (product.amount === 0) {
            newCart = [...state.cart];
            for (let i = 0; i < newCart.length; i++) {
                if (newCart[i].id === product.id) {
                    index = i;
                }
            }
            newCart.splice(index, 1);
        } else {
            newCart = state.cart.map((item) =>
                item.id === product.id
                    ? { ...item, amount: item.amount - 1 }
                    : item,
            );
        }
        dispatch({ type: ADD_CART, payload: newCart });
    };

    return (
        <ShoppingContext.Provider
            value={{
                products: state.products,
                cart: state.cart,
                money: state.money,
                loading: state.loading,
                AddCart,
                increment,
                decrement,
            }}
        >
            {props.children}
        </ShoppingContext.Provider>
    );
}

export default ShoppingState;
