import * as React from "react";
import * as ReactDOM from "react-dom";
import Row from "react-bootstrap/Row";
import CardDeck from "react-bootstrap/CardDeck";
import RecipeCard from "./RecipeCard";
import { SearchQuerySizzle, RecipeItemSizzle } from "../models/Types";

interface Props extends SearchQuerySizzle {}

interface State {
  isLoaded: boolean;
  items: RecipeItemSizzle[];
}

export default class RecipeList extends React.Component<Props, State> {
  private keyword: string;
  private sizzleWord: string;

  constructor(props: Props) {
    super(props);
    this.keyword = this.props.keyword;
    this.sizzleWord = this.props.sizzle_word;

    this.state = {
      isLoaded: false,
      items: []
    };
    this.loadDataFromServer = this.loadDataFromServer.bind(this);
  }

  public loadDataFromServer(keyword: string, sizzleWord: string) {
    const baseUrl = "http://localhost:3000/api/recipe-info-sizzle";
    const url = `${baseUrl}?keyword=${keyword}&sizzleWord=${sizzleWord}`;

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
    this.loadDataFromServer(this.keyword, this.sizzleWord);
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
              sizzleWord_count={item.sizzleWord_count}
            />
          );
        })}
      </CardDeck>
    );
  }
}
