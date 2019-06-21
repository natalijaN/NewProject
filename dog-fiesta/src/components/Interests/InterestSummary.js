import React from 'react'
import LongText from '../LongText';

const InterestSummary = ({ interest }) => {
    return (
        <div className='card z-depth-0 form-showing'>
            <div className='card-content grey-text text-darken-3'>
                <div className='row'>
                    <div className='col m4'>
                        <img src={interest.image} alt='img' className='img-content'></img>
                    </div>
                    <div className='col m8'>
                        <span className='card-title'>{interest.title}</span>
                        <LongText content={interest.paragraph1} limit={200} />
                        <p>{interest.date}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InterestSummary