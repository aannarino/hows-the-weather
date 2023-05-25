import Typography from '@mui/material/Typography';
import { TypographyProps } from '@mui/material/Typography';

type size = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export interface TemperatureDisplayProps {
  value: number;
  unit: 'C' | 'F';
  size?: size;
  TypographyProps?: TypographyProps;
}

export const TemperatureDisplay = (props: TemperatureDisplayProps) => {
  const { value, unit, size = 'sm', TypographyProps = {} } = props;

  return (
    <Typography {...TypographyProps} fontSize={sizeMap[size]}>
      {value}&deg;{unit}
    </Typography>
  );
};

const sizeMap: Record<size, string> = {
  xs: '6px',
  sm: '12px',
  md: '24px',
  lg: '48px',
  xl: '96px',
};
