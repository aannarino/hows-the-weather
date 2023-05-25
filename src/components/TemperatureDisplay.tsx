import Typography from '@mui/material/Typography';
import type { TypographyProps } from '@mui/material/Typography';

type size = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export interface TemperatureDisplayProps {
  value: number;
  unit: 'C' | 'F';
  prepend?: string;
  size?: size;
  TypographyProps?: TypographyProps;
}

const sizeMap: Record<size, string> = {
  xs: '6px',
  sm: '12px',
  md: '24px',
  lg: '48px',
  xl: '96px',
};

export const TemperatureDisplay = (props: TemperatureDisplayProps) => {
  const {
    value,
    unit,
    prepend = '',
    size = 'sm',
    TypographyProps = {},
  } = props;

  return (
    <Typography {...TypographyProps} fontSize={sizeMap[size]}>
      {prepend} {value}&deg;{unit}
    </Typography>
  );
};
