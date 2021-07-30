import React from 'react';
import ReactDOM from 'react-dom';
import { tenHighestPopulation } from './data/ten_most_highest_populations'

class Header extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        if (this.props.name === 'World') {
            return (
                <div className='header-wrapper'>
                    <h1>30 Days of React</h1>
                    <h2>World Population</h2>
                    <small>Ten most populated countries</small>
                </div>
            )
        } else {
            return (
                <div className='header-wrapper'>
                    <h2>{this.props.name} Generator</h2>
                </div>
            )
        }
    }
}

class WorldPop extends React.Component {
    constructor(props) {
        super(props)
    }sdfsdf
    render () {
        const list = this.props.countries.map(country => <Country key={country.country} country={country} />)
        return (
          <div className='bar-group'>{ list }</div>
        )
    }
}

const Country = ({ country: {country, population} }) => {
  const style = {
    height: '30px',
    backgroundColor: '#FB9B54',
    width: (population / 1000000000) * 100,
    borderRadius: '5px',
    marginTop: 'auto',
    marginBottom: 'auto'
  }
  return (
    <div className='bar-chart'>
      <div className='country-chart'>
        { country } 
      </div>
      <div className='chart' style={style} />
      <div className='pop-chart'>
        { population }
      </div>
    </div>
  )
}

const NumberBox = ({ number }) => {
  const isPrime = num => {
    if (num === 1 || num === 0) {
      return false
    }
    for(let i = 2; i < num; i++) {
      if(num % i === 0) {
        return false
      }
    }
    return true
  }
  const isEven = num => {
    return num % 2 === 0
  }
  if (isPrime(number)) {
    return (
      <div className='box'>
        <div className="prime-box">
          { number }
        </div>
      </div>
    )
  } else if (isEven(number)) {
    return (
      <div className='box'>
        <div className="even-box">
          { number }
        </div>
      </div>
    )
  } else {
    return (
      <div className='box'>
        <div className="odd-box">
          { number }
        </div>
      </div>
    )
  }
}

class NumberGen extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        const list = this.props.numbers.map(number => <NumberBox key={number} number={number} />)
        return (
          <div className='box-wrapper'>{ list }</div>
        )
    }
}

const hexaColor = () => {
  let str = '0123456789abcdef'
  let color = ''
  for (let i = 0; i < 6; i++) {
    let index = Math.floor(Math.random() * str.length)
    color += str[index]
  }
  return '#' + color
}

const HexaColor = ({color}) => {
  const style = {
    width: '150px',
    height: '150px',
    color: 'white',
    marginTop: '5px',
    fontWeight: 'bold',
    fontSize: '50%',
    lineHeight: '150px',
    backgroundColor: color
  }
  return (
    <div className='box'>
      <div style={style}>
        {color}
      </div>  
    </div>
  )
}

class HexaGen extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        const list = this.props.numbers.map(number => <HexaColor key={hexaColor()} color={hexaColor()}/>)
        return <div className='box-wrapper'>{ list }</div>
    }
}

class App extends React.Component {
    render () {
        const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31]
        const hexaNums = Array(32).fill(0)
        return (
            <div className="app">
                <Header name={'World'} />
                <WorldPop countries={tenHighestPopulation} />
                <Header name={'Number'} />
                <NumberGen numbers={numbers} />
                <Header name={'Hexadecimal'} />
                <HexaGen numbers={hexaNums} />
            </div>
        )
    }
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)