import React from 'react'
import LongText from '../LongText';

const BreedSummary = ({ breed }) => {
    return (
        <div className='card z-depth-0 form-showing'>
            <div className='card-content grey-text text-darken-3'>
                <div className='row'>
                    <div className='col m3 center'>
                        <img src={breed.image} alt='img' className='img-content'></img>
                    </div>
                    <div className='col m8'>
                        <span className='card-title'>{breed.title}</span>                     
                        <LongText content={breed.paragraph1} limit={200} />
                        <p>{breed.date}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BreedSummary