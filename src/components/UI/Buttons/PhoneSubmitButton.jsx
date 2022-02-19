import React from "react";
import css from "./styles.module.css";

export const PhoneSubmitButton = (props) => {
	const [counter, setCounter] = React.useState(0);
	const [isButtonDisabled, setIsButtonDisabled] = React.useState(true);

	// Timer for phone verification
	React.useEffect(() => {
		counter > 0
			? setTimeout(() => setCounter(counter - 1), 1000)
			: setIsButtonDisabled(false);

		return () => {
			clearTimeout();
		}
	}, [counter]);

	// If phone is invalid, disable button
	React.useEffect(() => {
		props.isPhoneHasErrors
			? setIsButtonDisabled(true)
			: setIsButtonDisabled(false);
	}, [props.isPhoneHasErrors]);

	// Disable button, set timer and request RECAPTCHA, then show OTP input.
	const handleClick = () => {
		setIsButtonDisabled(true);
		setCounter(5);
		props.onClick();
	};

	return (
		<div className={css.form__button__wrapper}>
			<button
				className={css.form__button}
				disabled={isButtonDisabled || props.isPhoneHasErrors}
				onClick={() => handleClick()}>
				Отправить код
			</button>
			{/* Timer before next verifivation */}
			<p className={css.form__timer} hidden={!counter > 0}>
				Отправить код повторно можно будет через:{" "}
				<span>00:{counter < 10 ? `0${counter}` : counter}</span>
			</p>
		</div>
	);
};
