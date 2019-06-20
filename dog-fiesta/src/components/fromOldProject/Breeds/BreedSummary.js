import React from 'react'

const BreedSummary = ({ breed }) => {
    return (
        <div className='card z-depth-0 project-summary'>
            <div className='card-content grey-text text-darken-3'>
                <div className='row'>
                    <div className='col m4'>
                        <img src={breed.image} alt='img' className='img-content'></img>
                    </div>
                    <div className='col m8'>
                        <span className='card-title'>{breed.title}</span>
                        <p>{breed.date}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BreedSummary