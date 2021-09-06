import * as actionTypes from "./cartTypes";

const INITIAL_STATE = {
	items: [
    {
      id: 1,
      title: "beef hot spicy stew",
      category: "MaLaTang",
      price: 14.99,
      images: "./images/items/beef.png",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur aperiam illo ut odio temporibus magnam ipsam reiciendis non inventore, harum ullam quod soluta numquam fugiat libero mollitia rem voluptatum? Autem.",
    },
    {
      id: 2,
      title: "lamb hot spicy stew",
      category: "MaLaTang",
      price: 14.99,
      images: "./images/items/lamb.png",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur aperiam illo ut odio temporibus magnam ipsam reiciendis non inventore, harum ullam quod soluta numquam fugiat libero mollitia rem voluptatum? Autem.",
    },
    {
      id: 3,
      title: "Shrimp Ball",
      category: "MaLaTang",
      price: 14.99,
      images: "./images/items/shrimp ball.png",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur aperiam illo ut odio temporibus magnam ipsam reiciendis non inventore, harum ullam quod soluta numquam fugiat libero mollitia rem voluptatum? Autem.",
    },
    {
      id: 4,
      title: "Shrimp Ball",
      category: "MaLa Xiangguo",
      price: 14.99,
      images: "./images/items/shrimp ball.png",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur aperiam illo ut odio temporibus magnam ipsam reiciendis non inventore, harum ullam quod soluta numquam fugiat libero mollitia rem voluptatum? Autem.",
    },
  ],

	cart: [],
	currentItem: null,
};

const cartReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case actionTypes.ADD_TO_CART:
			const order = state.items.find((items) => items.id === action.payload.id);

			return {
				...state,
				cart: [...state.cart, { ...order }],
			};
		case actionTypes.REMOVE_FROM_CART:
			return {};
		default:
			return state;
	}
};

export default cartReducer;
