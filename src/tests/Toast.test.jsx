import { describe, expect, it } from 'vitest';
import { render, fireEvent, screen } from '@testing-library/react';
import { AvailablePointsProvider } from '../hooks/useAvailablePoints.jsx';
import { ToastProvider } from '../hooks/useToast.jsx';
import App from '../components/App.jsx';
import React from 'react';

describe('Toast notifications are correctly displayed', () => {
  it('Rune Mastered!', () => {
    render(
      <ToastProvider>
        <AvailablePointsProvider>
          <App />
        </AvailablePointsProvider>
      </ToastProvider>
    );

    const firstRune = screen.getByTestId('1-0');
    fireEvent.click(firstRune);
    expect(screen.getByText('Rune Mastered!')).toBeInTheDocument();
  });

  it('Rune Reset!', () => {
    render(
      <ToastProvider>
        <AvailablePointsProvider>
          <App />
        </AvailablePointsProvider>
      </ToastProvider>
    );

    const firstRune = screen.getByTestId('1-0');
    fireEvent.click(firstRune);
    fireEvent.contextMenu(firstRune);
    expect(screen.getByText('Rune Reset!')).toBeInTheDocument();
  });

  it('Insufficient Points!', () => {
    render(
      <ToastProvider>
        <AvailablePointsProvider>
          <App />
        </AvailablePointsProvider>
      </ToastProvider>
    );

    const firstRune = screen.getByTestId('1-0');
    const secondRune = screen.getByTestId('1-1');
    const thirdRune = screen.getByTestId('1-2');
    const fourthRune = screen.getByTestId('1-3');
    const fifthRune = screen.getByTestId('2-0');
    const sixthRune = screen.getByTestId('2-1');
    const seventhRune = screen.getByTestId('2-2');

    fireEvent.click(firstRune);
    fireEvent.click(secondRune);
    fireEvent.click(thirdRune);
    fireEvent.click(fourthRune);
    fireEvent.click(fifthRune);
    fireEvent.click(sixthRune);
    fireEvent.click(seventhRune);
    expect(screen.getByText('Insufficient Points!')).toBeInTheDocument();
  });

  it('Runes Must be Mastered in Order!', () => {
    render(
      <ToastProvider>
        <AvailablePointsProvider>
          <App />
        </AvailablePointsProvider>
      </ToastProvider>
    );

    const secondRune = screen.getByTestId('1-1');

    fireEvent.click(secondRune);
    expect(screen.getByText('Runes Must be Mastered in Order!')).toBeInTheDocument();
  });

  it('Rune Already Mastered!', () => {
    render(
      <ToastProvider>
        <AvailablePointsProvider>
          <App />
        </AvailablePointsProvider>
      </ToastProvider>
    );

    const firstRune = screen.getByTestId('1-0');

    fireEvent.click(firstRune);
    fireEvent.click(firstRune);
    expect(screen.getByText('Rune Already Mastered!')).toBeInTheDocument();
  });

  it('Runes Must be Reset in Order!', () => {
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
    fireEvent.contextMenu(firstRune);
    expect(screen.getByText('Runes Must be Reset in Order!')).toBeInTheDocument();
  });

  it('Rune not Mastered!', () => {
    render(
      <ToastProvider>
        <AvailablePointsProvider>
          <App />
        </AvailablePointsProvider>
      </ToastProvider>
    );

    const firstRune = screen.getByTestId('1-0');

    fireEvent.contextMenu(firstRune);
    expect(screen.getByText('Rune not Mastered!')).toBeInTheDocument();
  });
});
