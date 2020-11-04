import React from 'react';
import styles from './mainHome.module.css';
import { Link } from 'react-router-dom';
import 'antd/dist/antd.css';
import { Tabs } from 'antd';
import MatchList from '../matchList/matchList.view';
import { CREATEMATCH } from '../../routes/routes';
import plus from './assets/plus.png';
import lupa from './assets/loupe.png';

const MainHome = () => {

    const { TabPane } = Tabs;

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
                <TabPane tab="Tus partidos" key="1">
                <MatchList/>
                </TabPane>
                <TabPane tab="Tus Torneos" key="2">
                De momento no has participado de ningun torneo.
                </TabPane>
                <TabPane tab="Información" key="3">
                Información...
                </TabPane>
            </Tabs>
        </div>
    )
}

export default MainHome;