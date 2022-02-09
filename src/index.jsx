import React from "react";
import "./index.css";
import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { App } from "./components/App";
import { Provider } from "react-redux";
import { store } from "./store/index.js";

render(
	<React.StrictMode>
		<Provider store={store}>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</Provider>
	</React.StrictMode>,
	document.getElementById("root")
);
