import React from "react";
import css from "./styles.module.css";

export const OtpSubmitButton = (props) => {
	const handleClick = () => {
		props.onClick();
	};

	return (
		<div className={css.form__button__wrapper}>
			<button
				type="button"
				className={css.form__button}
				disabled={props.isOtpHasErrors}
				onClick={() => handleClick()}>
				Войти
			</button>
		</div>
	);
};
