import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import styles from './createMatch.module.css';
import { DatePicker, TimePicker } from 'antd';
import { LeftCircleOutlined } from '@ant-design/icons';
import {API, HOME} from '../../routes/routes';
import {AuthContext} from "../../contexts/authentication/authentication.context";

const CreateMatch = () => {

    const { state } = React.useContext(AuthContext);
    const [fecha, setFecha] = useState('');
    const [hora, setHora] = useState('');

    const handleFechaInputChange = (value, dateString) => {
        setFecha(dateString)
        console.log(dateString);
    }

    const handleHoraInputChange = (value, dateString) => {
        setHora(dateString)
        console.log(dateString);
    }

    const CrearPartido = () => {
        console.log(fecha + ' ' + hora);
        const url = API + '/games';
        const body = {
            host_player_id: state.user.id,
            date: fecha + ' ' + hora,
        };

        const options = {
            method: 'POST',
            headers: new Headers({
                'Content-type': 'application/json',
            }),
            mode: 'cors',
            body: JSON.stringify(body),
        };

        fetch(url, options)
            .then(response => {
                if (response.status === 201) {
                    return response.json();
                }
                return Promise.reject(response.status);
            })
            .then(payload => {

            })
            .catch(error => console.log(error));
    };

    return (
        <div className={styles.container}>
            <Link to={HOME}>
                <LeftCircleOutlined style={{fontSize: '20px'}}/>
            </Link>
            <div className={styles.formulario}>
                <h1 className={styles.tituloFormulario}>Crea un partido!</h1>
                <h2 className={styles.subTituloFormulario}>Elige una fecha y un horario</h2>
                <span className={styles.itemFormulario}>Fecha: <DatePicker name={'fecha'} placeholder={' '} onChange={handleFechaInputChange}/></span>
                <span className={styles.itemFormulario}>Horario: <TimePicker name={'horario'} placeholder={'00:00'} format={'HH:mm'} onChange={handleHoraInputChange}/></span>
                <div className={styles.botonCrear} onClick={CrearPartido}>Crear Partido</div>
            </div>
            
        </div>
    )
}

export default CreateMatch;