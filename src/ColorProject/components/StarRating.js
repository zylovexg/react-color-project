import React, { Component } from 'react'
import Star from './Star'
import { PropTypes } from 'prop-types'

class StarRating extends Component {
  constructor (props) {
    super(props)
    this.state = {
      rating: props.rating || 0
    }
  }
  change = (rating) => {
    this.setState({ rating })
    this.props.rateColor(rating)
  }
  render () {
    let { totalStar } = this.props
    let { rating } = this.state
    let { change } = this
    return (
      <div>
        { [...Array(totalStar)].map((item, index) => 
          <Star 
            key={ index } 
            selected={index < rating}
            onClick={() =>  change( index + 1) } />
        ) }
      </div>
    )
  }
}

StarRating.propTypes = {
  totalStar: PropTypes.number
}
StarRating.defaultProps = {
  totalStar: 5
}

export default StarRating