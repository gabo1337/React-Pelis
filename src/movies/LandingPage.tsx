import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import { urlMovies } from "../endpoints";
import AlertContext from "../utils/AlertContext";
import IndividualMovie2 from "./IndividualMovie2";
import { landingPageDTO, movieDTO } from "./movies.model";
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

	const testMovie: movieDTO = {
		title: "Guren lagan",
		id: 50,
		poster:
			"https://cdnx.jumpseller.com/pockettomarket/image/22797379/Tengen-Toppa-gurren-Lagann-Funimation-dqwd.jpg.jpg?1647807547",
		inTheaters: false,
		trailer: "",
		releaseDate: new Date(),
		genres: [],
		movieTheaters: [],
		actors: [],
		userVote: 0,
		averageVote: 0,
	};

	return (
		<AlertContext.Provider
			value={() => {
				loadData();
			}}>
			<div className="movie">
				<div className="movie_container_landing">
					<h1 className="movie_title">En cines</h1>
					<MoviesList movies={movies.inTheaters} />

					<h1 className="movie_title">Proximamente</h1>
					<MoviesList movies={movies.upcomingReleases} />
				</div>
			</div>
		</AlertContext.Provider>
	);
}
