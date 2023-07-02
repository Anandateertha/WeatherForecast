import React, { Component } from 'react'

export class Spinner extends Component {
  render() {
    return (
      <span className="container text-center">
        <img className="loader" src="loading.gif" alt="loadingImage" />
      </span>
    )
  }
}

export default Spinner