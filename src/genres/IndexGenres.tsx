import { urlGenres } from "../endpoints";
import IndexEntity from "../utils/IndexEntity";
import { genreDTO } from "./genres.model";

export default function IndexGenres() {
	return (
		<div className="genre">
			<div className="genre_container">
				<IndexEntity<genreDTO>
					url={urlGenres}
					createURL="genres/create"
					title="Genres"
					entityName="Genre">
					{(genres, buttons) => (
						<>
							<thead>
								<tr>
									<th>Name</th>
									<th></th>
								</tr>
							</thead>
							<tbody>
								{genres?.map((genre) => (
									<tr key={genre.id}>
										<td>{genre.name}</td>
										<td>{buttons(`genres/edit/${genre.id}`, genre.id)}</td>
									</tr>
								))}
							</tbody>
						</>
					)}
				</IndexEntity>
			</div>
		</div>
	);
}
