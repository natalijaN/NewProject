import React, { Component } from 'react'
import './styleDashboard.css'

export class SecondPage extends Component {
    render() {
        return (
            <>
                <div className='row center'>
                    <h2>Кучето е единственото суштество на светот,
                        <p style={{ 'whiteSpace': 'pre-wrap' }}></p>
                        кое те сака тебе повеќе отколку што се сака себеси.</h2>
                </div>
                <div className="row center figure">
                    <div className="col s3">
                        <figure>
                            <h3><a href="Breeds/index.html" className="section-link">Ротвајлер</a></h3>
                            <img src="/img/rottweiler.jpg" alt="rottweiler"></img>
                        </figure>
                    </div>
                    <div className="col s3">
                        <figure>
                            <h3><a href="Breeds/index.html" className="section-link">Бигл</a></h3>
                            <img src="/img/beagle.jpg" alt="beagle"></img>
                        </figure> </div>
                    <div className="col s3">
                        <figure>
                            <h3><a href="Breeds/index.html" className="section-link">Боксер</a></h3>
                            <img src="/img/boxer.jpg" alt="boxer"></img>
                        </figure>
                    </div>
                    <div className="col s3">
                        <figure>
                            <h3><a href="Breeds/index.html" className="section-link">Доберман</a></h3>
                            <img src="/img/doberman.jpg" alt="doberman"></img>
                        </figure>
                    </div>
                </div>
                <div className="row center figure">
                    <div className="col s3">
                        <figure>
                            <h3><a href="Breeds/index.html" className="section-link">Француски булдог</a></h3>
                            <img src="/img//french bulldog.jpg" alt="French bulldog"></img>
                        </figure>
                    </div>
                    <div className="col s3">
                        <figure>
                            <h3><a href="Breeds/index.html" className="section-link">Германски овчар</a></h3>
                            <img src="/img/german shepherd.jpg" alt="German Shepherd"></img>
                        </figure>
                    </div>
                    <div className="col s3">
                        <figure>
                            <h3><a href="Breeds/index.html" className="section-link">Златен ретривер</a></h3>
                            <img src="/img/golden retriever.jpg" alt="Golden Retriever"></img>
                        </figure>
                    </div>
                    <div className="col s3">
                        <figure>
                            <h3><a href="Breeds/index.html" className="section-link">Лабрадор</a></h3>
                            <img src="/img/labrador.jpg" alt="Labrador"></img>
                        </figure>
                    </div>
                </div>
            </>
        )
    }
}

export default SecondPage
