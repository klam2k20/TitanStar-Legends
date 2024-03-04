import { describe, expect, it } from 'vitest';
import { render, fireEvent, screen } from '@testing-library/react';
import { AvailablePointsProvider } from '../hooks/useAvailablePoints.jsx';
import { ToastProvider } from '../hooks/useToast.jsx';
import App from '../components/App.jsx';
import React from 'react';

describe('Runes should be mastered and reset in order', () => {
  it('Runes should be learned in order', () => {
    render(
      <ToastProvider>
        <AvailablePointsProvider>
          <App />
        </AvailablePointsProvider>
      </ToastProvider>
    );

    const firstRune = screen.getByTestId('1-0');
    const secondRune = screen.getByTestId('1-1');

    expect(firstRune.classList.contains('learned')).toBeFalsy();
    expect(secondRune.classList.contains('learned')).toBeFalsy();

    fireEvent.click(secondRune);
    expect(firstRune.classList.contains('learned')).toBeFalsy();

    fireEvent.click(firstRune);
    expect(firstRune.classList.contains('learned')).toBeTruthy();

    fireEvent.click(secondRune);
    expect(secondRune.classList.contains('learned')).toBeTruthy();
  });

  it('Runes should be reset in order', () => {
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
    expect(firstRune.classList.contains('learned')).toBeTruthy();
    expect(secondRune.classList.contains('learned')).toBeTruthy();

    fireEvent.contextMenu(firstRune);
    expect(firstRune.classList.contains('learned')).toBeTruthy();

    fireEvent.contextMenu(secondRune);
    fireEvent.contextMenu(firstRune);
    expect(firstRune.classList.contains('learned')).toBeFalsy();
    expect(secondRune.classList.contains('learned')).toBeFalsy();
  });

  it('Runes can only be learned with points', () => {
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

    expect(firstRune.classList.contains('learned')).toBeTruthy();
    expect(secondRune.classList.contains('learned')).toBeTruthy();
    expect(thirdRune.classList.contains('learned')).toBeTruthy();
    expect(fourthRune.classList.contains('learned')).toBeTruthy();
    expect(fifthRune.classList.contains('learned')).toBeTruthy();
    expect(sixthRune.classList.contains('learned')).toBeTruthy();

    fireEvent.click(seventhRune);
    expect(seventhRune.classList.contains('learned')).toBeFalsy();
  });
});
