import * as React from "react";
import * as ReactDOM from "react-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Badge from "react-bootstrap/Badge";
import {
  WordCloudCategoryArrayElement,
  WordCloudCategorySizzleElement,
  WordCloudCategoryThanksElement
} from "../models/Types";

interface Props {
  recipe_id: string;
  user_id: string;
  review_count: number;
  texture_count: number;
  sizzle_count: number;
  thanks_count: number;
}
interface State {
  recipe_id: string;
  user_id: string;
  review_count: number;
  texture_count: number;
  sizzle_count: number;
  thanks_count: number;
  wordcloud_texture: WordCloudCategoryArrayElement[];
  wordcloud_sizzle: WordCloudCategorySizzleElement[];
  wordcloud_thanks: WordCloudCategoryThanksElement[];
}

export default class RecipeCardFooter extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      recipe_id: this.props.recipe_id,
      user_id: this.props.user_id,
      review_count: Number(this.props.review_count),
      texture_count: Number(this.props.texture_count),
      sizzle_count: Number(this.props.sizzle_count),
      thanks_count: Number(this.props.thanks_count),
      wordcloud_texture: [],
      wordcloud_sizzle: [],
      wordcloud_thanks: []
    };
    this.loadWordcloudElement.bind(this);
  }

  public loadWordcloudElement(wordType: string) {
    let url = "http://localhost:3000/api/";
    switch (wordType) {
      case "texture":
        console.log("fetch texture");
        url = `${url}texture_category_array?recipe_id=${this.state.recipe_id}`;
        fetch(url, { mode: "cors" })
          .then(res => res.json())
          .then(
            jsonData => {
              this.setState({
                wordcloud_texture: jsonData
              });
              console.log(this.state.wordcloud_texture);
            },
            error => {
              this.setState({
                // error,
                // isLoaded: true
              });
            }
          );
        break;
      case "sizzle":
        console.log("fetch sizzle");
        url = `${url}sizzle_word?recipe_id=${this.state.recipe_id}`;
        fetch(url, { mode: "cors" })
          .then(res => res.json())
          .then(
            jsonData => {
              this.setState({
                wordcloud_sizzle: jsonData
              });
              console.log(this.state.wordcloud_sizzle);
            },
            error => {
              this.setState({
                // error,
                // isLoaded: true
              });
            }
          );
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

  public render() {
    if (this.state.review_count === 0) {
      return (
        <div className="text-right recipe_author">
          投稿者：{this.state.user_id}
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
        <div className="text-right recipe_author">
          <p>投稿者：{this.state.user_id}</p>
        </div>
      </Card.Text>
    );
  }
}
