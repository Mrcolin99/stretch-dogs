import React from 'react'
import './Results.css'
import Card from '../Card/Card'

const Result = () => {
  return (
    <div className="results-container">
      <h2>Top Breeds For You</h2>
      <div className="results-card-container">
        <Card />
        <Card />
        <Card />
      </div>
      <button className="home-button">Back To Home</button>
    </div>
  )
}

export default Result