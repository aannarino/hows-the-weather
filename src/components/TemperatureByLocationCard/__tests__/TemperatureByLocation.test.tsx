import { render, screen } from '@testing-library/react';
import TemperatureByLocationCard from '../TemperatureByLocationCard';
import { BrowserRouter } from 'react-router-dom';

test('Renders a loading skeleton', async () => {
  render(
    <TemperatureByLocationCard location="London" value={10} loading={true} />
  );
  expect(screen.getByRole('generic', { busy: true })).toBeInTheDocument();
});

test('Renders an error card', async () => {
  render(
    <TemperatureByLocationCard
      location="London"
      value={10}
      loading={false}
      error={{ message: 'this is a test error' }}
    />
  );
  expect(
    screen.getByText('Looks like there was an error!')
  ).toBeInTheDocument();
});

test('Renders a location with a temperature', async () => {
  render(<TemperatureByLocationCard value={10} location="London" />, {
    wrapper: BrowserRouter,
  });
  expect(screen.getByText('London 10°C')).toBeInTheDocument();
});
