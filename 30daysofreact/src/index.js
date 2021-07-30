// index.js
import React from 'react'
import ReactDOM, { render } from 'react-dom'
import pfp from './images/pfp.png'
import { countriesData } from './data/countries'

// User Card Component
const UserCard = ({ user: { firstName, lastName, image } }) => (
  <div className='user-card'>
    <img src={image} alt={firstName} />
    <h2>
      {firstName}
      {lastName}
    </h2>
  </div>
)

const Country = ({ index }) => {
    const { name, capital, languages, population, flag, currency } = countriesData[index]
    
    let lang = languages.toString().replaceAll(",", ", ")
    const imgStyle = {
        width: '300px',
        height: '200px'
    }
    return (
        <div>
            <img src={ flag } alt='country flag' style={imgStyle} />
            <h3><b>{ name }</b></h3>
            <div className='country-wrapper'>
                <p><b>Capital:</b> { capital }</p>
                <p><b>Language:</b> { lang }</p>
                <p><b>Population:</b> { population }</p>
                <p><b>Currency:</b> { currency }</p>
            </div>
        </div>
    )
}

class CountryBox extends React.Component {
    constructor(props) {
        super(props)
    }
    state = {
        current: 0,
        style: {
            border: '',
            backgroundColor: '',
            color: ''
        }
    }
    changeCountry = () => {
        this.setState({ current: Math.floor(Math.random() * 250) })
    }

    render() {
        const titleStyle = {
            padding: '10px'
        }

        return (
            <main style={this.state.style}>
                <div className='box-wrapper'>
                    <div style={titleStyle}><b>
                        Where will you be holiday-ing next? 
                    </b></div>
                    <Country index={this.state.current} />
                    <div>
                        <Button text='Select Country' onClick={this.changeCountry} style={buttonStyles} />
                    </div>
                </div>
            </main>
        )
    }
}

// A button component
const Button = ({ text, onClick, style }) => (
  <button style={style} onClick={onClick}>
    {text}
  </button>
)

// CSS styles in JavaScript Object
const buttonStyles = {
  backgroundColor: '#61dbfb',
  padding: 10,
  border: 'none',
  borderRadius: 5,
  margin: 3,
  cursor: 'pointer',
  fontSize: 18,
  color: 'white',
}

// class based component
class Header extends React.Component {
  constructor(props) {
    super(props)
    // the code inside the constructor run before any other code
  }
  render() {
    const {
      welcome,
      title,
      subtitle,
      author: { firstName, lastName },
      date,
    } = this.props.data

    const style = this.props.style

    return (
      <header style={style}>
        <div className='header-wrapper'>
          <h1>{welcome}</h1>
          <h2>{title}</h2>
          <h3>{subtitle}</h3>
          <p>
            {firstName} {lastName}
          </p>
          <small>{date}</small>
        </div>
      </header>
    )
  }
}

const Count = ({ count, addOne, minusOne }) => (
  <div>
    <h1>{count} </h1>
    <div>
      <Button text='+1' onClick={addOne} style={buttonStyles} />
      <Button text='-1' onClick={minusOne} style={buttonStyles} />
    </div>
  </div>
)

// TechList Component
// class base component
class TechList extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    const { techs } = this.props
    const techsFormatted = techs.map((tech) => <li key={tech}>{tech}</li>)
    return techsFormatted
  }
}

// Main Component
// Class Component
class Main extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    const {
      techs,
      user,
      greetPeople,
      handleTime,
      changeBackground,
      count,
      addOne,
      minusOne,
      style
    } = this.props
    return (
      <main style={style}>
        <div className='main-wrapper'>
          <p>Prerequisite to get started react.js:</p>
          <ul>
            <TechList techs={techs} />
          </ul>
          <UserCard user={user} />
          <Button
            text='Greet People'
            onClick={greetPeople}
            style={buttonStyles}
          />
          <Button text='Show Time' onClick={handleTime} style={buttonStyles} />
          <Button
            text='Change Background'
            onClick={changeBackground}
            style={buttonStyles}
          />
          <Count count={count} addOne={addOne} minusOne={minusOne} />
        </div>
      </main>
    )
  }
}

// Footer Component
// Class component
class Footer extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <footer style={this.props.style}>
        <div className='footer-wrapper'>
          <p>Copyright {this.props.date.getFullYear()}</p>
        </div>
      </footer>
    )
  }
}

class App extends React.Component {
  state = {
    count: 0,
    style: {
        border: '',
        backgroundColor: '',
        color: ''
    },
  }
  showDate = (time) => {
    const months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ]

    const month = months[time.getMonth()].slice(0, 3)
    const year = time.getFullYear()
    const date = time.getDate()
    return ` ${month} ${date}, ${year}`
  }
  addOne = () => {
    this.setState({ count: this.state.count + 1 })
  }

  // method which subtract one to the state
  minusOne = () => {
    this.setState({ count: this.state.count - 1 })
  }
  handleTime = () => {
    alert(this.showDate(new Date()))
  }
  greetPeople = () => {
    alert('Welcome to 30 Days Of React Challenge, 2020')
  }
  changeBackground = () => {
      let dark = {
        borderTop: '1px solid white',
        backgroundColor: 'black',
        color: 'white'
      }
      let light = {
          border: '',
          backgroundColor: '',
          color: ''
      }
      console.log(this.state.style)
      let style = this.state.style.backgroundColor === light.backgroundColor? dark : light
      this.setState({ style: style })
  }
  render() {
    const date = new Date()
    const data = {
      welcome: 'Welcome to 30 Days Of React',
      title: 'Getting Started React',
      subtitle: 'JavaScript Library',
      author: {
        firstName: 'Liu',
        lastName: 'Yuxi',
      },
      date: this.showDate(date),
    }
    const techs = ['HTML', 'CSS', 'JavaScript']
    // copying the author from data object to user variable using spread operator
    const user = { ...data.author, image: pfp }

    return (
      <div className='app'>
        <Header data={data} style={this.state.style}/>
        <CountryBox style={this.state.style}/>
        <Main
          user={user}
          techs={techs}
          handleTime={this.handleTime}
          greetPeople={this.greetPeople}
          changeBackground={this.changeBackground}
          addOne={this.addOne}
          minusOne={this.minusOne}
          count={this.state.count}
          style={this.state.style}
        />
        <Footer date={new Date()} style={this.state.style}/>
      </div>
    )
  }
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
