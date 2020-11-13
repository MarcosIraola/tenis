import React, {useState, useEffect} from 'react';
import styles from './mainHome.module.css';
import { Link } from 'react-router-dom';
import 'antd/dist/antd.css';
import { Tabs, Spin } from 'antd';
import MatchList from '../matchList/matchList.view';
import {API, CREATEMATCH, SEARCHMATCH, } from '../../routes/routes';
import plus from './assets/plus.png';
import lupa from './assets/loupe.png';
import {AuthContext} from "../../contexts/authentication/authentication.context";

const MainHome = () => {

    const { state } = React.useContext(AuthContext);
    const { TabPane } = Tabs;
    const [games, setGames] = useState(null);
    const [futureGames, setFutureGames] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const url = API + '/games/completed/' + state.user.id;
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
                setIsLoading(false);
                setGames(payload);
                }
            )
            .catch(error => console.log(error));
    }, []);

    useEffect(() => {
        const url = API + '/games/created/' + state.user.id;
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
                    setFutureGames(payload);
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
                    <Link to={SEARCHMATCH} className={styles.tituloAccion}>
                        <span className={styles.tituloAccion}>Buscar Partido</span>
                        <img className={styles.imgAccion} src={lupa}/>
                    </Link>
                </div>
            </div>

            <Tabs className={styles.tab} defaultActiveKey="1" centered>
                <TabPane tab="Próximos partidos" key="1">
                    {isLoading ? <Spin className={styles.spin} size="large"/> : <MatchList listGames={futureGames}/>}
                </TabPane>
                <TabPane tab="Historial" key="2">
                    {isLoading ? <Spin className={styles.spin} size="large"/> : <MatchList listGames={games}/>}
                </TabPane>
                <TabPane className={styles.tabPane} tab="Tus torneos" key="3">
                    Torneos...
                </TabPane>
            </Tabs>
        </div>
    )
}

export default MainHome;