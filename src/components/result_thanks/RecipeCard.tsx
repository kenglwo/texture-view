import React from "react";
import ReactDOM from "react-dom";
import Card from "react-bootstrap/Card";
import RecipeHeader from "./RecipeHeader";
// import RecipeBody from "./RecipeBody";
import RecipeBodyCategory from "./RecipeBodyCategory";
import { RecipeItemThanks } from "../models/Types";

interface Props extends RecipeItemThanks {
  key: string;
}
interface State extends RecipeItemThanks {}

export default class RecipeCard extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      advice: this.props.advice,
      description: this.props.description,
      recipe_id: this.props.recipe_id,
      thanksWord_count: this.props.thanksWord_count,
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
