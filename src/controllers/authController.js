import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { auth } from "../firebase";
import { onAuthStateChanged } from "firebase/auth";
import { removeUserFromLS, saveUserToLS } from "./userController";

onAuthStateChanged(auth, (user) => {
	if (user) {
		// // User is signed in.
		// console.log("User is signed in. \n", user);
		saveUserToLS(user);
	} else {
		// // User is signed out
		// console.log("User is signed out.");
		removeUserFromLS();
	}
});

// Create RECAPTCHA component
export function requestRecaptchVerifier() {
	window.recaptchaVerifier = new RecaptchaVerifier(
		"recapcha-container",
		{
			size: "invisible",
			callback: (response) => {
				console.log("RECAPTCHA verified successfully. \n", response);
			},
		},
		auth
	);
}

// Send SMS to user
export async function signInWithPhone(phoneNumber) {
	const appVerifier = window.recaptchaVerifier;
	const confirmationResult = await signInWithPhoneNumber(
		auth,
		phoneNumber,
		appVerifier
	);
	window.confirmationResult = confirmationResult;
	return confirmationResult;
}

// Verify SMS code
export function confirmOTP(code) {
	const confirmationResult = window.confirmationResult;
	return confirmationResult.confirm(code);
}

// Log out user
export function logout() {
	auth.signOut();
}
