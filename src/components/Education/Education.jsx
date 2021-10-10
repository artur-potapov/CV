import React from 'react';
import Block from '../Block/Block.js';
import './Education.css';

export class Education extends React.Component {
    render() {
        return (
                <Block title='Образование' id='education'>
                    <div className='education__inline'>
                        <div>
                            <img src='img/misis.jpg' className='education__logo'/>
                        </div>
                        <div>
                            <h4>Национальный Исследовательский Технологический Университет - «МИСиС» (бывший Московский 
                                Государственный Институт Стали и Сплавов)</h4>
                            <p className='education'>Магистр, Прикладная информатика</p>
                            <p className='education'>2015-2017</p>
                        </div>
                    </div>
                    <div className='education__inline'>
                        <div>
                            <img src='img/misis.jpg' className='education__logo'/>
                        </div>
                        <div>
                            <h4>Национальный Исследовательский Технологический Университет - «МИСиС» (бывший Московский 
                                Государственный Институт Стали и Сплавов)</h4>
                            <p className='education'>Бакалавр, Прикладная информатика</p>
                            <p className='education'>2011-2015</p>
                        </div>
                    </div>
                </Block>
        )
    }
}