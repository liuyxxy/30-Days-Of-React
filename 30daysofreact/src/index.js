import React from 'react'
import ReactDOM from 'react-dom'
import css from './images/css.png'
import html from './images/html.png'
import js from './images/js.png'
import react from './images/react.png'
import pfp from './images/pfp.png'

const rootElement = document.getElementById('root')

const skills = (
    <div>
        <p><b>SKILLS</b></p>
        <button className="skills">HTML</button>
        <button className="skills">CSS</button>
        <button className="skills">React</button>
        <button className="skills">Flask</button>
        <button className="skills">Javascript</button>
        <button className="skills">Java</button>
        <button className="skills">C</button>
    </div>
)

const header = (
    <header>
        <div className="header-wrapper">
            <div>
                <img className='pfp' src={pfp} alt='html' />
            </div>
            <h1>
                Liu Yuxi
            </h1>
            <h2>Student Getting Started With React</h2>
            { skills }
        </div>
    </header>
)

const top = (
    <div className="box-wrapper">
        <div className="title-wrapper">Front End Technologies Used</div>
        <div>            
            <img src={html} alt='html' />
            <img src={css} alt='css' />
            <img src={js} alt='js' />
            <img src={react} alt='react' />
        </div>
    </div>
)

const bottom = (
    <div className="round-wrapper">
        <h1>SUBSCRIBE</h1>
        <p>Sign up with your email address to receive news and updates.</p>
        <p>
            <input type="text" id="firstname" placeholder="First Name" />
            <input type="text" id="lastname" placeholder="Last Name" />
            <input type="text" id="email" placeholder="Email" />
        </p>
        <button>Subscribe</button>
    </div>
)

const main = (
    <main>
        <div className="main-wrapper">
            { top }
            { bottom }
        </div>
    </main>
)

const footer = (
    <footer>
        <div className="footer-wrapper">
            IDK what this is for tbh but here's a footer
        </div>
    </footer>
)

const app = (
    <div>
        {header}
        {main}
        {footer}
    </div>
)

ReactDOM.render(app, rootElement)