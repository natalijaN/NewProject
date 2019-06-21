import React from 'react'
import { Link } from 'react-router-dom'
import BreedSummary from './BreedSummary';

const BreedsList = ({ breeds }) => {
    return (
        <div>
            {breeds && breeds.map(breed => {
                return (
                    <Link to={'/breed/' + breed.id} key={breed.id}>
                        <BreedSummary breed={breed} />
                    </Link>
                )
            })}
        </div>
    )
}

export default BreedsList