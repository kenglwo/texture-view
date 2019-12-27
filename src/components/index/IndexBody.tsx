import React from "react";
import ReactDOM from "react-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import SearchPanel from "./SearchPanel";

interface Props {}
interface State {}

export default class ColMd8 extends React.Component<Props, State> {
  public render() {
    return (
      <Row>
        <Col md={2} />
        <Col md={8}>
          <SearchPanel />
        </Col>
        <Col md={2} />
      </Row>
    );
  }
}
