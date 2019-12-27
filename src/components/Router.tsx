import * as React from "react";
import * as ReactDOM from "react-dom";
import { BrowserRouter, Route, Link } from "react-router-dom";
import IndexPage from "./index/IndexPage";
import ResultPage from "./result//ResultPage";
import ResultPageSizzle from "./result_sizzle/ResultPageSizzle";
import ResultPageThanks from "./result_thanks/ResultPageThanks";
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
        <Route
          path="/result_sizzle/:keyword/:sizzle_word/:offset"
          component={ResultPageSizzle}
        />
        <Route
          path="/result_thanks/:keyword/:thanks_word/:offset"
          component={ResultPageThanks}
        />
      </BrowserRouter>
    );
  }
}
