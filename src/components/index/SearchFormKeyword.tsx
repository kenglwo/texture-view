import * as React from "react";
import * as ReactDOM from "react-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { withRouter, RouteComponentProps } from "react-router-dom";

interface Props extends RouteComponentProps<{}> {}

interface State {
  keyword: string;
}

class SearchFormKeyword extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { keyword: "" };
    this.textChange = this.textChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  public render() {
    return (
      <Form onSubmit={this.handleSubmit} className="mt-4">
        <Row>
          <Col md={8}>
            <Form.Group>
              <Form.Control
                as="input"
                type="text"
                name={"dish"}
                id={"dish_name"}
                className={"mb-3"}
                value={this.state.keyword}
                onChange={this.textChange}
                placeholder="料理名を入力"
              />
            </Form.Group>
          </Col>
          <Col md={4}>
            <Button variant="primary" type="submit">
              レシピ検索
            </Button>
          </Col>
        </Row>
      </Form>
    );
  }

  private textChange(event: React.FormEvent) {
    const newValue: string = (event.target as HTMLInputElement).value;
    this.setState({ keyword: newValue });
  }

  private handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const keyword = this.state.keyword;
    const url = `/result_keyword/${keyword}/0`;

    this.props.history.push(url);
  }
}

export default withRouter(SearchFormKeyword);
