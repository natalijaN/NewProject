import React from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'

const InterestDetail = (props) => {
  const { interest } = props;
  if (interest) {
    return (
      <div className="container section project-details">
        <div className="card z-depth-0">
          <div className="card-content">
            <span className="card-title">{interest.title}</span>
            <p>{interest.paragraph1}</p>
          </div>
          <div className="card-action grey lighten-4 grey-text">
            <img src={interest.image}></img>
          </div>
          <div className="card-content">
            <div>{interest.paragraph2}</div>
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
  const interests = state.firestore.data.interests;
  const interest = interests ? interests[id] : null
  return {
    interest: interest
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'interests' }
  ])
)(InterestDetail) 
