import * as React from "react";
import * as ReactDOM from "react-dom";
import * as d3 from "d3";
import WordCloud from "react-d3-cloud";
import { WordCloudCategorySizzleElement } from "../models/Types";

interface Props {
  wordcloud_sizzle: WordCloudCategorySizzleElement[];
  colorStyle: string;
}
interface State {
  wordcloud_sizzle: WordCloudCategorySizzleElement[];
  colorStyle: string;
}

// const rotate: (data: WordCloudCategoryElement) => number = myData =>
//   myData.value % 360;

export default class RecipeWordCloudSizzle extends React.Component<
  Props,
  State
> {
  constructor(props: Props) {
    super(props);
    this.state = {
      wordcloud_sizzle: this.props.wordcloud_sizzle,
      colorStyle: this.props.colorStyle
    };
  }

  public componentWillReceiveProps(nextProps: Props) {
    this.setState({ colorStyle: nextProps.colorStyle });
    console.log(nextProps.colorStyle);
  }

  public render() {
    const array: number[] = [];
    for (const item of this.state.wordcloud_sizzle) {
      array.push(item.value);
    }
    const countMax = Math.max(...array);

    const sizeScale: (arg0: number) => number = d3
      .scaleLog()
      .domain([1, countMax])
      .range([10, 44]);

    const fontSizeMapper = (data: WordCloudCategorySizzleElement): number => {
      return sizeScale(data.value);
    };

    return (
      <WordCloud
        data={this.state.wordcloud_sizzle}
        fontSizeMapper={fontSizeMapper}
        width={310}
        height={310}
        padding={0}
        colorStyle={this.state.colorStyle}
      />
    );
  }
}