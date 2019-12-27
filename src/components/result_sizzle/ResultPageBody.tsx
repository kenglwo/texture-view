import * as React from "react";
import * as ReactDOM from "react-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import RecipeList from "./RecipeList";
import { SearchQuerySizzle } from "../models/Types";

interface Props extends SearchQuerySizzle {}
interface State {}

export default class ResultPageBody extends React.Component<Props, State> {
  public render() {
    return (
      <Row>
        <Col md={3} />
        <Col md={6}>
          <RecipeList
            keyword={this.props.keyword}
            sizzle_word={this.props.sizzle_word}
          />
        </Col>
        <Col md={3} />
      </Row>
    );
  }
}
