import React, { useState } from "react";
import Draggable from "react-draggable";
import styles from "./index.module.css";
import Cart from "../Cart";

function CartButton() {
	const [click, setClick] = useState(false);
	const [drag, setDrag] = useState(false);
	const [carticon, setCartIcon] = useState(false);

	const iconvisibility = () => {
		if (window.scrollY >= 100) {
			setCartIcon(false);
		} else {
			setCartIcon(true);
		}
	};

	window.addEventListener("scroll", iconvisibility);

	const handleClick = () => setClick(!click);

	return (
		<Draggable>
		<div
			drag={drag}
			className={`${carticon && styles.active} ${styles.cart_icon}`}
			onClick={handleClick}
		>
			<i
				className={"fas fa-shopping-cart"}
			>
				{/* {click ? <Cart /> : null} */}
			</i>
		</div>
		</Draggable>
	);
	// setClick(true);
	// setVisible(true);
	// if (setVisible === true) {
	//   return <Cart/>;
	// } else {
	//   return null;
	// }
}

export default CartButton;
