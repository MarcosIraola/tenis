import React, {useState, useEffect} from 'react';
import styles from './mainHome.module.css';
import { Link } from 'react-router-dom';
import 'antd/dist/antd.css';
import { Tabs } from 'antd';
import MatchList from '../matchList/matchList.view';
import {API, CREATEMATCH} from '../../routes/routes';
import plus from './assets/plus.png';
import lupa from './assets/loupe.png';
import {AuthContext} from "../../contexts/authentication/authentication.context";

const MainHome = () => {

    const { state } = React.useContext(AuthContext);
    const [games, setGames] = useState(null);
    const { TabPane } = Tabs;

    useEffect(() => {
        const url = API + '/games/' + state.user.id;
        const options = {
            method: 'GET',
            headers: new Headers(),
        };

        fetch(url, options)
            .then(response => {
                    if (response.status === 200) {
                        return response.json();
                    }
                    return Promise.reject(response.status);
                }
            )
            .then(payload => {
                console.log(payload);
                setGames(payload);
                }
            )
            .catch(error => console.log(error));
    }, []);

    return (
        <div>
            <div className={styles.containerAcciones}>
                <div className={styles.acciones}>
                    <Link to={CREATEMATCH} className={styles.tituloAccion}>
                        <span className={styles.tituloAccion}>Crear Partido</span>
                        <img className={styles.imgAccion} src={plus}/>
                    </Link>
                </div>
                <div className={styles.acciones}>
                    <span className={styles.tituloAccion}>Buscar Partido</span>
                    <img className={styles.imgAccion} src={lupa}/>
                </div>
            </div>

            <Tabs className={styles.tab} defaultActiveKey="1" centered>
                <TabPane className={styles.tabPane} tab="Próximos partidos" key="1">
                No tienes partidos por jugar. Crea uno!
                </TabPane>
                <TabPane tab="Historial" key="2">
                <MatchList listGames={games}/>
                </TabPane>
                <TabPane className={styles.tabPane} tab="Tus torneos" key="3">
                Torneos...
                </TabPane>
            </Tabs>
        </div>
    )
}

export default MainHome;