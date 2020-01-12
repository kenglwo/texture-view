import React from "react";
import ReactDOM from "react-dom";
import Card from "react-bootstrap/Card";
import InputGroup from "react-bootstrap/InputGroup";

interface Props {
  title: string;
}
interface State {
  title: string;
}

export default class RecipeHeader extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      title: this.props.title
    };
  }

  public render() {
    return (
      <Card.Title>
        <h4 className={"recipe_title"}>{this.props.title}</h4>
      </Card.Title>
    );
  }
}
