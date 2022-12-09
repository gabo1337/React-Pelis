import axios from "axios";
import React, { useContext } from "react";
import { urlMovies } from "../endpoints";
import AlertContext from "../utils/AlertContext";
import { movieDTO } from "./movies.model";

const IndividualMovie2 = (props: movieDTO) => {
	const buildLink = () => `/movie/${props.id}`;
	const customAlert = useContext(AlertContext);

	function deleteMovie() {
		axios.delete(`${urlMovies}/${props.id}`).then(() => {
			customAlert();
		});
	}
	return <div>IndividualMovie2</div>;
};

export default IndividualMovie2;
