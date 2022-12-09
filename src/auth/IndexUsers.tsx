import IndexEntity from '../utils/IndexEntity';
import { userDTO } from './auth.models';
import { urlAccounts } from '../endpoints';
import customConfirm from '../utils/customConfirm';
import Button from '../utils/Button';
import axios from 'axios';
import Swal from 'sweetalert2';

export default function IndexUsers() {

    async function makeAdmin(id: string) {
        await doAdmin(`${urlAccounts}/makeAdmin`, id);
    }

    async function removeAdmin(id: string) {
        await doAdmin(`${urlAccounts}/removeAdmin`, id);
    }

    async function doAdmin(url: string, id: string){
        await axios.post(url, JSON.stringify(id), {
            headers: {'Content-Type': 'application/json'}
        });

        Swal.fire({
            title: 'Success',
            text: 'Operation finished correctly',
            icon: 'success'
        });
    }

    return (
        <IndexEntity<userDTO>
            title="Users" url={`${urlAccounts}/listUsers`}
        >
            {users => <>
                <table className="table table-dark table-striped table-nowrap">
                <thead>
                    <tr>
                        <th></th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {users?.map(user => <tr key={user.id}>
                        <td>
                            <Button className="btn btn-primary waves-effect waves-light"
                                onClick={() => customConfirm(() => makeAdmin(user.id),
                                    `Quieres hacer a ${user.email} administrador?`, 'Guardar')}
                            >Crear Admin</Button>

                            <Button
                            className="btn btn-danger bg-gradient waves-effect waves-light ms-2"
                                onClick={() => customConfirm(() => removeAdmin(user.id),
                                    `Quieres eliminar a ${user.email} de administrador?`, 
                                    'Guardar')}
                            >Eliminar Admin</Button>
                        </td>
                        <td>
                            {user.email}
                        </td>
                    </tr>)}
                </tbody>
                </table>
            </>}
        </IndexEntity>
    )
}