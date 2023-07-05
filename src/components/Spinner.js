import React from 'react'

const Spinner = () => {
  return (
    <span className="container text-center">
      <img className="loader" src={process.env.PUBLIC_URL + '/loading.gif'} alt="loadingImage" />
    </span>
  )

}

export default Spinner