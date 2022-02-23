import React, { useEffect, useState } from "react";
import { Route, Routes, Redirect } from "react-router";
import { AuthPage } from "./pages/Auth/AuthPage.jsx";
import { ShopPage } from "./pages/Shop/ShopPage.jsx";

export const App = () => {


	return (
		<Routes>
			<Route path="/shop" element={<ShopPage />} />
			<Route path="/" element={<AuthPage />} />
		</Routes>
	);
};
