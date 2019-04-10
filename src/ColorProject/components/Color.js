import React, { Component } from 'react'
import StarRating from './StarRating'

class Color extends Component {
  render () {
    const { title, color, rating, rateColor, removeColor } = this.props
    return (
      <div className="color-box">
        <button onClick={ removeColor }>X</button>
        <h1>{ title }</h1>
        <div className="color" style={ { backgroundColor: color } }></div>
        <div>
          <StarRating 
            rating={rating} 
            rateColor={ rating => rateColor(rating) } />
        </div>
      </div>
    )
  }
}

export default Color