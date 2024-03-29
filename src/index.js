import React from "react";
import ReactDOM from "react-dom/client";
import { createStore } from "redux";
import allReducers from "./redux/index.js";
import { Provider } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";
import App from "./App.jsx";

const store = createStore(allReducers, composeWithDevTools());

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
	<Provider store={store}>
		<App />
	</Provider>
);
