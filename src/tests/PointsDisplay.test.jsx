import { describe, expect, it } from 'vitest';
import { render, fireEvent, screen } from '@testing-library/react';
import { AvailablePointsProvider } from '../hooks/useAvailablePoints.jsx';
import { ToastProvider } from '../hooks/useToast.jsx';
import App from '../components/App.jsx';
import React from 'react';

describe('Points displayed should increment and decrement as runes are mastered and reset', () => {
  it('Points are incremented as runes are mastered', () => {
    render(
      <ToastProvider>
        <AvailablePointsProvider>
          <App />
        </AvailablePointsProvider>
      </ToastProvider>
    );

    const firstRune = screen.getByTestId('1-0');
    const secondRune = screen.getByTestId('1-1');
    expect(screen.getByText('0 / 6')).toBeInTheDocument();

    fireEvent.click(firstRune);
    fireEvent.click(secondRune);
    expect(screen.getByText('2 / 6')).toBeInTheDocument();
  });

  it('Points are decremented as runes are reset', () => {
    render(
      <ToastProvider>
        <AvailablePointsProvider>
          <App />
        </AvailablePointsProvider>
      </ToastProvider>
    );

    const firstRune = screen.getByTestId('1-0');
    const secondRune = screen.getByTestId('1-1');

    fireEvent.click(firstRune);
    fireEvent.click(secondRune);
    expect(screen.getByText('2 / 6')).toBeInTheDocument();

    fireEvent.contextMenu(secondRune);
    fireEvent.contextMenu(firstRune);
    expect(screen.getByText('0 / 6')).toBeInTheDocument();
  });

  it('Points are not incremented if rune is learned out of order', () => {
    render(
      <ToastProvider>
        <AvailablePointsProvider>
          <App />
        </AvailablePointsProvider>
      </ToastProvider>
    );

    const secondRune = screen.getByTestId('1-1');

    expect(screen.getByText('0 / 6')).toBeInTheDocument();

    fireEvent.click(secondRune);
    expect(screen.getByText('0 / 6')).toBeInTheDocument();
  });

  it('Points are not decremented if rune is reset out of order', () => {
    render(
      <ToastProvider>
        <AvailablePointsProvider>
          <App />
        </AvailablePointsProvider>
      </ToastProvider>
    );

    const firstRune = screen.getByTestId('1-0');
    const secondRune = screen.getByTestId('1-1');

    fireEvent.click(firstRune);
    fireEvent.click(secondRune);
    expect(screen.getByText('2 / 6')).toBeInTheDocument();

    fireEvent.contextMenu(firstRune);
    expect(screen.getByText('2 / 6')).toBeInTheDocument();
  });
});
