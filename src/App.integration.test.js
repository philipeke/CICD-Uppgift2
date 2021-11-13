import App from "./App"
import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import { ScoreContext } from "./shared/provider/ScoreProvider"
import { MemoryRouter } from 'react-router-dom';

const mockHistoryPush = jest.fn();

jest.mock('react-router-dom', () => ({
	...jest.requireActual('react-router-dom'),
	useHistory: () => ({
	  push: mockHistoryPush,
	}),
  }));

test('when revealing pokemon, that answer value is pushed to history', () => {

	const score = jest.fn()

	const answer = 'pikachu'

	render(
		<MemoryRouter>
			<ScoreContext.Provider value={{ score }}>
					<App />
			</ScoreContext.Provider>
		</MemoryRouter>
	)

	// expect answer textbox
	const answerInput = screen.getByPlaceholderText(/It's.../i)
	expect(answerInput).toBeInTheDocument();

	// input answer
	fireEvent.change(answerInput, { target: { value: answer } })

	// expect reveal button
	const revealButton = screen.getByRole('button', { name: 'Reveal' })
	expect(revealButton).toBeInTheDocument();

	// click it to reveal and navigate to pokemon view
	fireEvent.click(revealButton);

	// excpect history to have been pushed with value from answer textbox
	expect(mockHistoryPush).toHaveBeenCalledWith('/pokemon', { answer: answer });
})

test('when revealing pokemon, that revealed score is incremented in score provider', async () => {

	// TODO

	// const score = jest.fn()
	// const pokemon = jest.fn()

	// render(
	// 	<MemoryRouter initialEntries={[{ pathname: '/pokemon', answer: 'not-a-pokemon-name' }]}>
	// 		<ScoreContext.Provider value={{ score }}>
	// 			<PokemonContext.Provider value={{ pokemon }}>
	// 				<PokemonView />
	// 			</PokemonContext.Provider>
	// 		</ScoreContext.Provider>
    // 	</MemoryRouter>
	// )

	// // find reveal button
	// const revealButton = screen.getByRole('button', { name: 'Reveal' })
	// expect(revealButton).toBeInTheDocument();

	// // click it to navigate to pokemon view
	// fireEvent.click(revealButton);

	// waitFor(() => {
	// // expect revealed score to have been incremented
	// 	expect(score).toHaveBeenCalledTimes(1)
	// })
})
