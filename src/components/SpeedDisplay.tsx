import Typography from '@mui/material/Typography';
import type { TypographyProps } from '@mui/material/Typography';
import { sizeMap } from 'src/utils/styleUtils';
import type { size } from 'src/utils/styleUtils';

export interface SpeedDisplayProps {
  value: number; //Km or Mi
  unit?: 'standard' | 'metric' | 'imperial';
  prepend?: string;
  size?: size;
  TypographyProps?: TypographyProps;
}

export const SpeedDisplay = (props: SpeedDisplayProps) => {
  const {
    value,
    unit = 'metric',
    prepend = null,
    size = 'sm',
    TypographyProps = {},
  } = props;

  // TODO: Write a function to display in meters or kilometers depending on the distance
  // TODO: Write a unit mapper (e.g. metric would have degrees celcius, kilometers, etc)
  const lengthUnit = unit === 'metric' ? 'Km' : 'Mi';

  return (
    <Typography {...TypographyProps} fontSize={sizeMap[size]}>
      {prepend} {value} {lengthUnit}
    </Typography>
  );
};
