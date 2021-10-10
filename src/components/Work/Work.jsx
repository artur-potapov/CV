import React, { Component } from 'react';
import Block from '../Block/Block.js';
import './Work.css';

export class Work extends React.Component {
    render() {
        return (
            <div id='work'>
                <Block title='Опыт работы'>
                    <div className='work__inline'>
                        <div>
                            <img src='img/hs.png'/>
                            <h3>ООО "ГИДРО-СЕРВИС-24"</h3>
                            <p className='work__dline'>Должность: Специалист по тендерам</p>
                            <p className='work__dline'>Октябрь 2017 - Сентябрь 2021</p>
                            <ul id='hs'></ul>
                        </div>
                        <div>
                            <img src='img/rinet.png'/>
                            <h3>Интернет провайдер "Ринет"</h3>
                            <p className='work__dline'>Должность: Специалист технической поддержки</p>
                            <p className='work__dline'>Май 2017 - Сентябрь 2017</p>
                            <ul id='rinet'></ul>
                        </div>
                    </div>
                </Block>
            </div>   
        )    
    }
}