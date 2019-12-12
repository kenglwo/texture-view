// import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
// import rootReducer from "./redux/reducers";
import Router from "./Router";

// const store = createStore(rootReducer);

ReactDOM.render(<Router />, document.getElementById("root"));
