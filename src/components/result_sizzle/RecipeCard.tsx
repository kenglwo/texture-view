import React from "react";
import ReactDOM from "react-dom";
import Card from "react-bootstrap/Card";
import RecipeHeader from "./RecipeHeader";
// import RecipeBody from "./RecipeBody";
import RecipeBodyCategory from "./RecipeBodyCategory";
import { RecipeItemSizzle } from "../models/Types";

interface Props extends RecipeItemSizzle {
  key: string;
}
interface State extends RecipeItemSizzle {}

export default class RecipeCard extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      advice: this.props.advice,
      description: this.props.description,
      recipe_id: this.props.recipe_id,
      sizzleWord_count: this.props.sizzleWord_count,
      title: this.props.title
    };
  }
  public render() {
    return (
      <Card bg="warning" className="mb-5">
        <Card.Body>
          <RecipeHeader title={this.state.title} />
          <RecipeBodyCategory
            recipe_id={this.state.recipe_id}
            advice={this.state.advice}
            description={this.state.description}
          />
        </Card.Body>
      </Card>
    );
  }
}
