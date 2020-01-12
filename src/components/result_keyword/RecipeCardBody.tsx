import * as React from "react";
import * as ReactDOM from "react-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ButtonToolbar from "react-bootstrap/ButtonToolbar";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import Image from "react-bootstrap/Image";
// import RecipeWordCloudCategory from "./RecipeWordCloudCategory";
import RecipeInfo from "./RecipeInfo";
// import { WordCloudCategoryElement } from "../models/Types";
import { WordCloudCategoryThanksElement } from "../models/Types";

interface Props {
  recipe_id: string;
  user_id: string;
  description: string;
  // review_count: number;
  // texture_count: number;
  // sizzle_count: number;
  // thanks_count: number;
}
interface State {
  recipe_id: string;
  user_id: string;
  description: string;
  // review_count: number;
  // texture_count: number;
  // sizzle_count: number;
  // thanks_count: number;
  // wordcloudCategoryElement: WordCloudCategoryThanksElement[];
  // colorStyle: string;
}

export default class RecipeCardBody extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    // this.state = {
    //   recipe_id: this.props.recipe_id,
    //   user_id: this.props.user_id,
    //   description: this.props.description
    // review_count: this.props.review_count,
    // texture_count: this.props.texture_count,
    // sizzle_count: this.props.sizzle_count,
    // thanks_count: this.props.thanks_count
    // wordcloudCategoryElement: [],
    // colorStyle: "colorful"
    // };

    // this.loadWordcloudElement = this.loadWordcloudElement.bind(this);
    // this.onSelectHandler = this.onSelectHandler.bind(this);
  }

  // public loadWordcloudElement() {
  //   const baseUrl = "http://localhost:3000/api/thanks_word";
  //   const url = `${baseUrl}?recipe_id=${this.state.recipe_id}`;
  //
  //   fetch(url, { mode: "cors" })
  //     .then(res => res.json())
  //     .then(
  //       jsonData => {
  //         this.setState({
  //           wordcloudCategoryElement: jsonData
  //         });
  //       },
  //       error => {
  //         this.setState({
  //           // error,
  //           // isLoaded: true
  //         });
  //       }
  //     );
  // }

  public componentDidMount() {
    // this.loadWordcloudElement();
  }

  public componentDidUpdate() {
    // console.log(`{RecipeCardBody: ${this.state.colorStyle}}`);
  }

  // public onSelectHandler(eventKey: string, event: object) {
  //   switch (eventKey) {
  //     case "colorful":
  //       this.setState({ colorStyle: "colorful" });
  //       break;
  //     case "mono":
  //       this.setState({ colorStyle: "mono" });
  //       break;
  //     case "categorical":
  //       this.setState({ colorStyle: "categorical" });
  //       break;
  //     default:
  //       console.log("Dropdown Selector Handler Error");
  //   }

  // console.log(`{RecipeCardBody: ${this.state.colorStyle}}`);
  // }

  public render() {
    // if (this.state.wordcloudCategoryElement.length === 0) {
    //   return <div />;
    // }
    return (
      <Container>
        <Row>
          <Col md={3}>
            <Image src="../../img/hamburg.png" fluid={true} />
          </Col>
          <Col md={9}>
            <RecipeInfo
              description={this.props.description}
              user_id={this.props.user_id}
            />
          </Col>
        </Row>
      </Container>
    );
  }
}
