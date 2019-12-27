import * as React from "react";
import * as ReactDOM from "react-dom";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import SearchFormThanks from "./SearchFormThanks";

interface Props {}
interface State {}

export default class SearchPanelMiddle extends React.Component<Props, State> {
  public render() {
    return (
      <Col md={4}>
        <Card bg="danger">
          <Card.Body>
            <div className={"card-title"}>
              <h3 id={"thanks"} />
            </div>
            <SearchFormThanks />
          </Card.Body>
        </Card>
      </Col>
    );
  }
}
