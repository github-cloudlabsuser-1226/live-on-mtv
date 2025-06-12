import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import WelcomePopup from './WelcomePopup';

describe('WelcomePopup', () => {
  test('renders welcome message', () => {
    render(<WelcomePopup open={true} onClose={jest.fn()} />);
    expect(screen.getByText(/welcome/i)).toBeInTheDocument();
  });

  test('calls onClose when close button is clicked', () => {
    const handleClose = jest.fn();
    render(<WelcomePopup open={true} onClose={handleClose} />);
    const closeButton = screen.getByRole('button', { name: /close/i });
    fireEvent.click(closeButton);
    expect(handleClose).toHaveBeenCalled();
  });

  test('does not render when open is false', () => {
    render(<WelcomePopup open={false} onClose={jest.fn()} />);
    // Assuming the popup has a role="dialog" or similar
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  });

  // Add more tests as needed for your component's props and behavior
});
