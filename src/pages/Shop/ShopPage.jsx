import React from "react";
import css from "./ShopPage.module.css";
import { Navbar } from "../../components/Navbar/Navbar";
import { Slider } from "../../components/Slider/Slider";
import { ItemCard } from "../../components/ItemCard/ItemCard";

export const ShopPage = () => {
	const items = [
		{
			category: "category1",
			title: "Item 1",
			description: "Description of item 1",
			price: "1 000",
			image: "https://st2.depositphotos.com/1006753/7977/i/600/depositphotos_79773172-stock-photo-red-coffee-machine.jpg",
		},
		{
			category: "category2",
			title: "Item 2",
			description: "Description of item 2",
			price: "2 000",
			image: "https://st2.depositphotos.com/1006753/7977/i/600/depositphotos_79773172-stock-photo-red-coffee-machine.jpg",
		},
		{
			category: "category1",
			title: "Item 3",
			description: "Description of item 3",
			price: "3 000",
			image: "https://st2.depositphotos.com/1006753/7977/i/600/depositphotos_79773172-stock-photo-red-coffee-machine.jpg",
		},
		{
			category: "category1",
			title: "Item 4",
			description: "Description of item 4",
			price: "4 000",
			image: "https://st2.depositphotos.com/1006753/7977/i/600/depositphotos_79773172-stock-photo-red-coffee-machine.jpg",
		},
		{
			category: "category3",
			title: "Item 5",
			description: "Description of item 5",
			price: "5 000",
			image: "https://st2.depositphotos.com/1006753/7977/i/600/depositphotos_79773172-stock-photo-red-coffee-machine.jpg",
		},
		{
			category: "category3",
			title: "Item 6",
			description: "Description of item 6",
			price: "6 000",
			image: "https://st2.depositphotos.com/1006753/7977/i/600/depositphotos_79773172-stock-photo-red-coffee-machine.jpg",
		},
	];

	return (
		<div className={css.shop__wrapper}>
			<Navbar />
			<Slider />
			<div className={css.shop__items}>
				{Array.from(
					new Set(items.map((item) => JSON.stringify(item.category)))
				).map((category) => (
					<div className={css.items__category} key={category}>
						<h2>{JSON.parse(category)}</h2>
						<hr/>
						<div className={css.items__list}>
						{items.map((item, index) => {
							if (JSON.stringify(item.category) === category) {
								return <ItemCard item={item} key={index}/>;
							}
						})}
						</div>
					</div>
				))}
			</div>
		</div>
	);
};
