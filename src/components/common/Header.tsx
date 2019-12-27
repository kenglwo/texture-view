import * as React from "react";
import * as ReactDOM from "react-dom";

interface Props {
  title: string;
}
interface State {
  title: string;
}

export default class Header extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      title: this.props.title
    };
  }
  public render() {
    return (
      <header>
        <div className={"jumbotron text-center text-nowrap alert-secondary"}>
          <h1>{this.state.title}</h1>
          <h5>
            aggregate and visualize informative words in reviews of a recipe
          </h5>
        </div>
      </header>
    );
  }
}
