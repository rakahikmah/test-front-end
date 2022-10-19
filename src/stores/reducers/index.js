import { combineReducers } from "redux";
import categoryMovie from "./categoryMovie/categoryMovie";
import listMovie from "./listMovie/listMovie";

export const rootReducer = combineReducers({
  categoryMovie,
  listMovie
});
