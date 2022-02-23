import classNames from "classnames";
import React from "react";
import css from "./ItemCard.module.css";

export const ItemCard = ({ item, addItemToCart }) => {
	const [isSelected, setIsSelected] = React.useState(false);
	const [amount, setAmount] = React.useState(1);

	const itemCardClasses = classNames(css.card, {
		[css.card_selected]: isSelected,
	});

	const handleClick = (item) => {};

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
				<div className={css.card__amount}>
					<button
						onClick={() => {
							amount > 1 && setAmount(amount - 1);
						}}>
						-
					</button>
					<input
						type="text"
						placeholder="0"
						value={amount}
						onChange={(e) => {
							e.target.value = e.target.value.replace(
								/[^1-9, 0-9]/g,
								""
							);
							setAmount(parseInt(e.target.value) || "");
						}}
					/>
					<button
						onClick={() => {
							amount < 100000 && setAmount(amount + 1);
						}}>
						+
					</button>
				</div>
				<button
					onClick={() => handleClick(item)}
					className="primary"
					disabled={amount == ""}>
					Купить {parseInt(item.price.replace(" ", "")) * amount} ₽
				</button>
			</div>
		</div>
	);
};
