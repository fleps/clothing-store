import { fireEvent, render, screen } from "@testing-library/react";
import Button from '../components/button/button.component';
import { expect, vi } from 'vitest';

describe('button tests', () => {
  test('should render base button when nothing is passed', () => {
    render(<Button />);

    const btnElement = screen.getByRole('button');
    expect(btnElement)
      .toHaveTextContent(/dummy/i)
      .toHaveClass('button-container')
      .to.not.toHaveAttribute('type')
      .to.not.toHaveAttribute('onClick');
  });

  test('should have custom class if style prop passes it', () => {
    render(<Button style='inverted' />);

    const btnElement = screen.getByRole('button');
    expect(btnElement).toHaveClass('inverted');
  });

  test('should have type property if prop passes it', () => {
    render(<Button type='button' />);

    const btnElement = screen.getByRole('button');
    expect(btnElement).toHaveAttribute('type', 'button');
  });

  test('should have functional onClick property if prop passes it', () => {
    const testButtonClick = vi.fn();

    render(<Button onClick={testButtonClick} />);

    const btnElement = screen.getByRole('button');

    fireEvent.click(btnElement);
    expect(testButtonClick).toHaveBeenCalled();
  });

});
