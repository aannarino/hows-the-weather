import { TemperatureDisplay } from 'src/components/TemperatureDisplay';
import Typography from '@mui/material/Typography';
import { sizeMap } from 'src/utils/styleUtils';

export interface TemperatureOverviewProps {
  highTemp: number;
  lowTemp: number;
  temp: number;
  status: string;
  unit?: 'C' | 'F';
}

export const TemperatureOverview = (props: TemperatureOverviewProps) => {
  const { highTemp, lowTemp, temp, status, unit = 'C' } = props;
  return (
    <div>
      <Typography fontSize={sizeMap['md']} align="center">
        {status}
      </Typography>
      <TemperatureDisplay
        TypographyProps={{ align: 'center' }}
        size="xl"
        value={temp}
        unit={unit}
      />
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <TemperatureDisplay
          size="md"
          value={highTemp}
          unit={unit}
          prepend="H:"
        />
        <TemperatureDisplay
          size="md"
          TypographyProps={{ paddingLeft: '8px' }}
          value={lowTemp}
          unit={unit}
          prepend="L:"
        />
      </div>
    </div>
  );
};
