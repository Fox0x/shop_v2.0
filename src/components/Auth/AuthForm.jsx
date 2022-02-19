import React, { useEffect } from "react";
import css from "./AuthForm.module.css";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
	confirmOTP,
	requestRecaptchVerifier,
	signInWithPhone,
} from "../../controllers/authController";
import { setUser } from "../../store/slices/userSlice";
import { PhoneSubmitButton } from "../UI/Buttons/PhoneSubmitButton";
import { OtpSubmitButton } from "../UI/Buttons/OtpSubmitButton";
import ErrorsPopup from "../UI/ErrorsPopup/ErrorsPopup";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function AuthForm() {
	const [errorMessages, setErrorMessages] = React.useState(null);
	const [stage, setStage] = React.useState("phoneVerification");
	const [isOtpInputHidden, setIsOtpInputHidden] = React.useState(true);
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const formik = useFormik({
		initialValues: {
			phone: "",
			otp: "",
		},
		validationSchema: Yup.object({
			phone: Yup.string().required("Введите номер телефона"),
			// .matches(
			// 	/^(\+38071)?[0-9]{7}$/gm,
			// 	"Проверьте правильность ввода номера телефона"
			// ),
			otp: Yup.string()
				.required("Введите код из СМС")
				.length(6, "Проверьте правильность ввода кода из СМС"),
		}),
	});
	let arr = [];

	useEffect(() => {
		// Set error messages array.
		if (formik.errors.phone && formik.touched.phone)
			arr.push(formik.errors.phone);
		if (formik.errors.otp && formik.touched.otp)
			arr.push(formik.errors.otp);
		if (!formik.errors) {
			arr = [];
		}
		arr.length > 0 ? setErrorMessages(arr) : setErrorMessages(null);

		// Change stage to OTP input.
		if (!formik.values.otp && stage === "otpVerification") {
			setStage("phoneVerification");
		} else if (formik.values.otp && stage === "phoneVerification") {
			setStage("otpVerification");
		}
	}, [formik.errors, formik.touched]);

	// Request RECAPTCHA when page is loaded.
	useEffect(() => {
		requestRecaptchVerifier();
	}, []);

	// Show OTP input, then send SMS code by phone number.
	const phoneVerificationHandler = async () => {
		await signInWithPhone(formik.values.phone)
			.then(() => {
				setIsOtpInputHidden(false);
			})
			.catch((error) => {
				arr.push(error.code);
				setErrorMessages(arr);
			});
	};
	// Verify OTP code and sign in with phone number.
	const otpVerificationHandler = async () => {
		await confirmOTP(formik.values.otp)
			.then(({ ...result }) => {
				// Save user data to store.
				dispatch(
					setUser({
						uid: result.user.uid,
						email: result.user.email,
						isEmailVerified: result.user.emailVerified,
						phone: result.user.phoneNumber,
						creationTime: result.user.metadata.creationTime,
						lastSignInTime: result.user.metadata.lastSignInTime,
						createdAt: result.user.metadata.createdAt,
						lastLoginAt: result.user.metadata.lastLoginAt,
					})
				);
				navigate("/");
			})
			.catch((error) => {
				formik.values.otp = "";
				arr.push(error.code);
				setErrorMessages(arr);
			});
	};

	return (
		<form className={css.form}>
			<h1 className={css.form__title}>Sign in</h1>
			<div className={css.input__container}>
				{/* Phone input */}
				<label htmlFor="phone" className={css.input__label}>
					Номер телефона
				</label>
				<input
					autoFocus
					className={css.input}
					placeholder="+380711234567"
					type="tel"
					name="phone"
					value={formik.values.phone}
					onChange={formik.handleChange}
					onBlur={formik.handleBlur}
					style={
						formik.errors.phone &&
						formik.touched.phone && {
							borderLeft: "solid 10px #bd0f1b",
							borderBottomColor: "#bd0f1b",
						}
					}
				/>
				{/* OTP code input */}
				<label
					htmlFor="otp"
					className={css.input__label}
					hidden={isOtpInputHidden}>
					Код подтверждения
				</label>
				<input
					hidden={isOtpInputHidden}
					className={css.input}
					placeholder="Код из SMS"
					type="text"
					name="otp"
					value={formik.values.otp}
					onChange={formik.handleChange}
					onBlur={formik.handleBlur}
					style={
						formik.errors.otp &&
						formik.touched.otp && {
							borderLeft: "solid 10px #bd0f1b",
							borderBottomColor: "#bd0f1b",
						}
					}
				/>
			</div>
			{stage === "phoneVerification" ? (
				// Phone submit button with timer
				<PhoneSubmitButton
					onClick={phoneVerificationHandler}
					isPhoneHasErrors={
						formik.errors.phone
							? !!Object.keys(formik.errors.phone).length
							: false
					}
				/>
			) : (
				// OTP submit button
				<OtpSubmitButton
					onClick={otpVerificationHandler}
					isOtpHasErrors={
						formik.errors.otp
							? !!Object.keys(formik.errors.otp).length
							: false
					}
				/>
			)}
			<div id="recapcha-container"></div>
			{/* Errors list */}
			<ErrorsPopup errorMessages={errorMessages} />
		</form>
	);
}
