import * as React from "react";
import * as ReactDOM from "react-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import RecipeWordCloud from "./RecipeWordCloud";
import RecipeInfo from "./RecipeInfo";
import { WordCloudElement, WordCloudCategoryElement } from "../models/Types";

interface Props {
  recipe_id: string;
  advice: string;
  description: string;
}
interface State {
  recipeId: string;
  advice: string;
  description: string;
  wordcloudElement: WordCloudElement[];
}

export default class RecipeBody extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      advice: this.props.advice,
      description: this.props.description,
      recipeId: this.props.recipe_id,
      wordcloudElement: []
      // wordcloudElement: [{ text: "Hello", value: 30 }]
    };

    this.loadWordcloudElement = this.loadWordcloudElement.bind(this);
    // this.forceUpdate = this.forceUpdate.bind(this);
  }

  public loadWordcloudElement() {
    const baseUrl = "http://localhost:3000/api/texture";
    const url = `${baseUrl}?recipe_id=${this.state.recipeId}`;

    fetch(url, { mode: "cors" })
      .then(res => res.json())
      .then(
        jsonData => {
          this.setState({
            wordcloudElement: jsonData
          });
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
    // console.log(this.state.wordcloudElement);
  }

  public render() {
    if (this.state.wordcloudElement.length === 0) {
      return <div />;
    }
    return (
      <Container>
        <Row>
          <Col md={6}>
            <RecipeWordCloud wordcloudElement={this.state.wordcloudElement} />
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
