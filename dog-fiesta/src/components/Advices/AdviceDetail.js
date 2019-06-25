import React from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import FormatParagraph from '../FormatParagraph'

const AdviceDetail = (props) => {
  const { advice } = props;
  if (advice) {
    return (
      <div className="container section project-details">
        <div className="card z-depth-0">
          <div className="card-content">
            <span className="card-title">{advice.title}</span>
            <p id='modify'>{FormatParagraph(advice.paragraph1)}</p>
          </div>
          <div className="card-action grey lighten-4 grey-text center">
            <img src={advice.image}></img>
          </div>
          <div className="card-content">
            <div id='modify'>{FormatParagraph(advice.paragraph2)}</div>
          </div>
          {advice.image2 !== undefined ? 
            (<div className="card-action grey lighten-4 grey-text center">
                <img src={advice.image2}></img>
            </div>) 
            : null}
          {advice.paragraph3 !== undefined ?
            (<div className="card-content">
                <div id='modify'>{FormatParagraph(advice.paragraph3)}</div>
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