import * as React from "react";
import * as ReactDOM from "react-dom";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { withRouter, RouteComponentProps } from "react-router-dom";

interface Props extends RouteComponentProps<{}> {}

interface State {
  keyword: string;
  thanks_word: string;
}

class SearchFormThanks extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { keyword: "", thanks_word: "ありがとう" };
    this.textChange = this.textChange.bind(this);
    this.selectChange = this.selectChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  public render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Group>
          <Form.Label htmlFor="dish_name">
            <h3>キーワード</h3>
          </Form.Label>
          <Form.Control
            as="input"
            type="text"
            name={"dish"}
            id={"dish_name"}
            className={"mb-3"}
            value={this.state.keyword}
            onChange={this.textChange}
            placeholder="キーワードを入力"
          />
          <Form.Label htmlFor="thanks_word">
            <h3>感謝のことば</h3>
          </Form.Label>
          <Form.Control
            as="select"
            name={"thanks_word"}
            id={"thanks_word"}
            value={this.state.thanks_word}
            onChange={this.selectChange}
          >
            <option value={"ありがとう"}>ありがとう</option>
            <option value={"感謝"}>感謝</option>
            <option value={"おかげさま"}>おかげさま</option>
          </Form.Control>
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    );
  }

  private textChange(event: React.FormEvent) {
    const newValue: string = (event.target as HTMLInputElement).value;
    this.setState({ keyword: newValue });
  }

  private selectChange(event: React.FormEvent) {
    const newValue: string = (event.target as HTMLSelectElement).value;
    this.setState({ thanks_word: newValue });
  }

  private handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const keyword = this.state.keyword;
    const thanks_word = this.state.thanks_word;
    const url = `/result_thanks/${keyword}/${thanks_word}/0`;

    this.props.history.push(url);
  }
}

export default withRouter(SearchFormThanks);
