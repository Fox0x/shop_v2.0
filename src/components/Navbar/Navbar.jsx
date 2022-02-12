import React from "react";
import css from "./Navbar.module.css";

export const Navbar = () => {
	return (
		<nav className={css.navbar__wrapper}>
			<div className={css.leftSide}>
			<img
					className={css.user__icon}
					src="/img/svg/menu.svg"
					alt="user"
				/>
			</div>
			<div className={css.centerSide}>
				<input
					className={css.searchInput}
					type="text"
					placeholder="🔍︎ Я ищу..."
				/>
			</div>
			<div className={css.rightSide}>
				<img
					className={css.user__icon}
					src="/img/svg/user.svg"
					alt="user"
				/>

				<img 
					className={css.cart__icon}
					src="/img/svg/cart.svg"
					alt="cart"
				/>

				<div className={css.cart}></div>
			</div>
		</nav>
	);
}
