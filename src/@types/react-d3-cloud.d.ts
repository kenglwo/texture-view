import * as React from "react";
import { WordCloudCategoryElement } from "../models/Types";

declare namespace WordCloud {
  // export interface WordCloudElement {
  //   text: string;
  //   value: number;
  // }
  export interface WordCloudProps extends React.HTMLProps<WordCloud> {
    // data: { text: string; value: number }[];
    data: T[];
    width?: number;
    height?: number;
    // fontSizeMapper?: (data: WordCloudElement) => number;
    fontSizeMapper?: (data: WordCloudCategoryElement) => number;
    // rotate?: (data: WordCloudElement) => number;
    rotate?: (data: WordCloudCategoryElement) => number;
    padding?: number;
    font?: string;
    onWordClick?: (text: string[]) => Void;
    onWordMouseOver?: (text: string[]) => Void;
    onWordMouseOut?: (text: string[]) => Void;
    colorStyle?: string;
    random?: number;
  }
}

declare class WordCloud extends React.Component<WordCloud.WordCloudProps> {}
export = WordCloud;
