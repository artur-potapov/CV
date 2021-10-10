import React, { Component } from 'react';
import './Menu.css';

export class Menu extends React.Component {
    render() {
        return (
            <div className='menu'>
                <img src='img/photo.jpg' className='menu__image'/>
                <p>
                    <a href='#about'>Обо мне</a>
                </p>
                <p>
                    <a href='#education'>Образование</a>
                </p>
                <p>
                    <a href='#work'>Обыт работы</a>
                </p>
                <p>
                    <a href='#contact'>Контакты</a>
                </p>
                <p>
                    <a href='#top'>Наверх</a>
                </p>
            </div>
        )
    }
}

