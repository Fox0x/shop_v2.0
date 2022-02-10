import React from "react";
import { Route, Routes } from "react-router";
import { AuthPage } from "./pages/Auth/AuthPage.jsx";
import { ShopPage } from "./pages/Shop/ShopPage.jsx";

export const App = () => {
	return (
		<Routes>
			<Route path="/" element={<ShopPage />} />
			<Route path="/auth" element={<AuthPage />} />
		</Routes>
	);
};
