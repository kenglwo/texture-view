import * as React from "react";
import * as ReactDOM from "react-dom";
import Row from "react-bootstrap/Row";
import CardDeck from "react-bootstrap/CardDeck";
import RecipeCard from "./RecipeCard";
import { SearchQueryThanks, RecipeItemThanks } from "../models/Types";

interface Props extends SearchQueryThanks {}

interface State {
  isLoaded: boolean;
  items: RecipeItemThanks[];
}

export default class RecipeList extends React.Component<Props, State> {
  private keyword: string;
  private thanksWord: string;

  constructor(props: Props) {
    super(props);
    this.keyword = this.props.keyword;
    this.thanksWord = this.props.thanks_word;

    this.state = {
      isLoaded: false,
      items: []
    };
    this.loadDataFromServer = this.loadDataFromServer.bind(this);
  }

  public loadDataFromServer(keyword: string, thanksWord: string) {
    // const baseUrl = "http://kento/ex-gen-app/api/recipe-info";
    const baseUrl = "http://localhost:3000/api/recipe-info-thanks";
    const url = `${baseUrl}?keyword=${keyword}&thanksWord=${thanksWord}`;

    fetch(url, { mode: "cors" })
      .then(res => res.json())
      .then(
        jsonData => {
          this.setState(state => {
            return { items: jsonData };
          });
        },
        error => {
          this.setState({
            // error,
            isLoaded: true
          });
        }
      );
  }

  public componentDidMount() {
    this.loadDataFromServer(this.keyword, this.thanksWord);
  }

  public render() {
    const items = this.state.items;
    return (
      <CardDeck style={{ display: "flex", flexDirection: "column" }}>
        {items.map((item, index) => {
          return (
            <RecipeCard
              key={String(index)}
              recipe_id={item.recipe_id}
              title={item.title}
              description={item.description}
              advice={item.advice}
              thanksWord_count={item.thanksWord_count}
            />
          );
        })}
      </CardDeck>
    );
  }
}
