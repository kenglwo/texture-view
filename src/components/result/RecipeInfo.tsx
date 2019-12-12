import React from "react";
import ReactDOM from "react-dom";
import Card from "react-bootstrap/Card";

interface Props {
  advice: string;
  description: string;
}
interface State {
  advice: string;
  description: string;
}

export default class RecipeInfo extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      advice: this.props.advice,
      description: this.props.description
    };
  }

  public render() {
    return (
      <div>
        <Card.Text>
          <span className={"recipe_info"}>Description</span>
          <br />
          {this.state.description}
        </Card.Text>
        <Card.Text>
          <span className={"recipe_info"}>Adcice</span>
          <br />
          {this.state.advice}
        </Card.Text>
      </div>
    );
  }
}
