import React from "react";
import ReactDOM from "react-dom";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import SearchForm from "./SearchForm";

interface Props {}
interface State {}

export default class SearchPanelLeft extends React.Component<Props, State> {
  public render() {
    return (
      <Col md={6}>
        <Card bg="info">
          <Card.Body>
            <div className={"card-title"}>
              <h3 id={"texture"} />
            </div>
            <SearchForm />
          </Card.Body>
        </Card>
      </Col>
    );
  }
}
