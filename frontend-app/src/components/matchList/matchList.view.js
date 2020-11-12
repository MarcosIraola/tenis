import React from 'react';
import MatchCard from '../matchCard/matchCard.view';
import styles from './matchList.module.css';

const MatchList = ({listGames}) => {

    return (
        <div className={styles.container}>
            {listGames && listGames.map(game => {
                return (
                    <MatchCard
                        game={game}
                    />
                );
            }
            )}

        </div>
    )
}

export default MatchList;