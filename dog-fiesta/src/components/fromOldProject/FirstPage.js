import React, { Component } from 'react'


export class FirstPage extends Component {
    render() {
        return (
            <div className="dog-text-box container">
                <div className='row main-text'>
                    <h1>Кучињата не се целиот наш живот,
                <p style={{ 'whiteSpace': 'pre-wrap' }}></p>
                        но тие го прават нашиот живот целосен. </h1>
                </div>
                <div className='row'>
                    <a className='btn green z-depth-0' href="/breeds">Раси</a>
                    <a className='btn green z-depth-0' href="/advices">Совети</a>
                    <a className='btn green z-depth-0' href="/interests">Занимливости</a>
                    <a className='btn green z-depth-0' href="/aboutUs">За нас</a>
                </div>
            </div>
        )
    }
}

export default FirstPage
