import { render, screen } from '@testing-library/react';
import App from '../App';
import { data } from './05-CompVariant';

test('melakukan testing untuk queryBy dan findBy', async () => {
  render(<App />);
  const txt = screen.queryByText(/Selamat datang/);
  expect(txt).toBeNull();
  const txtResult = await screen.findByText(/Selamat datang/);
  expect(txtResult).toBeInTheDocument();
});

it('test multiple element', () => {
  render(<App />);
  const element = screen.getAllByTestId('hari');
  expect(element).toHaveLength(data.length);
});
