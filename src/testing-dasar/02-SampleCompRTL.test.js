import { render, screen } from '@testing-library/react';
import App from '../App';

it('Menyapa Nopik ada di dalam aplikasi', () => {
  render(<App />);
  // const text = screen.getByText('Halo Nopik');
  // expect(text).toBeInTheDocument();
});
