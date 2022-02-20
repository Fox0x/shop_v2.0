// Save user data to local storage.
export function saveUserToLS(user) {
	localStorage.setItem("user", JSON.stringify(user));
}

// Get user data from local storage.
export function getUserFromLS() {
	const user = localStorage.getItem("user");
	return user ? JSON.parse(user) : null;
}

// Remove user data from local storage.
export function removeUserFromLS() {
	localStorage.removeItem("user");
}
