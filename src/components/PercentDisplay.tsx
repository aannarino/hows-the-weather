import Typography from '@mui/material/Typography';
import type { TypographyProps } from '@mui/material/Typography';

import { sizeMap } from 'src/utils/styleUtils';
import type { size } from 'src/utils/styleUtils';

export interface PercentDisplayProps {
  value: number;
  size?: size;
  TypographyProps?: TypographyProps;
}

export const PercentDisplay = (props: PercentDisplayProps) => {
  const { value, size = 'sm', TypographyProps = {} } = props;
  return (
    <Typography {...TypographyProps} fontSize={sizeMap[size]}>
      {value}&#37;
    </Typography>
  );
};
