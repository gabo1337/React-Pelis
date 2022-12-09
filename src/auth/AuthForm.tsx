import {userCredentials} from './auth.models'
import {Form, Formik, FormikHelpers} from 'formik';
import * as Yup from 'yup';
import TextField from '../forms/TextField';
import Button from '../utils/Button';
import { Link } from 'react-router-dom';

export default function AuthForm(props: authFormProps){
    return (
        <Formik
            initialValues={props.model}
            onSubmit={props.onSubmit}
            validationSchema={Yup.object({
                email: Yup.string().required('Este campo es requerido')
                    .email('Inserta in Email valido'),
                password: Yup.string().required('Este campo es requerido')
            })}
        >
            {formikProps => (
                <Form>
                    <TextField displayName="Email" field="email" />
                    <TextField displayName="Contraseña" field="password" type="password" />

                    <Button disabled={formikProps.isSubmitting} type="submit">Login</Button>
                    <Link className="btn btn-secondary" to="/">Cancelar</Link>
                </Form>
            )}
        </Formik>
    )
}

interface authFormProps{
    model: userCredentials;
    onSubmit(values: userCredentials, actions: FormikHelpers<userCredentials>): void; 
}