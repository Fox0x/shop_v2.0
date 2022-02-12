import React from "react";
import css from "./ItemCard.module.css";

export const ItemCard = ({ item, addItemToCart }) => {
	return (
		<div className={css.card}>
			<img
				className={css.card__image}
				src={item.image}
				alt="Item image"
				width="128px"
				height="128px"
			/>
			<h3>{item.title}</h3>
			<p>{item.description}</p>
			<div className={css.card__buttons}>
				<button
					// onClick={() => addItemToCart(item)}
					className="primary">
					Купить {item.price} ₽
				</button>
			</div>
		</div>
	);
};
