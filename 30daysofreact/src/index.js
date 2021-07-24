// index.js
import React from 'react'
import ReactDOM from 'react-dom'
import js from './images/js_logo.png'
import css from './images/css_logo.png'
import html from './images/html_logo.png'
import react from './images/react_logo.png'
import pfp from './images/pfp.png'

const hexaColor = () => {
  let str = '0123456789abcdef'
  let color = ''
  for (let i = 0; i < 6; i++) {
    let index = Math.floor(Math.random() * str.length)
    color += str[index]
  }
  return '#' + color
}

const HexaColor = () => {
  const bgColor = hexaColor()
  const styles = {
    height: '100px',
    display: 'flex',
    'justify-content': 'center',
    'align-items': 'center',
    fontFamily: 'Montserrat',
    margin: '2px auto',
    borderRadius: '5px',
    width: '75%',
    border: 'none',
    color: 'white',
    backgroundColor: bgColor
  }
  return (
    <div style={styles}>
      <h2>{bgColor}</h2>
    </div>
  )
}

// Header Component
const Header = () => (
  <header>
    <div className='header-wrapper'>
      <h1>Welcome to 30 Days Of React</h1>
    </div>
  </header>
)


// Front End Component
const FrontEndTechs = () => {
  const style = {
    fontWeight: 'bold',
    textAlign: 'center',
    padding: '5px',
    fontFamily: 'Montserrat'
  }
  return (
    <div className='box-wrapper'>
      <div style={style}>Front End Technologies</div>
      <div>
        <img src={html} alt='html' />
        <img src={css} alt='css' />
        <img src={js} alt='js' />
        <img src={react} alt='react' />
      </div>
    </div>
  )
}

const skill = (name) => {
  const style = {
    backgroundColor: 'white',
    color: 'lightseagreen',
    border: 'none',
    borderRadius: '5px',
    display: 'inline-block',
    textAlign: 'center',
    width: 'auto',
    height: '25px',
    margin: '5px',
    paddingLeft: '10px',
    paddingRight: '10px',
  }
  return <button style={style}>{ name }</button>
}

const skillList = (...params) => {
  return params.map((param) => skill(param))
}

const UserCard = () => {
  const pfpStyle = {
    borderRadius: '50%',
    height: '200px',
    width: 'auto',
    padding: '0px'
  }
  
  const style = {
    marginLeft: '50px',
    lineHeight: '50px'
  }

  return (
    <div className="user-wrapper">
      <img style={pfpStyle} src={pfp} alt="pfp" />
      <div style={style}> 
        <h2><b>Liu Yuxi</b></h2>
        <i>CS Student</i>
        <h2><b>Skills</b></h2>
        {skillList('HTML', 'CSS', 'React', 'Javascript', 'Java', 'C', 'Git')}
      </div>
      
    </div>
  )
}

const SubscribeCard = () => {
  const style = {
    margin: '5px',
    padding: '10px',
    borderRadius: '5px',
    border: 'none',
  }
  
  const bStyle = {
    backgroundColor: 'lightcoral',
    fontFamily: 'Montserrat',
    color: 'white',
    borderRadius: '5px',
    border: 'none',
    width: '400px',
    height: '50p',
    margin: '25px'
  }

  return (
    <div className="round-wrapper">
        <h1>SUBSCRIBE</h1>
        <p>Sign up with your email address to receive news and updates.</p>
        <p>
            <input style={style}  type="text" id="firstname" placeholder="First Name" />
            <input style={style} type="text" id="lastname" placeholder="Last Name" />
            <input style={style} type="text" id="email" placeholder="Email" />
        </p>
        <button style={bStyle}>Subscribe</button>
    </div>
  )
}

// TechList Component
const TechList = () => {
  const techs = ['HTML', 'CSS', 'JavaScript']
  const techsFormatted = techs.map((tech) => <li key={tech}>{tech}</li>)
  return techsFormatted
}

// Main Component
const Main = () => (
  <main>
    <div className='main-wrapper'>
      <UserCard />
      <FrontEndTechs />
      <div>
        {/* Generate five different hexa colors every time */}
        <HexaColor />
        <HexaColor />
        <HexaColor />
        <HexaColor />
        <HexaColor />
      </div>
      <SubscribeCard />
    </div>
  </main>
)

const copyRight = '2020'

// Footer Component
const Footer = () => (
  <footer>
    <div className='footer-wrapper'>
      <p>Copyright &copy;{copyRight}</p>
    </div>
  </footer>
)

// The App, or the parent or the container component
const App = () => (
  <div className='app'>
    <Header />
    <Main />
    <Footer />
  </div>
)

const rootElement = document.getElementById('root')
// we render the App component using the ReactDOM package
ReactDOM.render(<App />, rootElement)
