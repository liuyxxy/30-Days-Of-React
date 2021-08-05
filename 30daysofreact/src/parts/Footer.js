import React, { Component } from 'react';
import Button from '../components/Button'
import { lightButtonStyle, darkButtonStyle } from '../styles/buttonStyles';

class Footer extends Component {
    render() {
        const style = this.props.style
        const change = this.props.changeBackground
        const text = this.props.style.backgroundColor === ''? 'dark' : 'light'
        const buttonStyle = this.props.style.backgroundColor === ''? lightButtonStyle : darkButtonStyle
        const link = () => {
            window.open('https://github.com/liuyxxy')
        }
        return (
            <footer style={style}>
                <div className='footer-wrapper'>
                    <div>
                        <div className='left'>
                            <Button text={text} onClick={change} style={buttonStyle} />
                        </div>
                        &copy;2021
                        <div className='right'>
                            <Button text={'github'} onClick={link} style={buttonStyle} />
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
}

export default Footer