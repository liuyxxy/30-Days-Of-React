import React from 'react';
import ReactDOM from 'react-dom';

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

class Main extends React.Component {
    state = {
        season: this.props.season,
        time: this.props.time,
        seasonStyle: this.props.style
    }
    toSpring = () => {
        const newStyle = {
            backgroundColor:'#CAF97D'
        }
        this.setState({ season: "spring", seasonStyle: newStyle })
    }
    toSummer = () => {
        const newStyle = {
            backgroundColor:'#F9EE89'
        }
        this.setState({ season: "summer", seasonStyle: newStyle })
    }
    toAutumn = () => {
        const newStyle = {
            backgroundColor:'#F9AC7D'
        }
        this.setState({ season: "autumn", seasonStyle: newStyle })
    }
    toWinter = () => {
        const newStyle = {
            backgroundColor:'#BCF7F9'
        }
        this.setState({ season: "winter", seasonStyle: newStyle })
    }
    handler = () => {
        this.setState({ season: "loading" })
        setTimeout(this.toSpring, 1000) 
    }
    render() {
        const season = this.state.season
        const seasonStyle = this.state.seasonStyle
        const time = this.state.time
        const dayStyle = {backgroundColor: '#719CED'}
        const noonStyle = {backgroundColor: '#FF9C33'}
        const eveningStyle = {backgroundColor: '#D8B148'}
        const nightStyle = {backgroundColor: '#56637D'}
        const timeStyle = time === "day" ? dayStyle : time === "noon" ? noonStyle : time === "evening" ? eveningStyle : nightStyle 
        return (
            <body>
                <div className="main-wrapper" style={seasonStyle}>
                    <h1>It's {season} now!</h1>
                    <div>Or: click the buttons below to change the background yourself</div>
                    {this.state.season !== "spring" && <button onClick={this.handler} style={buttonStyles}>spring</button>}
                    {this.state.season !== "summer" && <button onClick={this.toSummer} style={buttonStyles}>summer</button>}
                    {this.state.season !== "autumn" && <button onClick={this.toAutumn} style={buttonStyles}>autumn</button>}
                    {this.state.season !== "winter" && <button onClick={this.toWinter} style={buttonStyles}>winter</button>}
                </div>
                <div className="sub-main-wrapper" style={timeStyle}>
                    <h1>It's {this.props.time} now!</h1>
                </div>
            </body>
        )
    }
}

class App extends React.Component {
    render() {
        const month = new Date().getMonth()
        let season
        let style
        switch (month) {
            case 12:
            case 1:
            case 2:
                season = "winter"
                style = {
                    backgroundColor:'#BCF7F9'
                }
                break
            case 3: 
            case 4: 
            case 5: 
                season = "spring"
                style = {
                    backgroundColor:'#CAF97D'
                }
                break
            case 6: 
            case 7:
            case 8: 
                season = "summer"
                style = {
                    backgroundColor:'#F9EE89'
                }
                break
            case 9: 
            case 10:
            case 11:
                season = "autumn"
                style = {
                    backgroundColor:'#F9AC7D'
                }
                break
            default:
                console.log("error in the months!")
        }
        const hour = new Date().getHours()
        let time
        if (hour >= 12 && hour <= 13) {
            time = "hi"
        } else if (hour >= 20 && hour <= 6) {
            time = "night"
        } else if (hour >= 6 && hour <= 17) {
            time = "day"
        } else {
            time = "evening"
        }
        return (
            <div className="app">
                <Main season={season} style={style} time={time}/>
            </div>
        )
    }
}

const root = document.getElementById('root')
ReactDOM.render(<App />, root)
