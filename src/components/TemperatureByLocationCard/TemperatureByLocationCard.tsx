import Card from '@mui/material/Card';
import type { CardProps } from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import type { CardContentProps } from '@mui/material/CardContent';

import { CardSkeletonLoader } from '../SkeletonLoaders/CardSkeletonLoader';
import { TemperatureDisplay } from '../TemperatureDisplay/TemperatureDisplay';
import type { TemperatureDisplayProps } from '../TemperatureDisplay/TemperatureDisplay';
import { Link } from 'react-router-dom';
import { LinkProps } from 'react-router-dom';
import { ErrorBoundary, useErrorBoundary } from 'react-error-boundary';
import { ErrorFallbackCard } from '../ErrorFallbackComponents/ErrorFallbackCard';

export interface TemperatureByLocationCardProps
  extends TemperatureDisplayProps {
  location: string;
  loading?: boolean;
  error?: any;
  CardProps?: CardProps;
  CardContentProps?: CardContentProps;
  LinkProps?: LinkProps;
}

const TemperatureByLocationCard = (props: TemperatureByLocationCardProps) => {
  const { showBoundary } = useErrorBoundary();
  const {
    location,
    loading = false,
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

  return loading ? (
    <CardSkeletonLoader />
  ) : (
    <Card aria-live="polite" aria-busy="true" {...CardProps}>
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
  const onError = (error: any) => {
    //Here is where we would log any errors
    console.log('Error in TemperatureByCard: ', JSON.stringify(error));
  };
  return (
    <ErrorBoundary
      fallbackRender={() => <ErrorFallbackCard />}
      onError={onError}
    >
      <TemperatureByLocationCard {...props} />
    </ErrorBoundary>
  );
};

export default TemperatureByLocationCardWithError;
