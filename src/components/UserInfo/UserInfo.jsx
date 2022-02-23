import classNames from "classnames";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../controllers/authController";
import { removeUserFromLS } from "../../controllers/userController";
import { removeUser } from "../../store/slices/userSlice";
import { StyledButton } from "../UI/Buttons/StyledButton";
import css from "./UserInfo.module.css";

export const UserInfo = ({ isOpen }) => {
	const dispatch = useDispatch();
	const {name, phone, creationTime} = useSelector((state) => state.user);
	const userInfoClasses = classNames(css.userInfo__wrapper, {
		[css.userInfo__show]: isOpen,
	});

	const signout = () => {
		logout();
		dispatch(removeUser());
		removeUserFromLS();
	};

	console.log(name, phone, creationTime);

	return (
		<div className={userInfoClasses}>
			{/* TODO: поменять на слайс */}
			<p className={css.userInfo__title}>{name || phone || 'Incognito'}</p>
			<span className={css.userInfo__label}>Дата регистрации:</span>
			<p className={css.userInfo__createdAt}>{creationTime || 'Never'}</p>
			<StyledButton
				onClick={() => {
					signout();
				}}>
				Выйти
			</StyledButton>
		</div>
	);
};