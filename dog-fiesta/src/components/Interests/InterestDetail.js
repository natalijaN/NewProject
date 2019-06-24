import React from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'

const InterestDetail = (props) => {

  function Validate(paragraph) {
    let newLine = '<';
    if (paragraph.match(newLine)) {
      paragraph = paragraph.replace(/[<]/g, <br /> );
      return paragraph;
    }
    return paragraph;
  }

  const { interest } = props;
  if (interest) {
    return (
      <div className="container section project-details">
        <div className="card z-depth-0">
          <div className="card-content">
            <span className="card-title">{interest.title}</span>
            <p>{Validate(interest.paragraph1)}</p>
          </div>
          <div className="card-action grey lighten-4 grey-text center">
            <img src={interest.image}></img>
          </div>
          <div className="card-content">
            <div id='test'>{interest.paragraph2}</div>
          </div>
          {interest.image2 !== null ?
            (<div className="card-action grey lighten-4 grey-text center">
              <img src={interest.image2}></img>
            </div>)
            : null}
          {interest.paragraph3 !== null ?
            (<div className="card-content">
              <div>{interest.paragraph3}</div>
            </div>)
            : null}
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
