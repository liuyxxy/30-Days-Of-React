import React, { Component } from 'react'
import UserCard from './UserCard'

class Main extends Component {
    render() {
        const user = this.props.user
        const bgStyle = this.props.bgStyle
        const listStyle = this.props.listStyle
        const styles = {bgStyle, listStyle}
        return (
            <main style={bgStyle}>
                <div className='main-wrapper'>
                    <UserCard user={user} style={styles}/>
                </div>
            </main>
        )
    }
}

export default Main