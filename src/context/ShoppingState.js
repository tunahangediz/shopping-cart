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
                name: "Dune",
                author: "Frank Herbert",
                price: 9.99,
                image: "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/15ba25105957829.5f851d78e1c3a.jpg",
            },
            {
                id: 2,
                name: "1984",
                author: "George Orwell",
                price: 19.99,
                image: "https://i.dr.com.tr/cache/600x600-0/originals/0000000064038-1.jpg",
            },
            {
                id: 3,
                name: "Harry Potter and the Philosopher's Stone",
                author: "J.K. Rowling",
                price: 16.99,
                image: "https://i2-prod.walesonline.co.uk/incoming/article6890072.ece/ALTERNATES/s615b/hp1.jpg",
            },
            {
                id: 4,
                name: "The Lord of the Rings: The Fellowship of the Ring",
                author: "J. R. R. Tolkien",
                price: 19.99,
                image: "https://i2.wp.com/www.casualoptimist.com/wp-content/uploads/2020/09/fellowship-of-the-ring-illustration-johan-egerkrans-1000x1500.jpg?resize=1000%2C1500",
            },
            {
                id: 5,
                name: "I Robot",
                author: "Isaac Asımow",
                price: 25.99,
                image: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1478247921l/32864707._SY475_.jpg",
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
