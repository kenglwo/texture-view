import React from "react";
import ReactDOM from "react-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ResultPagination from "./ResultPagination";

interface Props {}
interface State {}

export default class ResultPage extends React.Component<Props, State> {
  public render() {
    return (
      <Row>
        <Col md={3} />
        <Col md={6}>
          <ResultPagination />
        </Col>
        <Col md={3} />
      </Row>
    );
  }
}
