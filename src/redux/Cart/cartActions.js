import * as actionTypes from "./cartTypes";

export const addToCart = (id) => {
	return {
		type: actionTypes.ADD_TO_CART,
		payload: {
			id: id,
		},
	};
};

export const removeFromCart = (uniqueID) => {
	return {
		type: actionTypes.REMOVE_FROM_CART,
		payload: {
			uniqueID: uniqueID,
		},
	};
};
