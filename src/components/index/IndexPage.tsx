import * as React from "react";
import * as ReactDOM from "react-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
// import SearchColMd8 from "./SearchColMd8";
import IndexHeader from "./IndexHeader";
import IndexBody from "./IndexBody";
import IndexFooter from "./IndexFooter";

interface Props {}
interface State {}

export default class IndexPage extends React.Component<Props, State> {
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
