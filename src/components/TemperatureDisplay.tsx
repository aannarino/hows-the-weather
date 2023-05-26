import Typography from '@mui/material/Typography';
import type { TypographyProps } from '@mui/material/Typography';
import { sizeMap } from 'src/utils/styleUtils';
import type { size } from 'src/utils/styleUtils';

export interface TemperatureDisplayProps {
  value: number;
  unit: 'C' | 'F';
  precision?: number;
  prepend?: string;
  size?: size;
  TypographyProps?: TypographyProps;
}

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
    prepend = null,
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
