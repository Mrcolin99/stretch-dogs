import React, { Component } from 'react'
import { API_ROUTES } from '../../utilis/constants'
import Result from '../Results/Results'
import './Questionnaire.css'

class Questionnaire extends Component {
  constructor() {
    super()
    this.state = {
      size: '3',
      familyRating: '3',
      trainability: '3',
      groomingNeeded: '3',
      energyLevel: '3',
      quizInputs: {},
      quizResults: null,
    }
  }

  async fetchResults() {
    try {
      const { size, familyRating, trainability, groomingNeeded, energyLevel } =
        this.state.quizInputs

      const response = await fetch(
        `${API_ROUTES.GET_RESULTS}${size}/${familyRating}/${trainability}/${groomingNeeded}/${energyLevel}`
      )
      if (!response.ok) {
        throw new Error(`The following error occured: ${response}`)
      }

      const data = await response.json()

      this.setState({ quizResults: data })
      
    } catch (err) {
      console.error(err)
    } finally {
      this.setState({ isLoading: false })
    }
  }

  getResults = (dogSearch) => {
    this.setState({ quizInputs: dogSearch }, () => {
      this.fetchResults()
    })
  }

  reset = () => {
    window.location = '/'
    this.setState({ quizResults: {} })
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value })
  }

  handleFormSubmit = (event) => {
    event.preventDefault()
    const newDogSearch = {
      size: this.state.size,
      familyRating: this.state.familyRating,
      trainability: this.state.trainability,
      groomingNeeded: this.state.groomingNeeded,
      energyLevel: this.state.energyLevel,
    }

    console.log('WHAT AM I', newDogSearch)
    this.getResults(newDogSearch)

    this.setState({ showResults: true })
  }

  render() {
    return (
      <>
        {this.state.quizResults && (
          <Result quizResults={this.state.quizResults} reset={this.reset} />
        )}
        <form onSubmit={(event) => this.handleFormSubmit(event)}>
          <h4 className='search-instructions'>
            Move each slider to find breeds that will best fit your lifestyle.
          </h4>
          <div className='slider-container'>
            <label htmlFor='size'>Size</label>
            <input
              className='slider'
              type='range'
              id='size'
              name='size'
              min='1'
              max='5'
              defaultValue='3'
              onChange={(event) => this.handleChange(event)}
            />

            <div className='slider-labels'>
              <p>Tiny</p>
              <p>Large</p>
            </div>
          </div>

          <div className='slider-container'>
            <label htmlFor='familyRating'>Family Friendly</label>
            <input
              className='slider'
              type='range'
              id='familyRating'
              name='familyRating'
              min='1'
              max='5'
              defaultValue='3'
              onChange={(event) => this.handleChange(event)}
            />

            <div className='slider-labels'>
              <p>Not so much</p>
              <p>Super friendly</p>
            </div>
          </div>

          <div className='slider-container'>
            <label htmlFor='trainability'>Trainability</label>
            <input
              className='slider'
              type='range'
              id='trainability'
              name='trainability'
              min='1'
              max='5'
              defaultValue='3'
              onChange={(event) => this.handleChange(event)}
            />

            <div className='slider-labels'>
              <p>Independent thinker</p>
              <p>Strong will to please</p>
            </div>
          </div>

          <div className='slider-container'>
            <label htmlFor='groomingNeeded'>Grooming Needed</label>
            <input
              className='slider'
              type='range'
              id='groomingNeeded'
              name='groomingNeeded'
              min='1'
              max='5'
              defaultValue='3'
              onChange={(event) => this.handleChange(event)}
            />

            <div className='slider-labels'>
              <p>Hairless</p>
              <p>Near-daily brushing</p>
            </div>
          </div>

          <div className='slider-container'>
            <label htmlFor='energyLevel'>Energy Level</label>
            <input
              className='slider'
              type='range'
              id='energyLevel'
              name='energyLevel'
              min='1'
              max='5'
              defaultValue='3'
              onChange={(event) => this.handleChange(event)}
            />

            <div className='slider-labels'>
              <p>Couch potato</p>
              <p>Lots of daily exercise</p>
            </div>
          </div>
          <button className="submit-button" type='submit'>Submit</button>
        </form>
      </>
    )
  }
}

export default Questionnaire
