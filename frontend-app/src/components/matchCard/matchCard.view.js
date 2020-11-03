import React from 'react';
import styles from './matchCard.module.css';

const MatchCard = ({fecha, jugador1, resultado, jugador2}) => {

    return (
        <div className={styles.container}>
            <img className={styles.imagen} src={'https://country.com.co/images/2020/02/copa-carnaval-2020-ft-thegem-post-thumb-large.jpg'}/>
            
            <div className={styles.data}>
                <div>
                    <span className={styles.fecha}>{fecha}</span>
                </div>
                <div className={styles.data2}>
                    <span className={styles.jugador}>{jugador1} </span>
                    <span className={styles.resultado}> {resultado} </span>
                    <span className={styles.jugador}> {jugador2}</span>
                </div>
            </div>

            <img className={styles.imagen} src={'https://cdnmd.lavoz.com.ar/sites/default/files/styles/box_128/public/nota_periodistica/peque_schwartzman_1_1604170210.jpg'}/>
        </div>
    )
}

export default MatchCard;