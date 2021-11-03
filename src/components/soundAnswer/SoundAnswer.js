import React, { useEffect } from "react"
import useSound from 'use-sound'
import PikachuSound from '../../shared/resources/sounds/pikachu.mp3'
import Notification from '../../shared/resources/sounds/notification.wav'

export const SoundAnswer = ({ isCorrectAnswer }) => {
    const [playCorrect] = useSound(PikachuSound, {});
    const [playWrong] = useSound(Notification, {})

    useEffect(() => {
        if (isCorrectAnswer)
            playCorrect()
        else
            playWrong()
    }, [playCorrect, playWrong, isCorrectAnswer])

    const displayAnswer = () => {
        if (isCorrectAnswer)
            return <h1 className='answer-correct'>✔</h1>
        else
            return <h1 className='answer-not-correct'>✖</h1>
    }

    return (
        <div>
            {displayAnswer()}
        </div>
    );
}