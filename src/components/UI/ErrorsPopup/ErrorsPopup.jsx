import React from "react";
import css from "./styles.module.css";

export default function ErrorsPopup(props) {
	if (!props.errorMessages) return null;
	const errors = props.errorMessages;

	const errorHandler = (error) => {
		if (error === undefined)
			return "Перезагрузите страницу или попробуйте позже";
		if (error === "auth/too-many-requests")
			return "Слишком много попыток входа. Попробуйте позже";
		if (error === "auth/operation-not-allowed")
			return "Ошибка авторизации. Попробуйте позже";
		if (error === "auth/invalid-verification-code")
			return "Проверьте правильность ввода кода из СМС";
		return error;
	};

	return (
		<div className={css.error__wrapper}>
			{Object.values(errors).map((error) => (
				<div className={css.error__message} key={error}>
					<img
						src="/img/error.svg"
						alt="error"
						className={css.error__img}
					/>
					{errorHandler(error)}
				</div>
			))}
		</div>
	);
}