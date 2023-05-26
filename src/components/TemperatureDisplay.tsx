import Typography from '@mui/material/Typography';
import type { TypographyProps } from '@mui/material/Typography';

type size = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export interface TemperatureDisplayProps {
  value: number;
  unit: 'C' | 'F';
  precision?: number;
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

// Value to be passed into toFixed must be between 0 and 100 (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed#parameters)
const normalizePrecision = (precision: number) => {
  if (precision < 0) {
    return 0;
  } else if (precision > 100) {
    return 100;
  } else {
    return precision;
  }
};

export const TemperatureDisplay = (props: TemperatureDisplayProps) => {
  const {
    value,
    unit,
    prepend = '',
    size = 'sm',
    TypographyProps = {},
    precision = 0,
  } = props;

  let precisionNormalized = normalizePrecision(precision);

  return (
    <Typography {...TypographyProps} fontSize={sizeMap[size]}>
      {prepend} {value.toFixed(precisionNormalized)}&deg;{unit}
    </Typography>
  );
};
