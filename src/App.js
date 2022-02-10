import React from "react";
import { Route, Routes } from "react-router";
import { AuthPage } from "./pages/Auth/AuthPage.jsx";

export const App = () => {
	return (
		<Routes>
			<Route path="/auth" element={<AuthPage/>} />
		</Routes>
	);
};
