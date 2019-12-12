import React from "react";
import ReactDOM from "react-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
// import SearchColMd8 from "./SearchColMd8";
import IndexHeader from "./index/IndexHeader";
import IndexBody from "./index/IndexBody";
import IndexFooter from "./index/IndexFooter";

interface Props {}
interface State {}

export default class App extends React.Component<Props, State> {
  public render() {
    return (
      <Container fluid={true}>
        <IndexHeader />
        <IndexBody />
        <IndexFooter />
      </Container>
    );
  }
}
