import * as React from "react";
import * as ReactDOM from "react-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Badge from "react-bootstrap/Badge";
import {
  WordCloudCategoryArrayElement,
  WordCloudCategorySizzleElement,
  WordCloudCategoryThanksElement
} from "../models/Types";
import RecipeWordCloudCategory from "./RecipeWordCloudCategory";

interface Props {
  wordcloud_texture: WordCloudCategoryArrayElement[];
  colorStyle: string;
}
interface State {
  wordcloud_texture: WordCloudCategoryArrayElement[];
  colorStyle: string;
}

export default class RecipeCardFooterWordCloud extends React.Component<
  Props,
  State
> {
  constructor(props: Props) {
    super(props);
    this.state = {
      wordcloud_texture: this.props.wordcloud_texture,
      colorStyle: this.props.colorStyle
      // wordcloud_sizzle: [],
      // wordcloud_thanks: []
    };
  }

  public componentWillReceiveProps(nextProps: Props) {
    this.setState({ colorStyle: nextProps.colorStyle });
  }

  public render() {
    return (
      <RecipeWordCloudCategory
        wordcloudCategoryElement={this.state.wordcloud_texture}
        colorStyle={this.state.colorStyle}
      />
    );
  }
}
