import React, { Component } from 'react'
import AddColor from './components/AddColor'
import ColorList from './components/ColorList'
import { v4 } from 'uuid'
import '../assets/styles/ColorProject.css'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      colors: props.colorData || []
    }
  }
  addColor = (title, color) => {
    let colors = [
      ...this.state.colors,
      {
        id: v4(),
        title,
        color,
        rating: 0
      }
    ]
    this.setState({ colors })
  }
  rateColor = (id, rating) => {
    let colors = this.state.colors.map(item =>
      (
        item.id !== id ?
          item :
          {
            ...item,
            rating
          }
      )
    )
    this.setState({ colors })
  }
  removeColor = (id) => {
    let colors = this.state.colors.filter(item => 
      item.id !== id  
    )
    this.setState({ colors })
  }
  render () {
    let { colors } = this.state
    let { addColor, rateColor, removeColor } = this
    console.log(colors)
    return (
      <div className="wrap">
        <AddColor addColor={ addColor } />
        <ColorList 
          colors={ colors } 
          rateColor={ rateColor }
          removeColor={ removeColor } />
      </div>
    )
  }
}

export default App