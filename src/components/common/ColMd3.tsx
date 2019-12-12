import React from "react";
import Col from "react-bootstrap/Col";
import ReactDOM from "react-dom";

interface Props {}
interface State {}

export default class ColMd3 extends React.Component<Props, State> {
  public render() {
    return <Col md={3} />;
  }
}
