import React from "react";
import Details from "../UI/Buttons/Details/Details";
import NotificationsBtn from "../UI/Buttons/NotificationsButton/NotificationsButton";
import Search from "../UI/Buttons/Search/Search";
import css from "./Navbar.module.css";

export default function Navbar() {
	return (
		<nav className={css.navbar__wrapper}>
			<ul className={css.navbar__links}>
				<li className={css.navbar__link}>Home</li>
				<li className={css.navbar__link}>About</li>
				<li className={css.navbar__link}>Contact</li>
			</ul>
			<ul className={css.navbar__buttons}>
				<li className={css.navbar__buttonsItem}>
					<Search />
				</li>
				<li className={css.navbar__buttonsItem}>
					<NotificationsBtn />
				</li>
				<li className={css.navbar__buttonsItem}>
					<Details />
				</li>
			</ul>
		</nav>
	);
}
