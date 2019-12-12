import React from "react";
import ReactDOM from "react-dom";
import Col from "react-bootstrap/Col";
import PageNav from "../common_components/PageNav";
import Header from "../common_components/Header";
import SearchPanel from "./SearchPanel";

interface Props {}
interface State {}

export default class ColMd8 extends React.Component<Props, State> {
  public render() {
    return (
      <Col md={8}>
        <PageNav />
        <Header title={"みんなの食感View"} />
        <SearchPanel />
      </Col>
    );
  }
}
