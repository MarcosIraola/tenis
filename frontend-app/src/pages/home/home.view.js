import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { Link } from 'react-router-dom';
import styles from './home.module.css';
import 'antd/dist/antd.css';
import { Tabs } from 'antd';
import Rating from '@material-ui/lab/Rating';
import SentimentVeryDissatisfiedIcon from '@material-ui/icons/SentimentVeryDissatisfied';
import SentimentDissatisfiedIcon from '@material-ui/icons/SentimentDissatisfied';
import SentimentSatisfiedIcon from '@material-ui/icons/SentimentSatisfied';
import SentimentSatisfiedAltIcon from '@material-ui/icons/SentimentSatisfiedAltOutlined';
import SentimentVerySatisfiedIcon from '@material-ui/icons/SentimentVerySatisfied';
import MainHome from '../../components/mainHome/mainHome.view';
import {HOME, CREATEMATCH, SEARCHMATCH} from '../../routes/routes';
import CreateMatch from '../createMatch/createMatch.view';
import {AuthContext} from "../../contexts/authentication/authentication.context";
import SearchMatch from "../searchMatch/searchMatch.view";

const Home  = () => {

    const { state } = React.useContext(AuthContext);
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
                    <span className={styles.nombre}>{state.user.first_name} {state.user.last_name}</span>
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
              <Router>
                <Switch>
                    <Route exact path={HOME}>
                        <MainHome />
                    </Route>
                    <Route exact path={CREATEMATCH}>
                        <CreateMatch />
                    </Route>
                    <Route exact path={SEARCHMATCH}>
                        <SearchMatch />
                    </Route>
                </Switch>
              </Router>
            </div>
            
        </div>
    );
}

export default Home;