import Card from '@mui/material/Card';
import type { CardProps } from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import type { CardContentProps } from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

export interface ErrorFallbackCardProps {
  CardProps?: CardProps;
  CardContentProps?: CardContentProps;
}

export const ErrorFallbackCard = (props: ErrorFallbackCardProps) => {
  const { CardProps = {}, CardContentProps = {} } = props;
  return (
    <Card {...CardProps}>
      <CardContent {...CardContentProps}>
        <Typography variant="h3">Looks like there was an error!</Typography>
        <Typography variant="body1">
          Our dev team has been notified, but this may be a temporary error.
          Refreshing the page may fix the problem.
        </Typography>
      </CardContent>
    </Card>
  );
};
