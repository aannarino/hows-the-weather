import Card from '@mui/material/Card';
import type { CardProps } from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import type { CardContentProps } from '@mui/material/CardContent';
import Skeleton from '@mui/material/Skeleton';
import type { SkeletonProps } from '@mui/material/Skeleton';

export interface CardSkeletonLoaderProps {
  CardProps?: CardProps;
  CardContentProps?: CardContentProps;
  SkeletonProps?: SkeletonProps;
}

export const CardSkeletonLoader = (props: CardSkeletonLoaderProps) => {
  const { CardProps = {}, CardContentProps = {}, SkeletonProps = {} } = props;
  return (
    <Card {...CardProps} aria-live="polite" aria-busy="true">
      <CardContent {...CardContentProps}>
        <Skeleton variant="rectangular" {...SkeletonProps} />
      </CardContent>
    </Card>
  );
};
