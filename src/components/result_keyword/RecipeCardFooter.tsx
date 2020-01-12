import * as React from "react";
import * as ReactDOM from "react-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Badge from "react-bootstrap/Badge";
import ButtonToolbar from "react-bootstrap/ButtonToolbar";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import {
  WordCloudCategoryArrayElement,
  WordCloudCategorySizzleElement,
  WordCloudCategoryThanksElement
} from "../models/Types";
import RecipeCardFooterWordCloud from "./RecipeCardFooterWordCloud";
import RecipeWordCloudSizzle from "./RecipeWordCloudSizzle";

interface Props {
  recipe_id: string;
  review_count: number;
  texture_count: number;
  sizzle_count: number;
  thanks_count: number;
}
interface State {
  recipe_id: string;
  review_count: number;
  texture_count: number;
  sizzle_count: number;
  thanks_count: number;
  wordcloud_texture: WordCloudCategoryArrayElement[];
  wordcloud_texture_isloaded: boolean;
  texture_colorStyle: string;
  wordcloud_texture_isvisible: boolean;
  wordcloud_sizzle: WordCloudCategorySizzleElement[];
  wordcloud_sizzle_isloaded: boolean;
  wordcloud_sizzle_isvisible: boolean;
  sizzle_colorStyle: string;
  wordcloud_thanks: WordCloudCategoryThanksElement[];
}

export default class RecipeCardFooter extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      recipe_id: this.props.recipe_id,
      review_count: Number(this.props.review_count),
      texture_count: Number(this.props.texture_count),
      sizzle_count: Number(this.props.sizzle_count),
      thanks_count: Number(this.props.thanks_count),
      wordcloud_texture: [],
      wordcloud_texture_isloaded: false,
      wordcloud_texture_isvisible: false,
      wordcloud_sizzle: [],
      wordcloud_sizzle_isloaded: false,
      wordcloud_sizzle_isvisible: false,
      wordcloud_thanks: [],
      texture_colorStyle: "colorful",
      sizzle_colorStyle: "colorful"
    };
    this.loadWordcloudElement.bind(this);
    this.onSelectHandler = this.onSelectHandler.bind(this);
  }

  public loadWordcloudElement(wordType: string) {
    let url = "http://localhost:3000/api/";
    switch (wordType) {
      case "texture":
        if (this.state.wordcloud_texture_isloaded === false) {
          url = `${url}texture_category_array?recipe_id=${this.props.recipe_id}`;
          fetch(url, { mode: "cors" })
            .then(res => res.json())
            .then(
              jsonData => {
                this.setState({
                  wordcloud_texture: jsonData,
                  wordcloud_texture_isloaded: true,
                  wordcloud_texture_isvisible: true, // show wordcloud
                  wordcloud_sizzle_isvisible: false
                });
              },
              error => {
                this.setState({
                  // error,
                  // isLoaded: true
                });
              }
            );
        } else {
          if (this.state.wordcloud_texture_isvisible === true) {
            // hide wordcloud
            this.setState({
              wordcloud_texture_isvisible: false,
              wordcloud_sizzle_isvisible: false
            });
          } else {
            // show wordcloud
            this.setState({
              wordcloud_texture_isvisible: true,
              wordcloud_sizzle_isvisible: false
            });
          }
        }
        break;
      case "sizzle":
        if (this.state.wordcloud_sizzle_isloaded === false) {
          url = `${url}sizzle_word?recipe_id=${this.props.recipe_id}`;
          fetch(url, { mode: "cors" })
            .then(res => res.json())
            .then(
              jsonData => {
                this.setState({
                  wordcloud_sizzle: jsonData,
                  wordcloud_sizzle_isloaded: true,
                  wordcloud_texture_isvisible: false,
                  wordcloud_sizzle_isvisible: true // show wordcloud
                });
              },
              error => {
                this.setState({
                  // error,
                  // isLoaded: true
                });
              }
            );
        } else {
          if (this.state.wordcloud_sizzle_isvisible === true) {
            // hide wordcloud
            this.setState({
              wordcloud_texture_isvisible: false,
              wordcloud_sizzle_isvisible: false
            });
          } else {
            // show wordcloud
            this.setState({
              wordcloud_texture_isvisible: false,
              wordcloud_sizzle_isvisible: true
            });
          }
        }
        break;
      case "thanks":
        console.log("fetch thanks");
        url = `${url}thanks_word?recipe_id=${this.state.recipe_id}`;
        fetch(url, { mode: "cors" })
          .then(res => res.json())
          .then(
            jsonData => {
              this.setState({
                wordcloud_thanks: jsonData
              });
              console.log(this.state.wordcloud_thanks);
            },
            error => {
              this.setState({
                // error,
                // isLoaded: true
              });
            }
          );
        break;
      default:
        console.log("wordType key error");
        break;
    }
  }

  public onSelectHandler(eventKey: string, event: object) {
    const eventKeyArray = eventKey.split("-");

    if (eventKeyArray[0] === "texture") {
      switch (eventKeyArray[1]) {
        case "colorful":
          this.setState({ texture_colorStyle: "colorful" });
          break;
        case "mono":
          this.setState({ texture_colorStyle: "mono" });
          break;
        case "categorical":
          this.setState({ texture_colorStyle: "categorical" });
          break;
        default:
          console.log("Dropdown Selector Handler Error");
      }
    }
    if (eventKeyArray[0] === "sizzle") {
      switch (eventKeyArray[1]) {
        case "colorful":
          this.setState({ sizzle_colorStyle: "colorful" });
          break;
        case "mono":
          this.setState({ sizzle_colorStyle: "mono" });
          break;
        case "categorical":
          this.setState({ sizzle_colorStyle: "categorical" });
          break;
        default:
          console.log("Dropdown Selector Handler Error");
      }
    }

    // console.log(`{RecipeBodyCategory: ${this.state.colorStyle}}`);
  }

  public componentDidUpdate(prevProps: Props) {
    if (this.props.recipe_id !== prevProps.recipe_id) {
      this.setState({
        recipe_id: this.props.recipe_id,
        review_count: this.props.review_count,
        texture_count: this.props.texture_count,
        sizzle_count: this.props.sizzle_count,
        thanks_count: this.props.thanks_count
      });
    }
  }

  public render() {
    if (this.props.review_count === 0) {
      return <div />;
    }
    if (this.state.wordcloud_texture_isvisible === true) {
      return (
        <div>
          <Card.Text>
            <Button variant="dark" size="sm" className="mr-2">
              レビュー数
              <Badge variant="light" className="ml-1" pill={true}>
                {this.state.review_count}
              </Badge>
            </Button>
            <Button
              variant="primary"
              size="sm"
              className="mr-2"
              onClick={this.loadWordcloudElement.bind(this, "texture")}
              disabled={this.state.texture_count === 0}
            >
              テクスチャ
              <Badge variant="light" className="ml-1" pill={true}>
                {this.state.texture_count}
              </Badge>
            </Button>
            <Button
              variant="success"
              size="sm"
              className="mr-2"
              onClick={this.loadWordcloudElement.bind(this, "sizzle")}
              disabled={this.state.sizzle_count === 0}
            >
              シズルワード
              <Badge variant="light" className="ml-1" pill={true}>
                {this.state.sizzle_count}
              </Badge>
            </Button>
            <Button
              variant="danger"
              size="sm"
              onClick={this.loadWordcloudElement.bind(this, "thanks")}
              disabled={this.state.thanks_count === 0}
            >
              感謝
              <Badge variant="light" className="ml-1" pill={true}>
                {this.state.thanks_count}
              </Badge>
            </Button>
          </Card.Text>
          <div className="d-flex justify-content-center">
            <ButtonToolbar className="mb-4">
              <DropdownButton
                id="dropdown-basic-button"
                title="color style"
                size="sm"
                variant="secondary"
              >
                <Dropdown.Item
                  eventKey="texture-colorful"
                  onSelect={this.onSelectHandler}
                >
                  colorful
                </Dropdown.Item>
                <Dropdown.Item
                  eventKey="texture-mono"
                  onSelect={this.onSelectHandler}
                >
                  mono color
                </Dropdown.Item>
                <Dropdown.Item
                  eventKey="texture-categorical"
                  onSelect={this.onSelectHandler}
                >
                  categorical color
                </Dropdown.Item>
              </DropdownButton>
            </ButtonToolbar>
            <RecipeCardFooterWordCloud
              wordcloud_texture={this.state.wordcloud_texture}
              colorStyle={this.state.texture_colorStyle}
            />
          </div>
        </div>
      );
    }
    if (this.state.wordcloud_sizzle_isvisible === true) {
      return (
        <div>
          <Card.Text>
            <Button variant="dark" size="sm" className="mr-2">
              レビュー数
              <Badge variant="light" className="ml-1" pill={true}>
                {this.state.review_count}
              </Badge>
            </Button>
            <Button
              variant="primary"
              size="sm"
              className="mr-2"
              onClick={this.loadWordcloudElement.bind(this, "texture")}
              disabled={this.state.texture_count === 0}
            >
              テクスチャ
              <Badge variant="light" className="ml-1" pill={true}>
                {this.state.texture_count}
              </Badge>
            </Button>
            <Button
              variant="success"
              size="sm"
              className="mr-2"
              onClick={this.loadWordcloudElement.bind(this, "sizzle")}
              disabled={this.state.sizzle_count === 0}
            >
              シズルワード
              <Badge variant="light" className="ml-1" pill={true}>
                {this.state.sizzle_count}
              </Badge>
            </Button>
            <Button
              variant="danger"
              size="sm"
              onClick={this.loadWordcloudElement.bind(this, "thanks")}
              disabled={this.state.thanks_count === 0}
            >
              感謝
              <Badge variant="light" className="ml-1" pill={true}>
                {this.state.thanks_count}
              </Badge>
            </Button>
          </Card.Text>
          <div className="d-flex justify-content-center">
            <ButtonToolbar className="mb-4">
              <DropdownButton
                id="dropdown-basic-button"
                title="color style"
                size="sm"
                variant="secondary"
              >
                <Dropdown.Item
                  eventKey="sizzle-colorful"
                  onSelect={this.onSelectHandler}
                >
                  colorful
                </Dropdown.Item>
                <Dropdown.Item
                  eventKey="sizzle-mono"
                  onSelect={this.onSelectHandler}
                >
                  mono color
                </Dropdown.Item>
                <Dropdown.Item
                  eventKey="sizzle-categorical"
                  onSelect={this.onSelectHandler}
                >
                  categorical color
                </Dropdown.Item>
              </DropdownButton>
            </ButtonToolbar>
            <RecipeWordCloudSizzle
              wordcloud_sizzle={this.state.wordcloud_sizzle}
              colorStyle={this.state.sizzle_colorStyle}
            />
          </div>
        </div>
      );
    }
    return (
      <Card.Text>
        <Button variant="dark" size="sm" className="mr-2">
          レビュー数
          <Badge variant="light" className="ml-1" pill={true}>
            {this.state.review_count}
          </Badge>
        </Button>
        <Button
          variant="primary"
          size="sm"
          className="mr-2"
          onClick={this.loadWordcloudElement.bind(this, "texture")}
          disabled={this.state.texture_count === 0}
        >
          テクスチャ
          <Badge variant="light" className="ml-1" pill={true}>
            {this.state.texture_count}
          </Badge>
        </Button>
        <Button
          variant="success"
          size="sm"
          className="mr-2"
          onClick={this.loadWordcloudElement.bind(this, "sizzle")}
          disabled={this.state.sizzle_count === 0}
        >
          シズルワード
          <Badge variant="light" className="ml-1" pill={true}>
            {this.state.sizzle_count}
          </Badge>
        </Button>
        <Button
          variant="danger"
          size="sm"
          onClick={this.loadWordcloudElement.bind(this, "thanks")}
          disabled={this.state.thanks_count === 0}
        >
          感謝
          <Badge variant="light" className="ml-1" pill={true}>
            {this.state.thanks_count}
          </Badge>
        </Button>
      </Card.Text>
    );
  }
}
