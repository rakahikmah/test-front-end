import { apis } from "../../../configs/globalApis";
import {
  GET_LIST_MOVIE_SUCCESS,
  GET_LIST_MOVIE_FAILURE,
} from "../../actions/listMovie/allMovieConstants";

export const getAllMovie = (page = 1) => async (dispatch) => {
  await apis
    .get(`movie/upcoming?api_key=2fccde01a371b106b09a241d6d1d5b49&page=${page}`, {
      headers: {
        "Content-Type": "application/json",
      },
      loading: false,
    })
    .then((response) => {
      dispatch({
        type: GET_LIST_MOVIE_SUCCESS,
        data: response,
        loading: true,
      });
    })
    .catch((error) => {
      dispatch({
        type: GET_LIST_MOVIE_FAILURE,
        data: error.response,
        loading: true,
      });
    });
};
