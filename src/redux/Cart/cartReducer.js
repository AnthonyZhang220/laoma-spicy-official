import * as actionTypes from "./cartTypes";
import { nanoid } from "nanoid";
import { itemdetails } from "../../components/MainPage/Menu/Items/itemdetails";

const INITIAL_STATE = {
	itemdetails: itemdetails,
	cart: [],
	currentItem: null,
};

const cartReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case actionTypes.ADD_TO_CART:
			const order = state.itemdetails.find(
				(itemdetails) => itemdetails.id === action.payload.id
			);

			return {
				...state,
				cart: [...state.cart, { ...order, uniqueID: nanoid(), qty: 1 }],
			};
		case actionTypes.REMOVE_FROM_CART:
			return {
				...state,
				cart: state.cart.filter(
					(cart) => cart.uniqueID !== action.payload.uniqueID
				),
			};
		default:
			return state;
	}
};

export default cartReducer;
