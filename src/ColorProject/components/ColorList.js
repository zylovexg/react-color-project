import React, { Component } from 'react'
import Color from './Color'

class ColorList extends Component {
  render () {
    let { colors, rateColor, removeColor } = this.props
    return (
      <div className="color-list">
        {[...colors.map(item =>
          <Color 
            key={ item.id } { ...item } 
            rateColor={ (rating) => rateColor(item.id, rating) }
            removeColor={ () => removeColor(item.id) } />
        )]}
      </div>
    )
  }
}

export default ColorList