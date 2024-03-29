export type SearchQuery = {
  keyword: string;
  texture: string;
};
export type SearchQuerySizzle = {
  keyword: string;
  sizzle_word: string;
};
export type SearchQueryThanks = {
  keyword: string;
  thanks_word: string;
};

export type RecipeItem = {
  recipe_id: string;
  title: string;
  description: string;
  advice: string;
  texture_count: number;
};
export type RecipeItemSizzle = {
  recipe_id: string;
  title: string;
  description: string;
  advice: string;
  sizzleWord_count: number;
};
export type RecipeItemThanks = {
  recipe_id: string;
  title: string;
  description: string;
  advice: string;
  thanksWord_count: number;
};

export type PageNum = {
  pageNum: number;
};

export type ReduxState = {
  searchQuery: SearchQuery;
  recipeItems: RecipeItem[];
  compareItems: RecipeItem[];
  resultPageNum: number;
};

export type WordCloudElement = {
  text: string;
  value: number;
};

export type WordCloudCategoryElement = {
  text: string;
  value: number;
  category_big: number;
  category_middle: number;
  category_small: number;
};

export type WordCloudCategoryArrayElement = {
  text: string;
  value: number;
  recognition_rate: number;
  category_big_id_array: number[];
  category_middle_id_array: number[];
  category_small_id_array: number[];
};

export type WordCloudCategorySizzleElement = {
  text: string;
  value: number;
  category_big_id: number;
};
export type WordCloudCategoryThanksElement = {
  text: string;
  value: number;
};
