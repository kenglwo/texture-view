import * as React from "react";
import * as ReactDOM from "react-dom";
import Row from "react-bootstrap/Row";
import CardDeck from "react-bootstrap/CardDeck";
import RecipeCard from "./RecipeCard";
import { SearchQueryKeyword, RecipeItemKeyword } from "../models/Types";

interface Props extends SearchQueryKeyword {
  recipe_order: string;
}

interface State {
  isLoaded: boolean;
  items: RecipeItemKeyword[];
  recipe_order: string;
}

export default class RecipeList extends React.Component<Props, State> {
  private keyword: string;

  constructor(props: Props) {
    super(props);
    this.keyword = this.props.keyword;

    this.state = {
      isLoaded: false,
      recipe_order: "new",
      items: []
    };
    this.loadDataFromServer = this.loadDataFromServer.bind(this);
  }

  public loadDataFromServer(keyword: string) {
    // const baseUrl = "http://kento/ex-gen-app/api/recipe-info";
    const baseUrl = "http://localhost:3000/api/recipe-info-keyword";
    const url = `${baseUrl}?keyword=${keyword}&order=${this.props.recipe_order}`;
    console.log(url);

    fetch(url, { mode: "cors" })
      .then(res => res.json())
      .then(
        jsonData => {
          this.setState({ items: jsonData });
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
    this.loadDataFromServer(this.keyword);
  }

  public componentDidUpdate(prevProps: Props) {
    console.log(
      `$$$$$$$$$ prev: ${prevProps.recipe_order}, this: ${this.props.recipe_order}`
    );
    if (this.props.recipe_order !== prevProps.recipe_order) {
      this.loadDataFromServer(this.keyword);
    }
  }

  public render() {
    console.log("###########  render RecipeList");
    const items = this.state.items;
    if (this.state.items.length !== 0) {
      // console.log(this.state.items[0].title);
    }
    return (
      <CardDeck style={{ display: "flex", flexDirection: "column" }}>
        {items.map((item, index) => {
          console.log(`CardList: ${item.title}`);
          return (
            <RecipeCard
              key={String(index)}
              recipe_id={item.recipe_id}
              user_id={item.user_id}
              title={item.title}
              description={item.description}
              recipe_count={item.recipe_count}
              review_count={item.review_count}
              texture_count={item.texture_count}
              sizzle_count={item.sizzle_count}
              thanks_count={item.thanks_count}
            />
          );
        })}
      </CardDeck>
    );
  }
}
