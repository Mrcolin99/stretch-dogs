import React, { Component } from 'react'
import "./Questionnaire.css"

class Questionnaire extends Component {
  constructor() {
    super()
    // I assigned default values here in case a user decides not to move any/all sliders before clicking the submit button.
    this.state = {
      size: '3',
      family_rating: '3',
      trainability: '3',
      grooming_needed: '3',
      energy_level: '3'
    }
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value })
  }

  handleFormSubmit = (event) => {
    event.preventDefault()
    const newBreedSearch = {
      size: this.state.size,
      family_rating: this.state.family_rating,
      trainability: this.state.trainability,
      grooming_needed: this.state.grooming_needed,
      energy_level: this.state.energy_level
    }
    // Need to add function on Main to receive this newly-created object "newBreedSearch"
  }

  render() {
    return (
      <form>
        <h4 className="search-instructions">Move each slider to find breeds that will best fit your lifestyle.</h4>
        <div className="slider-container">
          <label htmlFor="size">Size</label>
          <input className="slider" type="range" id="size" name="size" min="1" max="5" defaultValue="3"
            onChange={(event) => this.handleChange(event)} />

          <div className="slider-labels">
            <p>Tiny</p>
            <p>Big Thicc Boii</p>
          </div>
        </div>

        <div className="slider-container">
          <label htmlFor="family_rating">Family Friendly</label>
          <input className="slider" type="range" id="family_rating" name="family_rating"
            min="1" max="5" defaultValue="3"
            onChange={(event) => this.handleChange(event)} />

          <div className="slider-labels">
            <p>Not so much</p>
            <p>Super friendly</p>
          </div>
        </div>

        <div className="slider-container">
          <label htmlFor="trainability">Trainability</label>
          <input className="slider" type="range" id="trainability" name="trainability"
            min="1" max="5" defaultValue="3"
            onChange={(event) => this.handleChange(event)} />

          <div className="slider-labels">
            <p>Independent thinker</p>
            <p>Strong will to please</p>
          </div>
        </div>

        <div className="slider-container">
          <label htmlFor="grooming_needed">Grooming Needed</label>
          <input className="slider" type="range" id="grooming_needed" name="grooming_needed"
            min="1" max="5" defaultValue="3"
            onChange={(event) => this.handleChange(event)} />

          <div className="slider-labels">
            <p>Hairless</p>
            <p>Near-daily brushing</p>
          </div>
        </div>

        <div className="slider-container">
          <label htmlFor="energy_level">Energy Level</label>
          <input className="slider" type="range" id="energy_level" name="energy_level"
            min="1" max="5" defaultValue="3"
            onChange={(event) => this.handleChange(event)} />

          <div className="slider-labels">
            <p>Couch potato</p>
            <p>Lots of daily exercise</p>
          </div>
        </div>
        {/* Update event listener with real function */}
        <button onClick={(event) => {
          event.preventDefault()
          console.log(this.state)
        }}>Submit</button>

      </form>
    );
  }
}

export default Questionnaire;