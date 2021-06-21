import { ADD_CART, GET_PRODUCTS } from "./types";

const shoppingReducer = (state, action) => {
    switch (action.type) {
        case GET_PRODUCTS:
            return { ...state, products: action.payload };
        case ADD_CART:
            return { ...state, cart: action.payload };
        default:
            return state;
    }
};

export default shoppingReducer;
