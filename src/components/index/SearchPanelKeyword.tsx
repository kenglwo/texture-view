import * as React from "react";
import * as ReactDOM from "react-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import SearchFormKeyword from "./SearchFormKeyword";

interface Props {}
interface State {}

export default class SearchPanelKeyword extends React.Component<Props, State> {
  public render() {
    return (
      <Container>
        <Row>
          <Col md={3} />
          <Col md={6}>
            <SearchFormKeyword />
          </Col>
          <Col md={3} />
        </Row>
      </Container>
    );
  }
}
