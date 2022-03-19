import React from "react";
import { SideMenuItem } from "../SideMenuItem/SideMenuItem";
import css from "./SideMenu.module.css";

export default function SideMenu({ isOpen, hideModal }) {
	return (
		<div className={css.sideMenu__wrapper}>
			<div className={css.sideMenu__content}>
				<SideMenuItem img="/img/svg/shop.svg" link="/shop">
					Каталог товаров
				</SideMenuItem>
				<SideMenuItem img="/img/svg/contact-us.svg" link="/contacts">
					Контакты
				</SideMenuItem>
				<SideMenuItem img="/img/svg/manual-information.svg" link="#">
					Правовая информация
				</SideMenuItem>
			</div>
		</div>
	);
}
