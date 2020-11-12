import React from 'react';
import styles from './matchCard.module.css';
import pendienteImg from './assets/pendiente.png';
import aceptadaImg from './assets/aceptada.png';
import rechazadaImg from './assets/rechazada.png';
import perfilImg from './assets/perfil.jpeg';
import {AuthContext} from "../../contexts/authentication/authentication.context";
import {API} from "../../routes/routes";
import { format } from 'date-fns';

const MatchCard = ({game}) => {

    const { state } = React.useContext(AuthContext);
    const fecha = format(new Date(game.date), "dd MMM yyyy '-' H'hs'");

    const respuesta = (accion) => () => {

        const url = API + ' ';
        const body = {
            status: accion,
        };

        const options = {
            method: 'PUT',
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
            .catch(error => console.log(error));
    }

    const renderStatus = (statusReserve) => {
        switch (statusReserve){
            case 'PENDIENTE':
                if (state.user.role === 'HOST') {
                    return (
                        <div className={styles.__div_botones}>
                            <span className={styles.__botonAceptar} onClick={respuesta('ACEPTADA')}>Aceptar</span>
                            <span className={styles.__botonRechazar} onClick={respuesta('RECHAZADA')}>Rechazar</span>
                        </div>
                    );
                } else {
                    return ( <img src={pendienteImg}/> );
                }
            case 'ACEPTADA':
                return ( <img src={aceptadaImg}/> );
            case 'RECHAZADA':
                return ( <img src={rechazadaImg}/> );
        }
    }

    return (
        <div className={styles.container}>
            <img className={styles.imagen} src={'https://country.com.co/images/2020/02/copa-carnaval-2020-ft-thegem-post-thumb-large.jpg'}/>
            <div className={styles.data}>
                <div>
                    <span className={styles.fecha}>{fecha}</span>
                </div>
                <div className={styles.data2}>
                    <span className={styles.jugador}>vs</span>
                    <span className={styles.resultado}> {game.result} </span>
                    <span className={styles.jugador}> {game.guest == null ? <></> : game.guest.first_name  + " " + game.guest.last_name}</span>
                </div>
            </div>

            {game.status === 'PENDIENTE' ?
                <img className={styles.imagenStatus} src={pendienteImg}/>
                :
                <img className={styles.imagen} src={'https://cdnmd.lavoz.com.ar/sites/default/files/styles/box_128/public/nota_periodistica/peque_schwartzman_1_1604170210.jpg'}/>
            }

        </div>
    )
}

export default MatchCard;