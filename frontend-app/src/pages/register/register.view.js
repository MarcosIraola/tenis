import React, { useState }  from 'react';
import styles from './register.module.css';
import FacebookLogin from 'react-facebook-login';

const Register = () => {

    const [data, setData] = useState({
        first_name: '',
        last_name: '',
        email: '',
        password: '',
        repetirPassword: '',
    });

    const responseFacebook = (response) => {
        console.log(response);
      }

    const handleInputChange = (event) => {
        setData({
            ...data,
            [event.target.name]: event.target.value
        })
    };

    return(
        <div className={styles.contenedor}>

            <h1 className={styles.titulo}>Registrate</h1>
            <p>Comienza a ser parte de Tennis App ahora!</p>

            <div className={styles.contenedorInputs}>
                <input className={styles.inputs} 
                    name="first_name" 
                    type={'text'} 
                    placeholder="Nombre " 
                    onChange={handleInputChange}>
                </input>
                <input className={styles.inputs} 
                    name="last_name" 
                    type={'text'} 
                    placeholder="Apellido " 
                    onChange={handleInputChange}>
                </input>
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
                <input className={styles.inputs} 
                    name="repetirPassword" 
                    type={'password'} 
                    placeholder="Repita su contraseña " 
                    onChange={handleInputChange}>
                </input>
            </div>

            <FacebookLogin
                appId="*"
                autoLoad={true}
                textButton={'Login with Facebook'}
                fields="name,email,picture"
                callback={responseFacebook} />

        </div>
    )
}

export default Register;