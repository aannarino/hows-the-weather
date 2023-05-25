import Card from '@mui/material/Card';
import type { CardProps } from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import type { CardContentProps } from '@mui/material/CardContent';

import { TemperatureDisplay } from './TemperatureDisplay';
import type { TemperatureDisplayProps } from './TemperatureDisplay';
import { Link } from 'react-router-dom';
import { LinkProps } from 'react-router-dom';

export interface TemperatureByLocationCardProps
  extends TemperatureDisplayProps {
  location: string;
  CardProps?: CardProps;
  CardContentProps?: CardContentProps;
  LinkProps?: LinkProps;
}

export const TemperatureByLocationCard = (
  props: TemperatureByLocationCardProps
) => {
  const {
    location,
    CardProps = {},
    CardContentProps = {},
    LinkProps = {},
    ...TemperatureDisplayProps
  } = props;
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
