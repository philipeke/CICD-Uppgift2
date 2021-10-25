import React from 'react'
import {useState} from 'react'

export const Hint = () => {
    const [hintText, setHintText] = useState()
    const showHint = () => {setHintText("null")} 
    return (
        <div>
            <p>{hintText}</p>
            <button className= "input" onClick={() => showHint()}> Hint</button>
        </div>
    )
}
