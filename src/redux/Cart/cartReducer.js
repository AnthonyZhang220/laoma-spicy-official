import * as actionTypes from "./cartTypes";
import { nanoid } from "nanoid";
import items from "../../components/MainPage/Main/Menu/Items/items.js";

const INITIAL_STATE = {
	items: items,
	cart: [],
	currentItem: null,
};

const cartReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case actionTypes.ADD_TO_CART:
			const order = state.items.find((items) => items.id === action.payload.id);

			return {
				...state,
				cart: [...state.cart, {...order,  uniqueID: nanoid(), qty: 1 }],
			};
		case actionTypes.REMOVE_FROM_CART:
			return {
				...state,
				cart: state.cart.filter((cart) => cart.uniqueID !== action.payload.uniqueID),
			};
		default:
			return state;
	}
};

export default cartReducer;
