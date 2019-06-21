import React from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'

const AdviceDetail = (props) => {
    const { advice } = props;
    if (advice) {
      return (
        <div className="container section project-details">
          <div className="card z-depth-0">
            <div className="card-content">
              <span className="card-title">{advice.title}</span>
              <p>{advice.paragraph1}</p>
            </div>
            <div className="card-action grey lighten-4 grey-text">
              <img src={advice.image}></img>
              <div>{advice.paragraph2}</div>
            </div>
          </div>
        </div>
      )
    } else {
      return (
        <div className="container center">
          <p>Sе вчитува...</p>
        </div>
      )
    }
  }

const mapStateToProps = (state, ownProps) => {
    console.log(state)
    const id = ownProps.match.params.id;
    const advices = state.firestore.data.advices;
    const advice = advices ? advices[id] : null
    return {
        advice: advice
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        { collection: 'advices' }
    ])
)(AdviceDetail) 