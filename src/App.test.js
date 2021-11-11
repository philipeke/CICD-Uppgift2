import { render, screen } from '@testing-library/react';
import App from './App';
import { ScoreBoard } from "./components/scoreboard/ScoreBoard"
import { ScoreProvider } from "./shared/provider/ScoreProvider"

test('WHO\'S THAT POKEMON?', () => {
  render(<App />);
  const questionHeading = screen.getByText('WHO\'S THAT POKEMON?');
  expect(questionHeading).toBeInstanceOf(HTMLHeadingElement);
  expect(questionHeading).toBeInTheDocument();
});

test('Reveal Button', () => {
  render(<App />);
  const revealSubmit = screen.getByText('Reveal');
  expect(revealSubmit).toBeInstanceOf(HTMLInputElement);
  expect(revealSubmit).toHaveAttribute('type', 'submit')
  expect(revealSubmit).toBeInTheDocument();
});

test('Theme Button', () => {
  render(<App />);
  const themeButton = screen.getByText(/ Theme/);
  expect(themeButton).toBeInstanceOf(HTMLButtonElement);
  expect(themeButton).toBeInTheDocument();
});

test('score board to have all headings; correct, incorrect, revealed, and streak', () => {

	render(
		<ScoreProvider> 
			<ScoreBoard />
		</ScoreProvider>)

	const correctHeading = screen.getByRole('heading', { name: 'Correct:' })
	const incorrectHeading = screen.getByRole('heading', { name: 'Incorrect:' })
	const revealedHeading = screen.getByRole('heading', { name: 'Revealed:' })
	const streakHeading = screen.getByRole('heading', { name: 'Streak:' })
	
	expect(correctHeading).toBeInTheDocument()
	expect(incorrectHeading).toBeInTheDocument()
	expect(revealedHeading).toBeInTheDocument()
	expect(streakHeading).toBeInTheDocument()
})
