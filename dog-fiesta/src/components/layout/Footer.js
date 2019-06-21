import React, { Component } from 'react'

export class Footer extends Component {
    render() {
        return (
            <footer className="footer white-text grey darken-3">
                    <div className="row">
                        <div className="col m4 text-white center">
                            <h3>НАШИ ЦЕЛИ</h3>
                            <ul>
                                <li>1. Развување на свеста и одговорноста кон животните за хумано постапување со нив
                            <p style={{ 'whiteSpace': 'pre-wrap' }}></p> </li>
                                <li>2. Хумано намалување на бројот на бездомните животни
                            <p style={{ 'whiteSpace': 'pre-wrap' }}></p> </li>
                                <li>3. Нега на напуштени животни</li>
                                <li>4. Спречување на злоупотреба на животни
                            <p style={{ 'whiteSpace': 'pre-wrap' }}></p> </li>
                                <li>5. Промовирање на идејата за прифаќање на различностите
                            <p style={{ 'whiteSpace': 'pre-wrap' }}></p> </li>
                            </ul>
                        </div>
                        <div className="col m4 center">
                            <h3>КОНТАКТ</h3>
                            <p>Телефон: 02/123478</p>
                            <p>Е-пошта: info@dogfiesta.com</p>
                        </div>
                        <div className="col m4 center">
                            <h3>АДРЕСА</h3>
                            <p>ул. Партизански одреди бр.123/23-Скопје</p>
                        </div>
                    </div>
                    <div className='row'>
                        <div class="footer-copyright center">
                            <div class="container">
                                <p>© 2019 Copyright DogFiesta. Сите права се задржани</p>
                            </div>
                        </div>
                    </div>
            </footer>
        )
    }
}

export default Footer
