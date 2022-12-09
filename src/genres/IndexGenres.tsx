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
									<th></th>
									<th>Name</th>
								</tr>
							</thead>
							<tbody>
								{genres?.map((genre) => (
									<tr key={genre.id}>
										<td>{buttons(`genres/edit/${genre.id}`, genre.id)}</td>
										<td>{genre.name}</td>
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
