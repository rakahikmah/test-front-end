import { apis } from "../../../configs/globalApis";
import {
  GET_LIST_CATEGORYMOVIE_SUCCESS,
  GET_LIST_CATEGORYMOVIE_FAILURE,
} from "./categoryMovieConstants";

export const getCategoryMovie = () => async (dispatch) => {
  await apis
    .get(`/genre/movie/list?api_key=2fccde01a371b106b09a241d6d1d5b49`, {
      headers: {
        "Content-Type": "application/json",
      },
      loading: false,
    })
    .then((response) => {
      dispatch({
        type: GET_LIST_CATEGORYMOVIE_SUCCESS,
        data: response,
        loading: true,
      });
    })
    .catch((error) => {
      dispatch({
        type: GET_LIST_CATEGORYMOVIE_FAILURE,
        data: error.response,
        loading: true,
      });
    });
};
