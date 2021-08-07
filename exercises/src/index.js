// index.js
import React, { Component } from 'react'
import ReactDOM from 'react-dom'

class App extends Component {
  state = {
    style: {
      bottom: '',
      left: ''
    }
  }
  randomYPosition = () => {
    return Math.floor(Math.random() * 40) + 'em'
  }
  randomXPosition = () => {
    return Math.floor(Math.random() * 70) + 'em'
  }
  handleMouseEnter = (e) => {
    const newStyle = {
      bottom: this.randomYPosition(),
      left: this.randomXPosition()
    }
    this.setState({ style: newStyle })
  }
  render() {

    return (
      <div className='box' style={this.state.style} onMouseEnter={this.handleMouseEnter}>
        30 days of react
      </div>
    )
  }
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)