import * as React from "react";
import * as ReactDOM from "react-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import RecipeList from "./RecipeList";
import { SearchQueryKeyword } from "../models/Types";

interface Props extends SearchQueryKeyword {}
interface State {
  recipe_order: string;
}

export default class ResultPageBody extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { recipe_order: "new" };
    this.onSelectHandler = this.onSelectHandler.bind(this);
  }

  public onSelectHandler(eventKey: string, event: object) {
    switch (eventKey) {
      case "new":
        this.setState({ recipe_order: "new" });
        break;
      case "review":
        this.setState({ recipe_order: "review" });
        break;
      case "texture":
        this.setState({ recipe_order: "texture" });
        break;
      case "sizzle":
        this.setState({ recipe_order: "sizzle" });
        break;
      case "thanks":
        this.setState({ recipe_order: "thanks" });
        break;
      default:
        break;
    }
  }

  public render() {
    console.log(`recipe_order: ${this.state.recipe_order}`);
    return (
      <Row>
        <Col md={3} />
        <Col md={6}>
          <DropdownButton
            id="recipe_order_button"
            title="表示順"
            variant="secondary"
          >
            <Dropdown.Item eventKey="new" onSelect={this.onSelectHandler}>
              新着順
            </Dropdown.Item>
            <Dropdown.Item eventKey="review" onSelect={this.onSelectHandler}>
              レビュー数
            </Dropdown.Item>
            <Dropdown.Item eventKey="texture" onSelect={this.onSelectHandler}>
              テクスチャ
            </Dropdown.Item>
            <Dropdown.Item eventKey="sizzle" onSelect={this.onSelectHandler}>
              シズルワード
            </Dropdown.Item>
            <Dropdown.Item eventKey="thanks" onSelect={this.onSelectHandler}>
              感謝
            </Dropdown.Item>
          </DropdownButton>
          <RecipeList
            keyword={this.props.keyword}
            recipe_order={this.state.recipe_order}
          />
        </Col>
        <Col md={3} />
      </Row>
    );
  }
}
