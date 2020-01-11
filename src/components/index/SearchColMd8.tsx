import * as React from "react";
import * as ReactDOM from "react-dom";
import Col from "react-bootstrap/Col";
import PageNav from "../common/PageNav";
import Header from "../common/Header";
// import SearchPanel from "./SearchPanel";
import SearchPanelKeyword from "./SearchPanelKeyword";

interface Props {}
interface State {}

export default class ColMd8 extends React.Component<Props, State> {
  public render() {
    return (
      <Col md={8}>
        <PageNav />
        <Header title={"みんなの食感View"} />
        <SearchPanelKeyword />
      </Col>
    );
  }
}
