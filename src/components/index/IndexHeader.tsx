import * as React from "react";
import * as ReactDOM from "react-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import PageNav from "../common/PageNav";
import Header from "../common/Header";

interface Props {}
interface State {}

export default class IndexHeader extends React.Component<Props, State> {
  public render() {
    return (
      <Row>
        <Col md={3} />
        <Col md={6}>
          <PageNav />
          <Header title={"みんなの食感View"} />
        </Col>
        <Col md={3} />
      </Row>
    );
  }
}
