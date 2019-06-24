import React, { Component } from 'react'

class Radiocomponent extends Component {

  state = {
    selectedOption: 'se-podaruva'
  }

  handleOptionChange = (e) => {
    this.setState({
      selectedOption: e.target.value
    });
  }

  handleFormSubmit = (e) => {
    e.preventDefault();
    console.log('You have selected:', this.state.selectedOption);
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <form onSubmit={this.handleFormSubmit}>
              <div className="radio">
                <label>
                  <input type="radio" value="se-podaruva" className='checkbox' checked={this.state.selectedOption === 'se-podaruva'} onChange={this.handleOptionChange} />
                  Се подарува
                </label>
              </div>
              <div className="radio">
                <label>
                  <input type="radio" value="se-prodava" className='checkbox' checked={this.state.selectedOption === 'se-prodava'} onChange={this.handleOptionChange} />
                  Се продава
                </label>
              </div>         
              <button className="btn btn-default" type="submit">Save</button>
            </form>

          </div>
        </div>
      </div>
    );
  }
}
export default Radiocomponent