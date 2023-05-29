import { render, screen } from '@testing-library/react';
import { DistanceDisplay } from '../DistanceDisplay';

test('Displays the distance with the correct units: ', async () => {
  const { rerender } = render(<DistanceDisplay value={-10} />);
  expect(screen.getByText('-10 Km')).toBeTruthy();

  rerender(<DistanceDisplay value={10} />);
  expect(screen.getByText('10 Km')).toBeTruthy();

  rerender(<DistanceDisplay value={10} unit="standard" />);
  expect(screen.getByText('10 Mi')).toBeTruthy();

  rerender(<DistanceDisplay value={10} unit="imperial" />);
  expect(screen.getByText('10 Mi')).toBeTruthy();
});

test('Prepends text to the distance', async () => {
  const { rerender } = render(<DistanceDisplay prepend="Hello" value={10} />);
  expect(screen.getByText('Hello 10 Km')).toBeTruthy();

  render(<DistanceDisplay prepend="Hello there" value={10} />);
  expect(screen.getByText('Hello there 10 Km')).toBeTruthy();
});
