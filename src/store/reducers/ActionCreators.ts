import { AppDispatch } from "../store";
import { newsSlice } from "./NewsSlice";

export const fetchNews = () => async (dispatch: AppDispatch) => {
  try {
    const response = require("../../assets/data/index.json");
    dispatch(newsSlice.actions.newsFetching(response));
  } catch (e) {
    dispatch(newsSlice.actions.newsFetchingError("Не удалось загрузить посты"));
  }
};
