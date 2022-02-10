import React from "react";
import css from "./Details.module.css";
import { NavLink } from "react-router-dom";

export default function Details() {
	const [avatarSrc, setAvatarSrc] = React.useState(
		"/img/svg/user.svg"
	);
	const [name, setName] = React.useState("Иван Иванов");

	return (
		<div className={css.details__wrapper}>
			<img className={css.details__avatar} src={avatarSrc} />
			<NavLink to="/" replace className={css.details__name}>{name}</NavLink>
			<img
				className={css.details__arrow}
				src="/img/svg/chevron.svg"
			/>
		</div>
	);
}
