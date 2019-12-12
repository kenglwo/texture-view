import React, { Children } from "react";
import ReactDOM from "react-dom";
import Row from "react-bootstrap/Row";
import CardDeck from "react-bootstrap/CardDeck";
import RecipeCard from "./RecipeCard";
import { SearchQuery, RecipeItem } from "../models/Types";

interface Props extends SearchQuery {}

interface State {
  isLoaded: boolean;
  items: RecipeItem[];
}

export default class RecipeList extends React.Component<Props, State> {
  private keyword: string;
  private texture: string;

  constructor(props: Props) {
    super(props);
    this.keyword = this.props.keyword;
    this.texture = this.props.texture;

    this.state = {
      isLoaded: false,
      items: []
    };
    this.loadDataFromServer = this.loadDataFromServer.bind(this);
  }

  public loadDataFromServer(keyword: string, texture: string) {
    // const baseUrl = "http://kento/ex-gen-app/api/recipe-info";
    const baseUrl = "http://localhost:3000/api/recipe-info";
    const url = `${baseUrl}?keyword=${keyword}&texture=${texture}`;

    fetch(url, { mode: "cors" })
      .then(res => res.json())
      .then(
        jsonData => {
          this.setState(state => {
            return { items: jsonData };
          });
          console.log(this.state.items);
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
    this.loadDataFromServer(this.keyword, this.texture);
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
              texture_count={item.texture_count}
            />
          );
        })}
      </CardDeck>
    );
  }
}
