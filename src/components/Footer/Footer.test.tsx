import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Footer } from './Footer';

describe('Footer', () => {
  it('shows the copyright notice', () => {
    render(<Footer />);
    expect(
      screen.getByText('GuitarLA - Todos los derechos reservados')
    ).toBeInTheDocument();
  });

  it('matches the snapshot', () => {
    const { container } = render(<Footer />);
    expect(container).toMatchSnapshot();
  });
});
