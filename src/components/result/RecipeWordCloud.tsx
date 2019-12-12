import React from "react";
import ReactDOM from "react-dom";
import * as d3 from "d3";
import WordCloud from "react-d3-cloud";
import { WordCloudElement } from "../models/Types";

interface Props {
  wordcloudElement: WordCloudElement[];
}
interface State {
  wordcloudElement: WordCloudElement[];
}

// const array: number[] = [];
// for (const item of this.state.wordcloudElement) {
//   console.log(item);
//   array.push(item.value);
// }
// this.state.wordcloudElement.map(item => {
//   array.push(item.value);
// });
// console.log(array);
// const countMax: number = Math.max(...array);
const sizeScale = d3
  .scaleLog()
  // .domain([1, countMax])
  .range([10, 50]);
const fontSizeMapper: (data: WordCloudElement) => number = data => {
  // return Math.log10(myData.value) * 10;
  const size = sizeScale(data.value);
  console.log(size);
  return sizeScale(data.value);
};
const rotate: (data: WordCloudElement) => number = myData => myData.value % 360;

export default class RecipeWordCloud extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      wordcloudElement: this.props.wordcloudElement
    };
  }

  public render() {
    return (
      <div>
        <WordCloud
          data={this.state.wordcloudElement}
          fontSizeMapper={fontSizeMapper}
          width={310}
          height={310}
          padding={0}
        />
      </div>
    );
  }
}
