import * as React from "react";
import * as ReactDOM from "react-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ButtonToolbar from "react-bootstrap/ButtonToolbar";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import RecipeWordCloudCategory from "./RecipeWordCloudCategory";
import RecipeInfo from "./RecipeInfo";
// import { WordCloudCategoryElement } from "../models/Types";
import { WordCloudCategorySizzleElement } from "../models/Types";

interface Props {
  recipe_id: string;
  advice: string;
  description: string;
}
interface State {
  recipeId: string;
  advice: string;
  description: string;
  wordcloudCategoryElement: WordCloudCategorySizzleElement[];
  colorStyle: string;
}

export default class RecipeBodyCategory extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      advice: this.props.advice,
      description: this.props.description,
      recipeId: this.props.recipe_id,
      wordcloudCategoryElement: [],
      colorStyle: "colorful"
    };

    this.loadWordcloudElement = this.loadWordcloudElement.bind(this);
    this.onSelectHandler = this.onSelectHandler.bind(this);
  }

  public loadWordcloudElement() {
    // const baseUrl = "http://localhost:3000/api/texture_category";
    const baseUrl = "http://localhost:3000/api/sizzle_word";
    // const baseUrl = `http://${process.env.HOST}:${process.env.PORT}/api/texture_category`;
    const url = `${baseUrl}?recipe_id=${this.state.recipeId}`;

    fetch(url, { mode: "cors" })
      .then(res => res.json())
      .then(
        jsonData => {
          this.setState({
            wordcloudCategoryElement: jsonData
          });
          // console.log(this.state.wordcloudCategoryElement);
        },
        error => {
          this.setState({
            // error,
            // isLoaded: true
          });
        }
      );
  }

  public componentDidMount() {
    this.loadWordcloudElement();
  }

  public componentDidUpdate() {
    // console.log(`{RecipeBodyCategory: ${this.state.colorStyle}}`);
  }

  public onSelectHandler(eventKey: string, event: object) {
    switch (eventKey) {
      case "colorful":
        this.setState({ colorStyle: "colorful" });
        break;
      case "mono":
        this.setState({ colorStyle: "mono" });
        break;
      case "categorical":
        this.setState({ colorStyle: "categorical" });
        break;
      default:
        console.log("Dropdown Selector Handler Error");
    }

    // console.log(`{RecipeBodyCategory: ${this.state.colorStyle}}`);
  }

  public render() {
    if (this.state.wordcloudCategoryElement.length === 0) {
      return <div />;
    }
    return (
      <Container>
        <Row>
          <Col md={6}>
            <ButtonToolbar className="mb-4">
              <DropdownButton
                id="dropdown-basic-button"
                title="color style"
                size="sm"
                variant="secondary"
              >
                <Dropdown.Item
                  eventKey="colorful"
                  onSelect={this.onSelectHandler}
                >
                  colorful
                </Dropdown.Item>
                <Dropdown.Item eventKey="mono" onSelect={this.onSelectHandler}>
                  mono color
                </Dropdown.Item>
                <Dropdown.Item
                  eventKey="categorical"
                  onSelect={this.onSelectHandler}
                >
                  categorical color
                </Dropdown.Item>
              </DropdownButton>
            </ButtonToolbar>
            <RecipeWordCloudCategory
              wordcloudCategoryElement={this.state.wordcloudCategoryElement}
              colorStyle={this.state.colorStyle}
            />
          </Col>
          <Col md={6}>
            <RecipeInfo
              advice={this.state.advice}
              description={this.state.description}
            />
          </Col>
        </Row>
      </Container>
    );
  }
}
