import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { auth } from "../firebase";


// Create RECAPTCHA component
export const requestRecaptchVerifier = () => {
	window.recaptchaVerifier = new RecaptchaVerifier(
		"recapcha-container",
		{
			size: "invisible",
			callback: (response) => {
				console.log(response);
			},
		},
		auth
	);
};

// Send SMS to user
export const signInWithPhone = async (phoneNumber) => {
	const appVerifier = window.recaptchaVerifier;
	const confirmationResult = await signInWithPhoneNumber(
		auth,
		phoneNumber,
		appVerifier
	);
	window.confirmationResult = confirmationResult;
	return confirmationResult;
};

// Verify SMS code
export const confirmOTP = (code) => {
	const confirmationResult = window.confirmationResult;
	return confirmationResult.confirm(code);
};

// Log out user
export const logout = () => {
	auth.signOut();
};
