import React from 'react'
import './Pagination.css'

const Pagination = ({ goToNextPage, goToPrevPage }) => {
  return (
    <div className='buttons'>
        <button onClick={goToPrevPage}>Previous</button>
        <button onClick={goToNextPage}>Next</button>
    </div>
  )
}

export default Pagination