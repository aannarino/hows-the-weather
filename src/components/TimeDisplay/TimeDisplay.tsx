import Typography from '@mui/material/Typography';
import type { TypographyProps } from '@mui/material/Typography';
import {
  getCompleteUTCTime,
  get24HrFormattedString,
} from 'src/utils/timeUtils';
import { sizeMap } from 'src/utils/styleUtils';
import type { size } from 'src/utils/styleUtils';

export interface TimeDisplayProps {
  time: number; //Unix
  size?: size;
  TypographyProps?: TypographyProps;
}

export const TimeDisplay = (props: TimeDisplayProps) => {
  const { time, size = 'sm', TypographyProps = {} } = props;
  const milliseconds = time * 1000;
  const completeTime = getCompleteUTCTime(milliseconds);
  return (
    <Typography {...TypographyProps} fontSize={sizeMap[size]}>
      {get24HrFormattedString(completeTime)}
    </Typography>
  );
};
