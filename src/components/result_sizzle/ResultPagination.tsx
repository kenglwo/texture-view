import React from "react";
import ReactDOM from "react-dom";
import Pagination from "react-bootstrap/Pagination";
import PageItem from "react-bootstrap/PageItem";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

interface Props {}
interface State {
  items: JSX.Element[];
}

export default class ResultPagination extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    const active = 1;
    const pageItems: JSX.Element[] = [];
    for (let number = 1; number <= 5; number += 1) {
      pageItems.push(
        <Pagination.Item key={number} active={number === active}>
          {number}
        </Pagination.Item>
      );
    }
    this.state = {
      items: pageItems
    };
  }

  public paginationBasic(): JSX.Element {
    return (
      <div>
        <Pagination>{this.state.items}</Pagination>
      </div>
    );
  }

  // public componentDidMount() {}

  public render() {
    const paginationItems: JSX.Element = this.paginationBasic();
    return (
      <Row>
        <Col md={3} />
        <Col md={6}>{paginationItems}</Col>
        <Col md={3} />
      </Row>
    );
  }
}
