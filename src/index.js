import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import allReducers from "./redux/index.js";
import { Provider } from "react-redux";
import { composeWithDevTools } from 'redux-devtools-extension'
import App from "./App.jsx";
// import Cover from './Cover';

const store = createStore(allReducers, composeWithDevTools());

ReactDOM.render(
	<Provider store={store}>
		{/* <Cover/>, */}
		<App />
	</Provider>,
	document.getElementById("root")
);
