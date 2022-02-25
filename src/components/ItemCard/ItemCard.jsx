import classNames from "classnames";
import React, { useEffect } from "react";
import css from "./ItemCard.module.css";

export const ItemCard = ({ item, selectedQuantity, addItemToCart }) => {
	const [quantity, setQuantity] = React.useState(1);
	
	const [amount, setAmount] = React.useState(selectedQuantity);

	useEffect(() => {
		setAmount(selectedQuantity);
	},[quantity, selectedQuantity]);

	

	// console.log(item.title, selectedQuantity.find((el) => el.item.title === item.title)?.quantity);

	const itemCardClasses = classNames(css.card, {
		[css.card_selected]: selectedQuantity,
	});

	const countIconClases = classNames(css.card__count, {
		[css.count__hidden]: selectedQuantity <= 0, //!isSelected,
	});

	const handleClick = (item, event) => {
		event.preventDefault();
		addItemToCart(item, quantity);
	};

	return (
		<div className={itemCardClasses}>
			<span className={countIconClases}>{amount < 100 ? amount : "99+"}</span>
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
				<div className={css.card__quantity}>
					<button
						onClick={() => {
							quantity > 1 && setQuantity(quantity - 1);
						}}>
						-
					</button>
					<input
						type="text"
						placeholder="0"
						value={quantity}
						onChange={(e) => {
							e.target.value = e.target.value.replace(
								/[^1-9, 0-9]/g,
								""
							);
							setQuantity(parseInt(e.target.value) || "");
						}}
					/>
					<button
						onClick={() => {
							quantity < 100000 && setQuantity(quantity + 1);
						}}>
						+
					</button>
				</div>
				<button
					onClick={(event) => handleClick(item, event)}
					className="primary"
					disabled={quantity == ""}>
					Купить {parseInt(item.price.replace(" ", "")) * quantity} ₽
				</button>
			</div>
		</div>
	);
};
