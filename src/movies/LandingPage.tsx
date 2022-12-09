import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import { urlMovies } from "../endpoints";
import AlertContext from "../utils/AlertContext";
import { landingPageDTO } from "./movies.model";
import MoviesList from "./MoviesList";
import "./movies_style.css";

export default function LandingPage() {
	const [movies, setMovies] = useState<landingPageDTO>({});

	useEffect(() => {
		loadData();
	}, []);

	function loadData() {
		axios.get(urlMovies).then((response: AxiosResponse<landingPageDTO>) => {
			setMovies(response.data);
		});
	}

	return (
		<AlertContext.Provider
			value={() => {
				loadData();
			}}>
			<div className="movie">
				<div className="movie_container">
					<h1 className="movie_title">En cines</h1>
					<MoviesList movies={movies.inTheaters} />

					<h3>Proximamente</h3>
					<MoviesList movies={movies.upcomingReleases} />
				</div>
			</div>
		</AlertContext.Provider>
	);
}
