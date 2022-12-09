import { urlActors } from "../endpoints";
import IndexEntity from "../utils/IndexEntity";
import { actorDTO } from './actors.model';
import axios from 'axios';

export default function IndexActors() {
    return (
        <IndexEntity<actorDTO>
            url={urlActors} createURL='actors/create' title="Actores"
            entityName="Actor"
        >
            {(actors, buttons) => <>
                <table className="table table-dark table-striped table-nowrap">
                <thead>
                    <tr>
                        <th scope="col"></th>
                        <th scope="col">Nombre</th>
                    </tr>
                </thead>
                <tbody>
                    {actors?.map(actor => <tr key={actor.id}>
                        <td>
                            {buttons(`actors/edit/${actor.id}`, actor.id)}
                        </td>
                        <td>
                            {actor.name}
                        </td>
                    </tr>)}
                </tbody>
                </table>
            </>}
        </IndexEntity>
    )
}