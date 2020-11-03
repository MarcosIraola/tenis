import React from 'react';
import { Link } from 'react-router-dom';
import styles from './navbar.module.css';
import {HOME, LANDING, LOGIN, REGISTER} from '../../routes/routes';
import useResponsive from '../../hooks/useResponsive';
import logo from './assets/logo.png';

const Navbar = () => {

    const { windowSize, isDesktop, isMobile } = useResponsive();

    return (
        <>
            {isDesktop && (
                <div className={styles.contenedor}>
                
                <div className={styles.main}>
                    <Link to={LANDING} className={styles.main}>
                        <img className={styles.logo} src={logo}/>
                        <h1 className={styles.titulo}>TennisApp</h1>
                    </Link>
                </div>

                <div className={styles.div_botones}>
                    <Link to={HOME} className={styles.botonLogin}>
                        Iniciar sesión
                    </Link>

                    <Link to={REGISTER}>
                        <input
                            className={styles.botonRegister}
                            type='button'
                            value='Registro'
                        />
                    </Link>
                </div>

            </div>
            )}

            {isMobile && (
                <>
                <nav className="navbar-expand-lg navbar-light bg-light">
                    <div className={styles.contenedorMobile}>
                        
                        <div className={styles.main}>
                            <Link to={LANDING} className={styles.main}>
                                <img className={styles.logo} src={logo}/>
                                <h1 className={styles.tituloMobile}>TennisApp</h1>
                            </Link>
                        </div>

                        <div className={styles.botonHamburguesa}>
                        <button
                            className="navbar-toggler"
                            type="button"
                            data-toggle="collapse"
                            data-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span class="navbar-toggler-icon"/>
                        </button>
                        </div>
                        

                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav text-center mx-auto">  
                                <li className="nav-item" className={styles.mobile_navbar}>
                                    <Link to={LOGIN} className="nav-item">
                                        <h5 className="text-secondary">Inciar sesión</h5>
                                    </Link>
                                </li>
                            </ul>
                            <ul className="navbar-nav text-center mx-auto">  
                                <li className="nav-item">
                                    <Link to={REGISTER} className="nav-item">
                                        <h5 className="text-secondary">Registrate</h5>
                                    </Link>
                                </li>
                            </ul>
                        </div>

                    </div>
                </nav>
                </>
            )}
        </>
    )
}

export default Navbar;