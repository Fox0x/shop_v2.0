import { useSelector } from "react-redux";

export const useAuth = () => {
	const { uid, phone, email, isEmailVerified,  creationTime,  lastSignInTime, createdAt, lastLoginAt} =
		useSelector((state) => state.user);
	return {
		isAuth: !!uid,
        uid,
        phone,
        email,
        isEmailVerified,
        creationTime,
        lastSignInTime,
        createdAt,
        lastLoginAt
	};
};
