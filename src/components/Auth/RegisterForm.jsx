import React, { useEffect } from "react";
import css from "../style/style.module.css";
import { NavLink, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import classNames from "classnames";
import { signup } from "../../firebase";

export default function RegisterForm() {
	const [errorMessages, setErrorMessages] = React.useState(null);
	const [isFlipping, setIsFlipping] = React.useState(false);
	const formClasses = classNames(css.form, {
		[css.flip_shade]: isFlipping,
	});
    
	const formik = useFormik({
		initialValues: {
			email: "",
			password: "",
			passwordConfirm: "",
		},
		validationSchema: Yup.object({
			email: Yup.string()
				.email("Invalid email address")
				.required("Email is required"),
			password: Yup.string()
				.min(8, "Password must be at least 8 characters")
				.required("Password is required"),
			passwordConfirm: Yup.string()
				.oneOf([Yup.ref("password"), null], "Passwords must match")
				.required("Please confirm your password"),
		}),
		onSubmit: (values) => {
			signupHandler(values);
		},
	});

	let arr = [];
	useEffect(() => {
		if (formik.errors.email && formik.touched.email)
			arr.push(formik.errors.email);
		if (formik.errors.password && formik.touched.password)
			arr.push(formik.errors.password);
		if (formik.errors.passwordConfirm && formik.touched.passwordConfirm)
			arr.push(formik.errors.passwordConfirm);
		if (!formik.errors) {
			arr = [];
		}
		arr.length > 0 ? setErrorMessages(arr) : setErrorMessages(null);
	}, [formik.errors, formik.touched]);

	const signupHandler = async (values) => {
		try {
            console.log(formik.values);
			// await signup(values.email, values.password).then(() => {
			// 	setIsFlipping(!isFlipping);
			// 	document.location.href =
			// 		"https://admindashboard-golub.herokuapp.com/";
			// });
		} catch (error) {
			arr.push(error.code);
			setErrorMessages(arr);
		}
	};
	return (
		<form className={formClasses} onSubmit={formik.handleSubmit}>
			<h1 className={css.form__title}>Sign Up</h1>
			<div className={css.input__container}>
				<input
					autoFocus
                    autoComplete="email"
					className={css.input}
					placeholder="Email"
					type="email"
					name="email"
					value={formik.values.email}
					onChange={formik.handleChange}
					onBlur={formik.handleBlur}
					style={
						formik.errors.email &&
						formik.touched.email && {
							borderLeft: "solid 10px #E03A45",
							borderBottomColor: "#E03A45",
						}
					}
				/>

				<input
                    autoComplete="new-password"
					className={css.input}
					placeholder="Password"
					type="password"
					name="password"
					value={formik.values.password}
					onChange={formik.handleChange}
					onBlur={formik.handleBlur}
					style={
						formik.errors.password &&
						formik.touched.password && {
							borderLeft: "solid 10px #E03A45",
							borderBottomColor: "#E03A45",
						}
					}
				/>

				<input
                    autoComplete="current-password"
					className={css.input}
					placeholder="Confirm Password"
					type="password"
					name="passwordConfirm"
					value={formik.values.passwordConfirm}
					onChange={formik.handleChange}
					onBlur={formik.handleBlur}
					style={
						formik.errors.passwordConfirm &&
						formik.touched.passwordConfirm && {
							borderLeft: "solid 10px #E03A45",
							borderBottomColor: "#E03A45",
						}
					}
				/>
			</div>

			<button
				type="submit"
				className={css.form__button}
				disabled={!formik.isValid}>
				Register
			</button>

			<span className={css.form__subtitle}>
				Already have an account?{" "}
				<NavLink to="/auth/login">Sign In</NavLink>
			</span>
		</form>
	);
}