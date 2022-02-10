import React from "react";
import css from "./ShopPage.module.css";
import Navbar from "../../components/Navbar/Navbar";

export const ShopPage = () => {
	return (
		<div className={css.shop__wrapper}>
			<Navbar />
		</div>
	);
};