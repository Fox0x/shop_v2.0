import React from "react";
import css from "./ShopPage.module.css";
import { Navbar } from "../../components/Navbar/Navbar";
import { Slider } from "../../components/Slider/Slider";
import { ItemCard } from "../../components/ItemCard/ItemCard";
import { useSearch } from "../../hooks/useSearch";
import { useUser } from "../../hooks/useUser";

export const ShopPage = () => {
	const [searchQery, setSearchQuery] = React.useState("");
	const items = useSearch(searchQery);

	return (
		<div className={css.shop__wrapper}>
			<Navbar
				searchQuery={searchQery}
				setSearchQuery={setSearchQuery}
				className={css.navbar}
			/>
			<Slider isHidden={searchQery.length > 0} />
			{items.length > 0 ? (
				<div className={css.shop__items}>
					{Array.from(
						new Set(
							items.map((item) => JSON.stringify(item.category))
						)
					).map((category) => (
						// Category
						<div className={css.items__category} key={category}>
							<h2>{JSON.parse(category)}</h2>
							<hr />
							{/* Items list */}
							<div className={css.items__list}>
								{items.map((item, index) => {
									if (
										JSON.stringify(item.category) ===
										category
									) {
										return (
											<ItemCard item={item} key={index} />
										);
									}
									return null;
								})}
							</div>
						</div>
					))}
				</div>
			) : (
				<h1 className={css.emptyPlaceholder}>
					По вашему запросу ничего не найдено
				</h1>
			)}
		</div>
	);
};
