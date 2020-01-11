import React from "react";
import ReactDOM from "react-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Badge from "react-bootstrap/Badge";

interface Props {
  description: string;
}
interface State {
  description: string;
}

export default class RecipeInfo extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
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
      </div>
    );
  }
}
