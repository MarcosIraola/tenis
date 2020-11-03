import React from 'react';
import styles from './home.module.css';
import Rating from '@material-ui/lab/Rating';
import 'antd/dist/antd.css';
import { Tabs } from 'antd';
import SentimentVeryDissatisfiedIcon from '@material-ui/icons/SentimentVeryDissatisfied';
import SentimentDissatisfiedIcon from '@material-ui/icons/SentimentDissatisfied';
import SentimentSatisfiedIcon from '@material-ui/icons/SentimentSatisfied';
import SentimentSatisfiedAltIcon from '@material-ui/icons/SentimentSatisfiedAltOutlined';
import SentimentVerySatisfiedIcon from '@material-ui/icons/SentimentVerySatisfied';
import MatchList from '../../components/matchList/matchList.view';
import plus from './assets/plus.png';
import lupa from './assets/loupe.png';

const Home  = () => {

    const { TabPane } = Tabs;
    const customIcons = {
        1: {
          icon: <SentimentVeryDissatisfiedIcon />,
          label: 'Very Dissatisfied',
        },
        2: {
          icon: <SentimentDissatisfiedIcon />,
          label: 'Dissatisfied',
        },
        3: {
          icon: <SentimentSatisfiedIcon />,
          label: 'Neutral',
        },
        4: {
          icon: <SentimentSatisfiedAltIcon />,
          label: 'Satisfied',
        },
        5: {
          icon: <SentimentVerySatisfiedIcon />,
          label: 'Very Satisfied',
        },
      };

      function IconContainer(props) {
        const { value, ...other } = props;
        return <span {...other}>{customIcons[value].icon}</span>;
      }

    return (
        <div className={styles.container}>
            
            <div className={styles.perfil}>
                <img className={styles.imagen} src={'https://country.com.co/images/2020/02/copa-carnaval-2020-ft-thegem-post-thumb-large.jpg'}/>
                <div className={styles.perfilMobile}>
                    <span className={styles.nombre}>Marcos Iraola</span>
                    <span className={styles.itemPerfil}>Edad: 27</span>
                    <span className={styles.itemPerfil}>Nivel:</span>
                    <Rating className={styles.rating} name="read-only" value={4} readOnly />
                    <span className={styles.itemPerfil}>Valoración:</span>
                    <Rating
                        className={styles.rating}
                        name="customized-icons"
                        defaultValue={3}
                        getLabelText={(value) => customIcons[value].label}
                        IconContainerComponent={IconContainer}
                        readOnly
                    />
                </div>
            </div>

            <div className={styles.data}>

                <div className={styles.containerAcciones}>
                    <div className={styles.acciones}>
                        <span className={styles.tituloAccion}>Crear Partido</span>
                        <img className={styles.imgAccion} src={plus}/>
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
            
        </div>
    );
}

export default Home;