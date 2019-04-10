import React, { Component } from 'react'

class Star extends Component {
  render () {
    let { selected, onClick } = this.props
    return (
      <div 
        className={ selected ? 'star selected': 'star' }
        onClick={ onClick }>
      </div>
    )
  }
}

export default Star