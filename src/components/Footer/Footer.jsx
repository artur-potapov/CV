import React, { Component } from 'react';
import './Footer.css';


export class Footer extends React.Component {
    render() {
        return (
            
                    <div id='contact' className='footer footer__shadow'>
                        <div className='footer'>
                            <img src='img/phone.png' className='footer__logo'/>
                            <p><a href='tel:+79296368767'>+7 (929) 636-87-67</a></p>
                        </div>
                        <div className='footer'>
                            <img src='img/email.png' className='footer__logo'/>
                            <p><a href='mailto:archie25@mail.ru'>archie25@mail.ru</a></p>
                        </div>
                        <div className='footer'>
                            <img src='img/instagram.png' className='footer__logo'/>
                            <p><a href='https://www.instagram.com/archie_93/' target='_blank'>archie_93</a></p>
                        </div>
                        <div className='footer'>
                            <img src='img/github.png' className='footer__logo'/>
                            <p><a href='https://github.com/artur-potapov' target='_blank'>artur-potapov</a></p>
                        </div>
                    </div>
            
        )
    }
}