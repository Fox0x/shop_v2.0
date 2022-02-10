import { initializeApp } from "firebase/app";
import {
	getAuth,
	RecaptchaVerifier,
	signInWithPhoneNumber,
	PhoneAuthProvider,
} from "firebase/auth";

const firebaseConfig = {
	apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
	authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
	projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
	storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
	messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
	appId: process.env.REACT_APP_FIREBASE_APP_ID,
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

// ====================================================================== //

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

export const confirmOTP = (code) => {
	const confirmationResult = window.confirmationResult;
	return confirmationResult.confirm(code);
	
};

export const logout = () => {
	auth.signOut();
}