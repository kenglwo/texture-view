import * as React from "react";
import * as ReactDOM from "react-dom";
import { BrowserRouter, Route, Link } from "react-router-dom";
import IndexPage from "./index/IndexPage";
import ResultPage from "./result//ResultPage";
import "../public/stylesheets/custom.scss";

interface Props {}
interface State {}

export default class Router extends React.Component<Props, State> {
  public render() {
    return (
      <BrowserRouter>
        <Route exact={true} path="/router" component={IndexPage} />
        <Route
          path="/result/:keyword/:texture/:offset"
          component={ResultPage}
        />
      </BrowserRouter>
    );
  }
}
