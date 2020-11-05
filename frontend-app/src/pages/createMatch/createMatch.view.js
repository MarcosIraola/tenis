import React from 'react';
import { Link } from 'react-router-dom';
import styles from './createMatch.module.css';
import { DatePicker, TimePicker } from 'antd';
import { LeftCircleOutlined } from '@ant-design/icons';
import { HOME } from '../../routes/routes';

const CreateMatch = () => {
    
    const format = 'HH:mm';

    return (
        <div className={styles.container}>
            <Link to={HOME}>
                <LeftCircleOutlined style={{fontSize: '20px'}}/>
            </Link>
            <div className={styles.formulario}>
                <h1 className={styles.tituloFormulario}>Crea un partido!</h1>
                <h2 className={styles.subTituloFormulario}>Elige una fecha y un horario</h2>
                <span className={styles.itemFormulario}>Fecha: <DatePicker placeholder={' '}/></span>
                <span className={styles.itemFormulario}>Horario: <TimePicker placeholder={'00:00'} format={format}/></span>
            </div>
            
        </div>
    )
}

export default CreateMatch;