import React from 'react'
import './Results.css'
import Card from '../Card/Card'
import cat from '../../assets/images/cat.gif'
import PropTypes from 'prop-types'

const Result = ({ quizResults }) => {
  let topDogs = null

  if (JSON.stringify(quizResults) !== '{}') {
    topDogs = quizResults.map((dog, index) => {
      return (
        <Card
          key={`breed ${index}`}
          breed={dog.breed}
          img={dog.img}
          description={dog.description}
        />
      )
    })
  }

  const reset = () => {
    window.location = '/'
  }

  return (
    <div className='results-container'>
      <h2>Top Breeds For You</h2>
      <div className='results-card-container'>
        {topDogs.length > 0 ? (
          topDogs
        ) : (
          <div>
            <img src={cat} className='cat'></img>
            <p className='cat-text'>Hmm, maybe you're better off getting a cat?</p>
          </div>
        )}
      </div>
      <button className='home-button' onClick={() => reset()}>
        Back To Home
      </button>
    </div>
  )
}

export default Result


Result.propTypes = {
  quizResults: PropTypes.array.isRequired
}
