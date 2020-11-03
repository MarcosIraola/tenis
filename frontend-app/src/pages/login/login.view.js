import React, { useState } from 'react';
import styles from './login.module.css';

const Login = () => {

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
            </div>

        </div>
    )
}

export default Login;