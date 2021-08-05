import React, { Component } from 'react';


class Header extends Component {
    render() {
        const style = this.props.style
        return (
            <header style={style}>
                <div className='header-wrapper'>
                    <h1>Welcome to my portfolio!</h1>
                    <h3>Made for 30 days of React Challenge</h3>
                </div>
            </header>
        )
    }
}

export default Header