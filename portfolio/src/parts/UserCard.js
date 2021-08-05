import React from 'react'
import BlockList from '../components/BlockList'

const UserCard = ({ user: {firstName, lastName, occupation, profilePic, skillList}, style: {bgStyle, listStyle} }) => {
    return (
        <div className='user-wrapper'>
            <img src={ profilePic } alt='profile pic'/>
            <h3 className='name'><b>{ lastName } {' '} { firstName }</b></h3>
            <div><small>
                <p><b>Occupation</b></p>
                <p>{ occupation }</p>
                <p><b>Skills</b></p>
                <BlockList list={skillList} style={listStyle} />
            </small></div>
        </div>
    )
}

export default UserCard