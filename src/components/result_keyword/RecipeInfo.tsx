import React from "react";
import ReactDOM from "react-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Badge from "react-bootstrap/Badge";

interface Props {
  user_id: string;
  description: string;
}
interface State {
  user_id: string;
  description: string;
}

export default class RecipeInfo extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      user_id: this.props.user_id,
      description: this.props.description
      // review_count: this.props.review_count,
      // texture_count: this.props.texture_count,
      // sizzle_count: this.props.sizzle_count,
      // thanks_count: this.props.thanks_count
    };
  }

  public render() {
    return (
      <div>
        <Card.Text>{this.state.description}</Card.Text>
        <div className="text-right recipe_author">
          投稿者：{this.state.user_id}
        </div>
      </div>
    );
  }
}
