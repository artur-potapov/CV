import React, { Component } from 'react';
import './Footer.css';


export class Footer extends React.Component {
    render() {
        return (
            
                    <div id='contact' className='footer footer__shadow'>
                        <div className='footer'>
                            <img src='img/telegram.png' className='footer__logo'/>
                            <p><a href='https://telegram.me/artur_potapov' target='_blank'>@artur_potapov</a></p>
                        </div>
                        <div className='footer'>
                            <img src='img/email.png' className='footer__logo'/>
                            <p><a href='mailto:archie25@mail.ru'>archie25@mail.ru</a></p>
                        </div>
                        <div className='footer'>
                            <img src='img/github.png' className='footer__logo'/>
                            <p><a href='https://github.com/artur-potapov' target='_blank'>artur-potapov</a></p>
                        </div>
                    </div>
            
        )
    }
}