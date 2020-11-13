import React, {useEffect, useState} from 'react';
import styles from './searchMatch.module.css';
import {AuthContext} from "../../contexts/authentication/authentication.context";
import MatchList from "../../components/matchList/matchList.view";
import {API, HOME} from "../../routes/routes";
import { LeftCircleOutlined } from '@ant-design/icons';
import {Link} from "react-router-dom";
import { DatePicker, TimePicker } from "antd";
import { Select, Rate } from 'antd';
import { FrownOutlined, MehOutlined, SmileOutlined } from '@ant-design/icons';


const SearchMatch = () => {

    const { state } = React.useContext(AuthContext);
    const { Option } = Select;
    const [games, setGames] = useState(null);

    function handleChange(value) {
        console.log(`selected ${value}`);
    }

    useEffect(() => {
        const url = API + '/games/availables/' + 1;
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
                    setGames(payload);
                }
            )
            .catch(error => console.log(error));
    }, []);

    return (
        <div className={styles.container}>
            <Link to={HOME}>
                <LeftCircleOutlined style={{fontSize: '20px'}}/>
            </Link>
            <div className={styles.list}>
                <h1 className={styles.titulo}>Encuentra tu próximo partido!</h1>
                <div className={styles.container_buscador}>
                    <span>Fecha: <DatePicker name={'fecha'} placeholder={' '}/></span>
                    <span>Hora: <TimePicker name={'horario'} placeholder={'00:00'} format={'HH:mm'}/></span>

                    <Select defaultValue="Nivel" style={{ width: 155 }} onChange={handleChange}>
                        <Option value="0">Todos</Option>
                        <Option value="1"><Rate disabled defaultValue={1}/></Option>
                        <Option value="2"><Rate disabled defaultValue={2}/></Option>
                        <Option value="3"><Rate disabled defaultValue={3}/></Option>
                        <Option value="4"><Rate disabled defaultValue={4}/></Option>
                        <Option value="5"><Rate disabled defaultValue={5}/></Option>
                    </Select>

                    <Select defaultValue="Valoración" style={{ width: 155 }} onChange={handleChange}>
                        <Option value="0">Todas</Option>
                        <Option value="1"><Rate disabled defaultValue={1} character={<FrownOutlined/>}/></Option>
                        <Option value="2"><Rate disabled defaultValue={2} character={<FrownOutlined/>}/></Option>
                        <Option value="3"><Rate disabled defaultValue={3} character={<MehOutlined/>}/></Option>
                        <Option value="4"><Rate disabled defaultValue={4} character={<SmileOutlined/>}/></Option>
                        <Option value="5"><Rate disabled defaultValue={5} character={<SmileOutlined/>}/></Option>
                    </Select>
                </div>
                <div className={styles.botonBuscar}>Buscar</div>
                <MatchList listGames={games}/>
            </div>
        </div>
    )
}

export default SearchMatch;