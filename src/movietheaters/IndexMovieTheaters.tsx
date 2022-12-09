import { urlMovieTheaters } from "../endpoints";
import IndexEntity from "../utils/IndexEntity";
import { movieTheaterDTO } from "./movieTheater.model";

export default function IndexMovieTheaters(){
    return (
        <IndexEntity<movieTheaterDTO> 
            url={urlMovieTheaters} createURL="movietheaters/create" title="
            salas de cine"
            entityName="
            salas de cine"
        >
            {(entities, buttons) => <>
               
                <table className="table table-dark table-striped table-nowrap">
                <thead>
                    <tr>
                        <th></th>
                        <th>Nombre</th>
                    </tr>
                </thead>
                <tbody>
                    {entities?.map(entity => <tr key={entity.id}>
                        <td>
                            {buttons(`movietheaters/edit/${entity.id}`, entity.id)}
                        </td>
                        <td>
                            {entity.name}
                        </td>
                    </tr>)}
                </tbody>
                </table>
               
            </>}
        </IndexEntity>
    )
}