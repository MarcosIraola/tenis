import React from 'react';
import MatchCard from '../matchCard/matchCard.view';
import styles from './matchList.module.css';

const MatchList = ({listGames}) => {

    return (
        <div className={styles.container}>
            {listGames && listGames.map(game => {
                return (
                    <MatchCard
                        fecha= {game.date}
                        resultado= {game.result}
                        guest= {game.guest.first_name + ' ' + game.guest.last_name}
                    />
                );
            }
            )}

        </div>
    )
}

export default MatchList;