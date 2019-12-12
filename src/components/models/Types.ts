export type SearchQuery = {
  keyword: string;
  texture: string;
};

export type RecipeItem = {
  recipe_id: string;
  title: string;
  description: string;
  advice: string;
  texture_count: number;
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
