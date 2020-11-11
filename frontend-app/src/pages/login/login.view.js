import React, { useState } from 'react';
import  { useHistory } from 'react-router-dom';
import styles from './login.module.css';
import {API, HOME} from "../../routes/routes";
import {AuthContext} from "../../contexts/authentication/authentication.context";

const Login = () => {

    const { login } = React.useContext(AuthContext);
    const history = useHistory();
    const [data, setData] = useState({
        email: '',
        password: ''
    });


    const handleInputChange = (event) => {
        setData({
            ...data,
            [event.target.name]: event.target.value
        })
    };

    const SubmitLogin = () => {
        const url = API + '/auth/login';
        const body = {
            email: data.email,
            password: data.password,
        };

        const options = {
            method: 'POST',
            headers: new Headers({
                'Content-type': 'application/json'
            }),
            mode: 'cors',
            body: JSON.stringify(body),
        };
        fetch(url,options)
            .then(response => {
                if (response.status === 200) {
                    return response.json();
                }
                return Promise.reject(response.status);
            })
            .then(payload => {
                    login(payload);
                    history.replace(HOME);
                }
            )
            .catch(error => console.log(error));
    }
    

    return(
        <div className={styles.contenedor}>
            
            <h1 className={styles.titulo}>Inicia sesión</h1>

            <div className={styles.contenedorInputs}>
                <input className={styles.inputs} 
                    name="email" 
                    type={'text'} 
                    placeholder="Email " 
                    onChange={handleInputChange}>
                </input>
                <input className={styles.inputs} 
                    name="password" 
                    type={'password'} 
                    placeholder="Contraseña " 
                    onChange={handleInputChange}>
                </input>
                <input className={styles.botonLogin}
                       type="button"
                       value="Inicia sesión"
                       onClick={SubmitLogin}>
                </input>
            </div>

        </div>
    )
}

export default Login;