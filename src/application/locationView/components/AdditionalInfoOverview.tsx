import Grid from '@mui/material/Grid';
import { TimeDisplay } from 'src/components/TimeDisplay';
import { PercentDisplay } from 'src/components/PercentDisplay';
import { DistanceDisplay } from 'src/components/DistanceDisplay/DistanceDisplay';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

export interface AdditionalInfoOverviewProps {
  sunrise: number;
  sunset: number;
  humidity: number;
  visibility: number;
}

export const AdditionalInfoOverview = (props: AdditionalInfoOverviewProps) => {
  const { sunrise, sunset, humidity, visibility } = props;
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container>
        <Grid padding={4} sx={{ borderBottom: 'solid' }} item xs={6}>
          <Typography align="center">Sunrise</Typography>
          <TimeDisplay
            TypographyProps={{ align: 'center' }}
            size="md"
            time={sunrise}
          />
        </Grid>
        <Grid
          padding={4}
          sx={{ borderLeft: 'solid', borderBottom: 'solid' }}
          item
          xs={6}
        >
          <Typography align="center">Sunset</Typography>
          <TimeDisplay
            TypographyProps={{ align: 'center' }}
            size="md"
            time={sunset}
          />
        </Grid>
        <Grid padding={4} item xs={6}>
          <Typography align="center">Humidity</Typography>
          <PercentDisplay
            TypographyProps={{ align: 'center' }}
            size="md"
            value={humidity}
          />
        </Grid>
        <Grid padding={4} item xs={6} sx={{ borderLeft: 'solid' }}>
          <Typography align="center">Visibility</Typography>
          <DistanceDisplay
            TypographyProps={{ align: 'center' }}
            size="md"
            value={visibility}
          />
        </Grid>
      </Grid>
    </Box>
  );
};
