import React from 'react'

const AdviceSummary = ({ advice }) => {
    return (
        <div className='card z-depth-0 project-summary'>
            <div className='card-content grey-text text-darken-3'>
                <div className='row'>
                    <div className='col m4'>
                        <img src={advice.image} alt='img' className='img-content'></img>
                    </div>
                    <div className='col m8'>
                        <span className='card-title'>{advice.title}</span>
                        <p>{advice.date}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdviceSummary