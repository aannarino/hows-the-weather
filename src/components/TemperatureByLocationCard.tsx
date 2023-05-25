import Card from '@mui/material/Card';
import type { CardProps } from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import type { CardContentProps } from '@mui/material/CardContent';

import { TemperatureDisplay } from './TemperatureDisplay';
import type { TemperatureDisplayProps } from './TemperatureDisplay';
import { Link } from 'react-router-dom';
import { LinkProps } from 'react-router-dom';
import { ErrorBoundary, useErrorBoundary } from 'react-error-boundary';
import { ErrorFallbackCard } from './ErrorFallbackComponents/ErrorFallbackCard';

export interface TemperatureByLocationCardProps
  extends TemperatureDisplayProps {
  location: string;
  error?: any;
  CardProps?: CardProps;
  CardContentProps?: CardContentProps;
  LinkProps?: LinkProps;
}

const TemperatureByLocationCard = (props: TemperatureByLocationCardProps) => {
  const { showBoundary } = useErrorBoundary();
  const {
    location,
    CardProps = {},
    CardContentProps = {},
    LinkProps = {},
    error = null,
    ...TemperatureDisplayProps
  } = props;

  //This allows us to display an error boundary outside of rendering
  if (error) {
    showBoundary(error);
  }

  return (
    <Card {...CardProps}>
      <Link to={`/hows-the-weather/location/${location}`} {...LinkProps}>
        <CardContent {...CardContentProps}>
          <TemperatureDisplay prepend={location} {...TemperatureDisplayProps} />
        </CardContent>
      </Link>
    </Card>
  );
};

const TemperatureByLocationCardWithError = (
  props: TemperatureByLocationCardProps
) => {
  return (
    <ErrorBoundary fallbackRender={() => <ErrorFallbackCard />}>
      <TemperatureByLocationCard {...props} />
    </ErrorBoundary>
  );
};

export default TemperatureByLocationCardWithError;
