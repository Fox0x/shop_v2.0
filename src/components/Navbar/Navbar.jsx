import React from "react";
import css from "./Navbar.module.css";

export const Navbar = ({searchQuery, setSearchQuery}) => {
	
	return (
		<nav className={css.navbar__wrapper}>
			<div className={css.leftSide}>
				<img
					className={css.menu__icon}
					src="/img/svg/menu.svg"
					alt="menu"
				/>
			</div>
			<div className={css.centerSide}>
				<input
					className={css.searchInput}
					type="text"
					placeholder="🔍︎ Я ищу..."
					value={searchQuery}
					onChange={(e) => setSearchQuery(e.target.value)}
				/>
			</div>
			<div className={css.rightSide}>
				{/* Get info about user and signout */}
				<img
					className={css.user__icon}
					src="/img/svg/user.svg"
					alt="user"
				/>
				{/*Shop cart list  */}
				<img
					className={css.cart__icon}
					src="/img/svg/cart.svg"
					alt="cart"
				/>
			</div>
		</nav>
	);
};
