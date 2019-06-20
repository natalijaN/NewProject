import React from 'react'
import { Link } from 'react-router-dom'
import InterestSummary from './InterestSummary';

const InterestList = ({ interests }) => {
    return (
        <div className='project-list section'>
            {interests && interests.map(interest => {
                return (
                    <Link to={'/interest/' + interest.id} key={interest.id}>
                        <InterestSummary interest={interest} />
                    </Link>
                )
            })}
        </div>
    )
}

export default InterestList
