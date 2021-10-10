import React, { Component } from 'react';
import Block from '../Block/Block.js';
import './Work.css';

export class Work extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            listVisibleHS: false,
            listVisibleRinet: false
        };
    } 

    changeListVisibilityHS = () => {
       //let newVisibility = !this.state.listVisible;
       /* this.setState({
            listVisible: newVisibility
        })*/
        this.setState( (state) => ({
            ...state,
            listVisibleHS: !state.listVisibleHS         
        }))
    }

    changeListVisibilityRinet = () => {
        this.setState( (state) => ({
            ...state,
            listVisibleRinet: !state.listVisibleRinet
        })
        )
    }
    
    render() {
        console.log(this.state);
        return (
                <Block title='Опыт работы' id='work'>
                    <div className='work__inline'>
                        <div className='work__block'>
                            <img src='img/hs.png'/>
                            <h3>ООО "ГИДРО-СЕРВИС-24"</h3>
                            <p className='work__dline'>Должность: Специалист по тендерам</p>
                            <p className='work__dline'>Октябрь 2017 - Сентябрь 2021</p>
                            <p className='work__expand-button' onClick={this.changeListVisibilityHS}>Подробнее</p>
                            {this.state.listVisibleHS && <ul id='hs'>
                                <li>Получение электронной цифровой подписи (ЭЦП);</li>
                                <li>Аккредитация на электронных торговых площадках (ЭТП);</li>
                                <li>Регистрация в единой информационной системе (ЕИС);</li>
                                <li>Настройка ЭТП и ЕИС для корректной работы;</li>
                                <li>Консультирование сотрудников по техническим вопросам работы на ЭТП и ЕИС;</li>
                            </ul>}
                        </div>
                        <div className='work__block'>
                            <img src='img/rinet.png'/>
                            <h3>Интернет провайдер "Ринет"</h3>
                            <p className='work__dline'>Должность: Специалист технической поддержки</p>
                            <p className='work__dline'>Май 2017 - Сентябрь 2017</p>
                            <p className='work__expand-button' onClick={this.changeListVisibilityRinet}>Подробнее</p>
                            {this.state.listVisibleRinet && <ul id='rinet'>
                                <li>Помощь в решении технических вопросов (интернет и интерактивное ТВ);</li>
                                <li>Удаленная помощь в настройке и подключении интернета и интерактивного ТВ;</li>
                            </ul>}
                        </div>
                    </div>
                </Block>
        )    
    }
}