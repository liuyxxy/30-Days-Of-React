import React from 'react'

const BlockList = ({ list, style }) => {
    return list.map(item => <div className='block' style={style} key={item}>{ item }</div>)
}

export default BlockList