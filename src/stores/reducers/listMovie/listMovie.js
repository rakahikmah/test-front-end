import {
	GET_LIST_MOVIE_SUCCESS,
	GET_LIST_MOVIE_FAILURE,
} from "../../actions/listMovie/allMovieConstants";

const initialState = {
	data: [],
	loading: false,
	error: false,
	messageError: "",
	totalData: 0,
};

const listMovie = (state = initialState, action) => {
	switch (action.type) {
		case GET_LIST_MOVIE_SUCCESS:
			return {
				...state,
				data: action.data,
				loading: false,
				error: false,
			};
		case GET_LIST_MOVIE_FAILURE:
			return {
				...state,
				loading: false,
				error: true,
				messageError: action.messageError,
				data: [],
			};

		default:
			return state;
	}
}

export default listMovie;
