import React from "react";
import ReactDOM from "react-dom";
import Card from "react-bootstrap/Card";
import RecipeCardHeader from "./RecipeCardHeader";
import RecipeCardBody from "./RecipeCardBody";
import RecipeCardFooter from "./RecipeCardFooter";
import { RecipeItemKeyword } from "../models/Types";

interface Props extends RecipeItemKeyword {
  key: string;
}
interface State extends RecipeItemKeyword {}

export default class RecipeCard extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      recipe_id: this.props.recipe_id,
      user_id: this.props.user_id,
      title: this.props.title,
      description: this.props.description,
      recipe_count: this.props.recipe_count,
      review_count: this.props.review_count,
      texture_count: this.props.texture_count,
      sizzle_count: this.props.sizzle_count,
      thanks_count: this.props.thanks_count
    };
  }

  // public componentDidUpdate() {}

  public render() {
    return (
      <Card bg="warning" className="mb-5">
        <Card.Body>
          <RecipeCardHeader title={this.props.title} />
          <RecipeCardBody
            recipe_id={this.props.recipe_id}
            user_id={this.props.user_id}
            description={this.props.description}
          />
        </Card.Body>
        <Card.Footer>
          <RecipeCardFooter
            recipe_id={this.props.recipe_id}
            review_count={this.props.review_count}
            texture_count={this.props.texture_count}
            sizzle_count={this.props.sizzle_count}
            thanks_count={this.props.thanks_count}
          />
        </Card.Footer>
      </Card>
    );
  }
}
