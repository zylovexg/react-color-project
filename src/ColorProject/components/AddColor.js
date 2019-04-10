import React, { Component } from 'react'

class AddColorForm extends Component {
  onSubmit = (e) => {
    e.preventDefault()
    let text = this.refs._text
    let color = this.refs._color
    this.props.addColor(text.value, color.value)
    text.value = ''
    color.value = '#000000'
    text.focus()
  }
  render () {
    let { onSubmit } = this
    return (
      <form onSubmit={ onSubmit }>
        <div className="text">
          <input 
            ref="_text"
            type="text"
            placeholder="color title..."
            required />
        </div>
        <div className="color">
          <input 
            ref="_color"
            type="color" 
            required />
        </div>
        <div className="button">
          <button>ADD</button>
        </div>
      </form>
    )
  }
}

export default AddColorForm