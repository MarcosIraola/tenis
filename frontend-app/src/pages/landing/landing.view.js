import React from 'react';
import { Link } from 'react-router-dom';
import { REGISTER } from '../../routes/routes';
import styles from './landing.module.css';
import fondo from './assets/fondo.png';
import cancha from './assets/cancha.jpg'
import Footer from '../../components/footer/footer.view';

const Landing = () => {

    return (
        <div className={styles.contenedor}>
            <img className={styles.fondo} src={fondo}/>
            <div className={styles.textos}>
                <h1 className={styles.titulo}>Encuentra a tu<br/> próximo rival!</h1>
                <p className={styles.subtituloUltimo}>Hoy, con TennisApp encontrar a tu próximo rival es mucho mas fácil.
                <Link className={styles.link} to={REGISTER}> Registrate aquí </Link> 
                y encuentra tu primer partido!</p>
                <span className={styles.masinfo}>Busca partidos</span>
            </div>

            <img className={styles.fondo} src={cancha}/>
            <div className={styles.textos_comofunciona}>
                <h1 className={styles.titulo}>Cómo funciona?</h1>
                <p className={styles.subtitulo}>Muy fácil! Puedes ver que jugadores estan buscando rival 
                para un partido o puedes tu crear el partido y esperar a que alguien quiera jugar contra ti.</p>
                <p className={styles.subtituloUltimo}>Una vez que acepten jugar, podran acordar un horario y un lugar.</p>
                <span className={styles.masinfo}>+ información</span>
            </div>

            <Footer/>
        </div>
    )
}

export default Landing;