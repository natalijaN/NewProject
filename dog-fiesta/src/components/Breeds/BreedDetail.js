import React from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'

const BreedDetail = (props) => {
  const { breed } = props;
  if (breed) {
    return (
      <div className="container section project-details">
        <div className="card z-depth-0">
          <div className="card-content">
            <span className="card-title">{breed.title}</span>
            <p>{breed.paragraph1}</p>
          </div>
          <div className="card-action grey lighten-4 grey-text">
            <img src={breed.image} width="400px" height="300px"></img>
          </div>
          <div className="card-content">
            <div>{breed.paragraph2}</div>
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
  const id = ownProps.match.params.id;
  const breeds = state.firestore.data.breeds;
  const breed = breeds ? breeds[id] : null
  return {
    breed: breed
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'advices' }
  ])
)(BreedDetail) 