import React from 'react'
import { useState, useContext } from 'react'
import { PokemonContext } from '../../shared/provider/PokemonProvider'

export const Hint = () => {
    const [hintText, setHintText] = useState(null)
    const [pokemon] = useContext(PokemonContext)

    const showHint = () => { 
        setHintText(
            "The first letter of the pokemon is: " +
            firstLetterOfPokenomName().toUpperCase())
    }

    const firstLetterOfPokenomName = () => {

        if (pokemon !== null) {
            return pokemon?.name[0]
        }

        return null
    }

    return (
        <div>
            <p>{hintText}</p>
            <button className="input" onClick={() => showHint()}> Hint</button>
        </div>
    )
}
