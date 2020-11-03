import React from 'react';
import styles from './footer.module.css';
import logo from './assets/logo.png';

const Footer = () => {

    return (
        <div className={styles.contenedor}>
            <img className={styles.logo} src={logo}/>
            <p className={styles.texto}>Lorem ipsum dolor sit amet consectetur adipiscing elit aliquam eget nullam
            pellentesque aliquam curabitur cociis.</p>
        </div>
    )
}

export default Footer;