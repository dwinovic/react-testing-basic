import { fireEvent, render, screen } from '@testing-library/react';
import App from '../App';

describe('Untuk testing select element dan dijadikan expect value', () => {
  test('Memmunculkan seluruh tag html dalam app', () => {
    render(<App />);
    const txt = screen.getByText('Saya sedang sembunyi');
    expect(txt).toBeInTheDocument();
  });

  test('memastikan content text button sesuai saat pertama render', () => {
    render(<App />);
    const txt = screen.getByText('Muncul');
    expect(txt).toBeInTheDocument();
  });
});

describe('Melakukan selecting element untuk diberikan trigger fireEvent', () => {
  it('Memastikan text yang dirender setelah diclick', () => {
    render(<App />);
    const btn = screen.getByText('Muncul');
    fireEvent.click(btn);

    const txt = screen.getByText('Saya sedang muncul');
    expect(txt).toBeInTheDocument();
  });

  it('Memastikan text di dalam button sesuai setelah button di clik', () => {
    render(<App />);
    const btn = screen.getByText('Muncul');
    fireEvent.click(btn);
    const btnResult = screen.getByText('Sembunyi');
    expect(btnResult).toBeInTheDocument();
  });
});
