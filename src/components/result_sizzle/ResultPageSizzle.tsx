import * as React from "react";
import * as ReactDOM from "react-dom";
import Container from "react-bootstrap/Container";
import ResultPageHeader from "./ResultPageHeader";
import ResultPageBody from "./ResultPageBody";
import ResultPageFooter from "./ResultPageFooter";
import { RouteComponentProps } from "react-router-dom";
import { SearchQuerySizzle } from "../models/Types";

interface Props extends RouteComponentProps<SearchQuerySizzle> {}
interface State {}

export default class ResultPageSizzle extends React.Component<Props, State> {
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
          sizzle_word={this.props.match.params.sizzle_word}
        />
        <ResultPageFooter />
      </Container>
    );
  }
}
