import React from "react";
import ReactDOM from "react-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import SearchPanelLeft from "./SearchPanelLeft";
import SearchPanelMiddle from "./SearchPanelMiddle";
import SearchPanelRight from "./SearchPanelRight";

interface Props {}
interface State {}

export default class SearchPanel extends React.Component<Props, State> {
  public render() {
    return (
      <Container>
        <Row>
          <SearchPanelLeft />
          <SearchPanelMiddle />
          <SearchPanelRight />
        </Row>
      </Container>
    );
  }
}
