import { initializeApp } from "firebase/app";
import {
	getAuth,
	RecaptchaVerifier,
	signInWithPhoneNumber,
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
	window.recaptchaVerifier = new RecaptchaVerifier("recapcha-container", {
		size: "invisible",
		callback: (response) => {
			console.log(response);
		}
	},auth);
};

export const signInWithPhone = async (phoneNumber) => {
	let appVerifier = window.recaptchaVerifier;
	const confirmationResult = await signInWithPhoneNumber(
		auth,
		phoneNumber,
		appVerifier
	);
	window.confirmationResult = confirmationResult;
	return confirmationResult;
};

export const confirmOTP = (code) => {
	let confirmationResult = window.confirmationResult;
	return confirmationResult.confirm(code);
	// .then((result) => {
	// 	// User signed in successfully.
	// 	const user = result.user;
	// 	console.log("User signed in successfully.", user);
	// 	// ...
	// })
	// .catch((error) => {
	// 	// User couldn't sign in (bad verification code?)
	// 	console.log("User couldn't sign in.", error);
	// 	// ...
	// });
};
