import React from 'react';
import ReactDOM from 'react-dom';
import pfp from './images/pfp.png';
import css from './images/css_logo.png';
import html from './images/html_logo.png';
import js from './images/js_logo.png';
import react from './images/react_logo.png';

const showDate = (time) => {
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

const buttonStyles = {
  backgroundColor: 'lightcoral',
  padding: 10,
  border: 'none',
  borderRadius: 5,
  margin: 3,
  cursor: 'pointer',
  fontSize: 18,
  color: 'white',
}

const Skills = ({skills}) => {
  return skills.map(skill => <button style={ buttonStyles }>{ skill }</button>)
}

const UserCard = ({ user: { firstName, lastName, image }, skills }) => (
  <div className='user-card'>
    <img src={image} alt={firstName} />
    <h2><b>
      {lastName}{' '}
      {firstName}
    </b></h2>
    <p>CS Student</p>
    <h2><b>Skills</b></h2>
    <Skills skills={skills} />
  </div>
)

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
        <div className='img-wrapper'>
          <img src={html} alt='html' />
          <img src={css} alt='css' />
          <img src={js} alt='js' />
          <img src={react} alt='react' />
        </div>
    </div>
  )
}

const SubscribeCard = ({ text }) => {
  const style = {
    margin: '5px',
    padding: '10px',
    borderRadius: '5px',
    border: 'none',
  }
  return (
    <div className="round-wrapper">
        <h1>SUBSCRIBE</h1>
        <p>{ text }</p>
        <p>
            <input style={style} type="text" id="firstname" placeholder="First Name" />
            <input style={style} type="text" id="lastname" placeholder="Last Name" />
            <input style={style} type="text" id="email" placeholder="Email" />
        </p>
        <button style={ buttonStyles }>Subscribe</button>
    </div>
  )
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

const HexaColor = ({ hexa }) => {
  const bgColor = hexa()
  const styles = {
    height: '100px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'Montserrat',
    margin: '2px auto',
    borderRadius: '5px',
    border: 'none',
    width: '75%',
    backgroundColor: bgColor
  }
  return (
    <div style={styles}>
      <h2>{bgColor}</h2>
    </div>
  )
}

const Header = ({
  data: {
    welcome,
    title,
    subtitle,
    author: { firstName, lastName },
    date,
  },
}) => {
  return (
    <header>
      <div className='header-wrapper'>
        <h1>{welcome}</h1>
        <h2>{title}</h2>
        <h3>{subtitle}</h3>
        <p>
          {firstName} {lastName}
        </p>
        <small>{showDate(date)}</small>
      </div>
    </header>
  )
}

const Main = ({ user, skills, text, hexa}) => {
  return (
    <main>
      <div className='main-wrapper'>
        <UserCard user={user} skills={skills} />
        <FrontEndTechs />
        <SubscribeCard text={text}/>
        <HexaColor hexa={hexa} />
        <HexaColor hexa={hexa} />
      </div>
    </main>
  )
  }

const Footer = ({ copyRight }) => (
  <footer>
    <div className='footer-wrapper'>
      <p>Copyright {copyRight.getFullYear()}</p>
    </div>
  </footer>
)

const App = () => {
  const data = {
    welcome: 'Welcome to 30 Days Of React',
    title: 'Getting Started React',
    subtitle: 'JavaScript Library',
    author: {
      firstName: 'Yuxi',
      lastName: 'Liu',
    },
    date: new Date(), // date needs to be formatted to a human readable format
  }
  const date = new Date()
  const user = { ...data.author, image: pfp} //spread operator to copy array
  const text = 'Sign up with your email address to receive news and updates'
  const skills = ['HTML', 'CSS', 'React', 'Javascript', 'Java', 'C', 'Git', 'Heroku', 'PostGreSQL']

  return (
    <div className='app'>
      <Header data={data} />
      <Main
        user={user}
        skills={skills}
        text={text}
        hexa={hexaColor}
      />
      <Footer copyRight={date} />
    </div>
  )

}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)