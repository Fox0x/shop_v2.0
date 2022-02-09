import React from "react";
import RegisterForm from "../../components/Auth/RegisterForm";
import { WelcomeForm } from "../../components/Auth/WelcomeForm";
import css from "./AuthPage.module.css";

export const AuthPage = () => {
	return (
		<div className={css.authPage__wrapper}>
			<RegisterForm />
		</div>
	);
};
