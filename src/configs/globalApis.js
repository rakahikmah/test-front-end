import axios from "axios";
import Swal from "sweetalert2";
export const apis = axios.create({
	baseURL: "https://api.themoviedb.org/3",
});

apis.interceptors.request.use(
	(config) => {
		if (config.loading) {
			Swal.fire({
				title: "Loading",
				html: "Please Wait....",
				didOpen: () => {
					Swal.showLoading();
				},
			});
		}
		return config;
	},
	(error) => {
		Swal.close();
		return Promise.reject(error);
	}
);

apis.interceptors.response.use(
	function (response) {
		const { data, status } = response;
		if (Number(status) !== 200 && Number(status) !== 201) {
			Swal.close();
			throw new Error(data.message || "Unknown Error");
		}
		Swal.close();
		return data;
	},
	function (error) {
		if (
			error.response.data.status === "400" ||
			error.response.data.status === 400
		) {
			Swal.close();
			return Promise.reject(error);
		} else if (
			error.response.data.status === "401" ||
			error.response.data.status === 401
		) {
			Swal.close();
			return Promise.reject(error);
		} else if (
			error.response.data.status === "403" ||
			error.response.data.status === 403
		) {
			Swal.close();
			return Promise.reject(error);
		} else if (
			error.response.data.status === "404" ||
			error.response.data.status === 404
		) {
			Swal.close();
			return Promise.reject(error.response.data);
		} else if (
			error.response.data.status === "500" ||
			error.response.data.status === 500
		) {
			Swal.close();
			return Promise.reject(error);
		} else if (
			error.response.data.status === "502" ||
			error.response.data.status === 502
		) {
			Swal.close();
			return Promise.reject(error);
		} else {
			Swal.close();
			return Promise.reject(error);
		}
	}
);
