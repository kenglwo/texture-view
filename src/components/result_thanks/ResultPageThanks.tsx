import * as React from "react";
import * as ReactDOM from "react-dom";
import Container from "react-bootstrap/Container";
import ResultPageHeader from "./ResultPageHeader";
import ResultPageBody from "./ResultPageBody";
import ResultPageFooter from "./ResultPageFooter";
import { RouteComponentProps } from "react-router-dom";
import { SearchQueryThanks } from "../models/Types";

interface Props extends RouteComponentProps<SearchQueryThanks> {}
interface State {}

export default class ResultPageThanks extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    console.log(this.props.match.params);
  }
  public render() {
    return (
      <Container fluid={true}>
        <ResultPageHeader />
        <ResultPageBody
          keyword={this.props.match.params.keyword}
          thanks_word={this.props.match.params.thanks_word}
        />
        <ResultPageFooter />
      </Container>
    );
  }
}
