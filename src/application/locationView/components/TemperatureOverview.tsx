import { TemperatureDisplay } from 'src/components/TemperatureDisplay';
import Typography from '@mui/material/Typography';

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
      <Typography align="center">{status}</Typography>
      <TemperatureDisplay
        TypographyProps={{ align: 'center' }}
        size="lg"
        value={temp}
        unit={unit}
      />
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <TemperatureDisplay value={highTemp} unit={unit} prepend="H:" />
        <TemperatureDisplay
          TypographyProps={{ paddingLeft: '8px' }}
          value={lowTemp}
          unit={unit}
          prepend="L:"
        />
      </div>
    </div>
  );
};
