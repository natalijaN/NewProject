import React from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import FormatParagraph from '../FormatParagraph'

const InterestDetail = (props) => {
  const { interest } = props;
  if (interest) {
    return (
      <div className="container section project-details">
        <div className="card z-depth-0">
          <div className="card-content">
            <span className="card-title center">{interest.title}</span>
            <p id='modify'>{FormatParagraph(interest.paragraph1)}</p>
          </div>
          <div className="card-action grey lighten-4 grey-text center">
            <img src={interest.image}></img>
          </div>
          <div className="card-content">
            <div id='modify'>{FormatParagraph(interest.paragraph2)}</div>
          </div>
          {interest.image2 !== undefined ?
            (<div className="card-action grey lighten-4 grey-text center">
              <img src={interest.image2}></img>
            </div>)
            : null}
          {interest.paragraph3 !== undefined ?
            (<div className="card-content">
              <div id='modify'>{FormatParagraph(interest.paragraph3)}</div>
            </div>)
            : null}
        </div>
      </div>
    )
  } else {
    return (
      <div className="container center">
        <p>Се вчитува...</p>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
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
