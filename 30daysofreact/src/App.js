import React, { Component } from 'react';
import Header from './parts/Header';
import Main from './parts/Main';
import Footer from './parts/Footer';
import pfp from './assets/pfp.png'

class App extends Component {
    state = {
        light: true, 
        style: {
            colour: '',
            backgroundColor: ''
        },
        listStyle: {
            colour: '', 
            backgroundColor: ''
        }
    }
    changeBackground = () => {
        let darkBg = {
            backgroundColor: '#121212',
            color: '#ECECED',
            borderTop: '1px solid white'
        }
        let lightBg = {
            backgroundColor: '',
            color: ''
        }
        let lightList = {
            colour: '', 
            backgroundColor: ''
        }
        let darkList = {
            colour: '#ECECED',
            backgroundColor: '#648383'
        }
          console.log(darkBg)
          let bg = this.state.light? darkBg : lightBg
          let list = this.state.light? darkList : lightList
          this.setState({ style: bg, listStyle: list, light: !this.state.light })
    }

    render() {
        const skills = ['HTML', 'CSS', 'Javascript', 'React', 'Java', 'C', 'Python', 'Github', 'PostgreSQL', 'Flask']
        const user = {
            firstName: 'Yuxi',
            lastName: 'Liu',
            occupation: 'CS Student',
            profilePic: pfp,
            skillList: skills
        }
        return (
            <div className="app">
                <Header style={this.state.style}/>
                <Main user={user} bgStyle={this.state.style} listStyle={this.state.listStyle}/>
                <Footer style={this.state.style} changeBackground={this.changeBackground}/>
            </div>
        )
    }
}

export default App