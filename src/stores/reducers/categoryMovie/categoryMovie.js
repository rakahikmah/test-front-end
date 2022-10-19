import {
	GET_LIST_CATEGORYMOVIE_SUCCESS,
	GET_LIST_CATEGORYMOVIE_FAILURE,
} from "../../actions/categoryMovie/categoryMovieConstants.js";

const initialState = {
	data: [],
	loading: false,
	error: false,
	messageError: "",
	totalData: 0,
};

const categoryMovie = (state = initialState, action) => {
	switch (action.type) {
		case GET_LIST_CATEGORYMOVIE_SUCCESS:
			return {
				...state,
				data: action.data,
				loading: false,
				error: false,
			};
		case GET_LIST_CATEGORYMOVIE_FAILURE:
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

export default categoryMovie;
