import React from 'react'
import {useState, useContext} from 'react'
import { PokemonContext } from '../../shared/provider/PokemonProvider'

export const Hint = () => {
    const [hintText, setHintText] = useState()
    const [pokemon] = useContext(PokemonContext)
    const showHint = () => {setHintText("null")} 
    const firstLetterOfPokenomName = () => {
        const pokemonName = pokemon?.name
        if(pokemonName !== null)
        {
            return pokemonName(0)
        }
        return null
    }
    return (
        <div>
            <p>{firstLetterOfPokenomName()}</p>
            <button className= "input" onClick={() => showHint()}> Hint</button>
        </div>
    )
}
