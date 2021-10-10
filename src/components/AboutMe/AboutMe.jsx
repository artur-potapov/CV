import React, { Component } from 'react';
import Block from '../Block/Block.js';
import './AboutMe.css';

export class AboutMe extends React.Component {   
    render() {
        return (
                <Block title='Обо мне' id='about'>   
                {/* children */}
                    <div>
                        <p>В июне 2015 защитил диплом бакалавра по направлению "Прикладная информатика", 
                            кафедра "Электротехники и микропроцессорной электроники”. Тема дипломной работы: 
                            “Энергосбережение в частотно – регулируемом электроприводе”.
                            Средний балл за время обучения 4.</p>
                        <p>После окончания бакалавриата продолжил обучение в магистратуре. В 2017 защитил 
                            диплом магистра на отлично. Окончил обучение с красным дипломом. 
                            Имею публикацию статьи в сборнике материалов III международной научно – практической 
                            конференции “Инновационное развитие автоматизации, информационных и 
                            энергосберегающих технологий, металлургии и металловедения. Современное состояние, 
                            проблематика и перспективы”.</p> 
                    </div>
                    <div className='aboutme--inline'>
                        <div>
                            <img src='img/js.png' className='aboutme__logo'/>
                        </div>
                        <div>
                            <img src='img/css.png' className='aboutme__logo'/>   
                        </div>
                        <div>
                            <img src='img/html.png' className='aboutme__logo'/>
                        </div>
                    </div>
                </Block>          
        ) 
    }
}