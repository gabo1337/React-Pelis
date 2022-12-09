import axios from 'axios';
import { authenticationResponse, userCredentials } from './auth.models';
import AuthForm from './AuthForm';
import {urlAccounts} from '../endpoints';
import { useContext, useState } from 'react';
import DisplayErrors from '../utils/DisplayErrors';
import { getClaims, saveToken } from './handleJWT';
import AuthenticationContext from './AuthenticationContext';
import { useHistory } from 'react-router-dom';

export default function Login(){

    const [errors, setErrors] = useState<string[]>([]);
    const {update} = useContext(AuthenticationContext);
    const history = useHistory();

    async function login(credentials: userCredentials){
        try {
            setErrors([]);
            const response = await axios
            .post<authenticationResponse>(`${urlAccounts}/login`, credentials);
            saveToken(response.data);
            update(getClaims());
            history.push('/');
        }
        catch (error){
            setErrors(error.response.data);
        }
    }

    return (
        <>
            <div className="auth-page-wrapper pt-5">
        <div className="auth-one-bg-position auth-one-bg" id="auth-particles">
            <div className="bg-overlay"></div>

            <div className="shape">
                <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 1440 120">
                    <path d="M 0,36 C 144,53.6 432,123.2 720,124 C 1008,124.8 1296,56.8 1440,40L1440 140L0 140z"></path>
                </svg>
            </div>
        </div>

        <div className="auth-page-content">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="text-center mt-sm-5 mb-4 text-white-50">
                            
                            <p className="mt-3 fs-15 fw-medium">Tu pagina de peliculas favoritas</p>
                        </div>
                    </div>
                </div>

                <div className="row justify-content-center">
                    <div className="col-md-8 col-lg-6 col-xl-5">
                        <div className="card mt-4">

                            <div className="card-body p-4">
                                <div className="text-center mt-2">
                                    <h5 className="text-primary">Bienvenido</h5>
                                    <p className="text-muted">Sign in.</p>
                                </div>
                                <div className="p-2 mt-4">


                                        <DisplayErrors errors={errors} />
                                            <AuthForm model={{email: '', password: ''}}
                                    onSubmit={async values => await login(values)}
                                     />

                                        

                                </div>
                            </div>
                        </div>

                        <div className="mt-4 text-center">
                            <p className="mb-0">No tienes una cuenta ? <a href="auth-signup-basic.html" className="fw-semibold text-primary text-decoration-underline"> Registrate </a> </p>
                        </div>

                    </div>
                </div>
            </div>
        </div>

       
    </div>
            
        </>
    )
}