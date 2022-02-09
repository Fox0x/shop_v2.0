import React from "react";
import { Route, Routes } from "react-router";
import App from "./components/App.jsx";

export const App = () => {
	return (
		<Routes>
			<Route path="/" element={<App />} />
		</Routes>
	);
};
