import React from "react";
import css from "./styles.module.css";

export const StyledButton = (props) => {
	const handleClick = () => {
		props.onClick();
	};

	return (
		<div className={css.styledButton__wrapper}>
			<button
				type="button"
				className={css.styledButton}
				onClick={() => handleClick()}>
				{props.children}
			</button>
		</div>
	);
};
