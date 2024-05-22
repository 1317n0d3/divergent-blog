import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type NewsState = {
  count: number;
  newsPosts: TData[];
  error: string;
  allSymbolsCount: number;
};

const initialState: NewsState = {
  count: 0,
  newsPosts: [],
  error: "",
  allSymbolsCount: 0,
};

export const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {
    newsFetching: (state, action: PayloadAction<{ newsPosts: TData[] }>) => {
      state.newsPosts = action.payload.newsPosts;
      state.count = action.payload.newsPosts.length;
      state.allSymbolsCount = action.payload.newsPosts.reduce(
        (acc, post) => acc + post.content.length,
        0
      );
    },
    newsFetchingError: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
    },
    addNewsPost: (state, action: PayloadAction<TData>) => {
      state.count++;
      state.newsPosts.push({ ...action.payload });
    },
  },
});

export default newsSlice.reducer;
