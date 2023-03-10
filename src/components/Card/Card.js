import React from 'react'
import MicroModal from 'react-micro-modal'
import './Card.css'
import PropTypes from 'prop-types'

const Card = ({ breed, img, description }) => {
  console.log(description)
  return (
    <div className='results-card'>
      <img className='dog-portrait' src={img} alt={breed} />
      <div className='results-text'>
        <p className='name-text'>{breed}</p>
      </div>
        <MicroModal
          trigger={(open) => (
            <button className='dog-button' onClick={open}>
              Click For More
            </button>
          )}
        >
          {(close) => (
            <div className='modal'>
              <h2>{breed}</h2>
              <img src={img} alt={breed}/>
              <p>{description}</p>
              <button className='close-modal-button' onClick={close}>
                Close!
              </button>
            </div>
          )}
        </MicroModal>
    </div>
  )
}

export default Card


Card.propTypes = {
  breed: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired
}