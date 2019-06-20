
import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class AboutUs extends Component {
    render() {
        return (
            <div className='row'>
                <div className="col m4 about-us">
                    <ul>
                        <li>
                            <Link to='/breeds'>
                                <a className="btn green darken-2 my-btns">Раси</a>
                            </Link>
                        </li>
                        <li>
                            <Link to='/advices'>
                                <a className="btn green darken-2 my-btns">Совети</a>
                            </Link>
                        </li>
                        <li>
                            <Link to='/interests'>
                                <a className="btn green darken-2 my-btns">Занимливости</a>
                            </Link>
                        </li>
                        <li>
                            <Link to='/aboutus'>
                                <a className="btn green darken-2 my-btns">За нас</a>
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className='col m8'>
                    <h2 className="white-text center" id="aboutUs">За нас</h2>
                    <p className="white-text aboutUs-text"><b>&emsp;DogFiesta</b> го сочинуваат волонтери чија примарна цел е вдомување на бездомни животни, спречување на нехуманиот однос, како и развивање на свеста и одговорноста кај човекот кон животните.
                        Здружението со едукации и поткревање свест кај населението долгорочно настојува да го реши проблемот со напуштање на животни, развување на свеста и одговорноста кон животните за хумано постапување со нив.</p>

                    <p className=" white-text aboutUs-text">НАПОМЕНУВАМЕ дека не располагаме со сопствен простор за привремено згрижување, па до вдомување животните се згрижени во домовите на наши членови и волонтери, а доколку е потребно и во хотел за миленичиња.
                        </p>

                    <h4 className='card-title white-text'>НАШИ ЦЕЛИ</h4>
                    <ul className="about-us-list white-text aboutUs-text">
                        <li>->Развување на свеста и одговорноста кон животните за хумано постапување со нив</li>
                        <li>->Хумано намалување на бројот на бездомните животни </li>
                        <li>->Промовирање на идејата за прифаќање на различностите</li>
                        <li>->Развивање на културата за грижа на слаби, немоќни, отфрлени, болни, незаштитени и неприфатени животни</li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default AboutUs




