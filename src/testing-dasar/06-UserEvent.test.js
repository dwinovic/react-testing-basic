import userEvent from '@testing-library/user-event';
import { render, screen } from '@testing-library/react';
import App from '../App';
import UserEvent from './06-CompUserEvent';

const MOCK_SUBMIT_BTN = jest.fn();

it('Testing onChange event when typing', () => {
  render(<App />);
  const input = screen.getByPlaceholderText('Ketik disini');
  userEvent.type(input, 'Novi dwi');
  expect(screen.getByText(/Sedang mengetik Novi dwi/)).toBeInTheDocument();
});

it('Testing onClick pada UserEvent', () => {
  render(<UserEvent onSubmit={MOCK_SUBMIT_BTN} />);
  const textSubmit = screen.getByTestId('text-submit');
  userEvent.click(textSubmit);
  expect(MOCK_SUBMIT_BTN).toHaveBeenCalled();
});
