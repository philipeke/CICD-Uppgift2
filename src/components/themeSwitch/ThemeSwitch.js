import './ThemeSwitch.css'
import { useState, useContext } from 'react'
import { ThemeContext } from '../../shared/provider/ThemeProvider'
import themeEnum from '../../shared/resources/ThemeEnum'

export const ThemeSwitch = () => {
	const { theme: [theme, setTheme] } = useContext(ThemeContext)
	const [buttonText, setButtonText] = useState(theme)

	const switchTheme = () => {
		if(theme == themeEnum.LIGHT){
			setTheme(themeEnum.DARK)
			setButtonText (themeEnum.LIGHT)
		}
		else{
			setTheme(themeEnum.LIGHT)
			setButtonText(themeEnum.DARK)
		}
	}

	return (
		<button onClick={() => switchTheme()}>{buttonText}</button>
	)
}