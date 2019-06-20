import React from 'react'
import { Link } from 'react-router-dom'
import AdviceSummary from './AdviceSummary';

const AdvicesList = ({ advices }) => {
    return (
        <div className='project-list section'>
            {advices && advices.map(advice => {
                return (
                    <Link to={'/advice/' + advice.id} key={advice.id}>
                        <AdviceSummary advice={advice} />
                    </Link>
                )
            })}
        </div>
    )
}

export default AdvicesList