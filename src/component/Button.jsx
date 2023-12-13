import React, { PureComponent } from 'react'

export default function Button(props) {
    let {btn}=props
    return(
        <button className='rounded-md hover:bg-sky-300'>{btn}</button>
    )
    
    
}
