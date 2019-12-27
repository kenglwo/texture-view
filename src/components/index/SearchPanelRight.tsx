import React from "react";
import ReactDOM from "react-dom";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import SearchForm from "./SearchForm";

interface Props {}
interface State {}

export default class SearchPanelRight extends React.Component<Props, State> {
  public render() {
    return (
      <Col md={4}>
        <Card bg="warning">
          <Card.Body>
            <SearchForm />
          </Card.Body>
        </Card>
      </Col>
    );
  }
}
