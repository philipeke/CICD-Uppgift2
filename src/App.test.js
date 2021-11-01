import { render, screen } from '@testing-library/react';
import App from './App';

test('WHO\'S THAT POKEMON?', () => {
  // render(<App />);
  // const questionHeading = screen.getByText('WHO\'S THAT POKEMON?');
  // expect(questionHeading).toBeInstanceOf(HTMLHeadingElement);
  // expect(questionHeading).toBeInTheDocument();
});

// test('Reveal Button', () => {
//   render(<App />);
//   const revealSubmit = screen.getByText('Reveal');
//   expect(revealSubmit).toBeInstanceOf(HTMLInputElement);
//   expect(revealSubmit).toHaveAttribute('type', 'submit')
//   expect(revealSubmit).toBeInTheDocument();
// });

// test('Score Streak', () => {
//   render(<App />);
//   const scoreStreak = screen.getByText(/Streak/);
//   expect(scoreStreak).toBeInTheDocument();
// });

// test('Theme Button', () => {
//   render(<App />);
//   const themeButton = screen.getByText(/ Theme/);
//   expect(themeButton).toBeInstanceOf(HTMLButtonElement);
//   expect(themeButton).toBeInTheDocument();
// });
