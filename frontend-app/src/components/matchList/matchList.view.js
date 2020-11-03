import React from 'react';
import MatchCard from '../matchCard/matchCard.view';
import styles from './matchList.module.css';

const MatchList = () => {

    const matchs = [
        {
            fecha: 'Viernes, Oct 9',
            jugador1:'vs',
            resultado: '6-1 / 6-2 / 3-6',
            jugador2: 'Rafael Nadal'
        },
        {
            fecha: 'Jueves, Oct 8',
            jugador1:'vs',
            resultado: '6-1 / 6-0',
            jugador2: 'Roger Federer'
        },
        {
            fecha: 'Miércoles, Oct 7',
            jugador1:'vs',
            resultado: 'Sin resultado',
            jugador2: 'Javier Iraola'
        },
    ]

    return (
        <div className={styles.container}>
            {matchs && matchs.map(match => {
                return (
                    <MatchCard
                        fecha= {match.fecha}
                        jugador1= {match.jugador1}
                        resultado= {match.resultado}
                        jugador2= {match.jugador2}
                    />
                );
            }
            )}

        </div>
    )
}

export default MatchList;