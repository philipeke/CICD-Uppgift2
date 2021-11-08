import { useState, createContext } from 'react'
import themeEnum from '../resources/ThemeEnum'

export const ThemeContext = createContext()

export const ThemeProvider = (props) => {
	const [theme, setTheme] = useState(themeEnum.DARK)
	const [themeMidnight, setThemeMidnight] = useState(themeEnum.MIDNIGHT)

	return(
		<ThemeContext.Provider value={{
			theme: [theme, setTheme],
			themeMidnight: [themeMidnight, setThemeMidnight]
		}}>
			{props.children}
	</ThemeContext.Provider>
	)
}