import { AppBar } from 'src/components/AppBar';
import Grid from '@mui/material/Grid';
import TemperatureByLocationCard from 'src/components/TemperatureByLocationCard/TemperatureByLocationCard';
import { useUserLocationCard } from './useUserLocationCard';
import { useFirstLocationCard } from './useFirstLocationCard';
import { useSecondLocationCard } from './useSecondLocationCard';

export const DashboardPage = () => {
  return (
    <>
      <AppBar title="Dashboard" />
      <Grid container spacing={1}>
        <Grid item xs={12} md={4}>
          <TemperatureByLocationCard {...useUserLocationCard()} />
        </Grid>
        <Grid item xs={12} md={4}>
          <TemperatureByLocationCard {...useFirstLocationCard()} />
        </Grid>
        <Grid item xs={12} md={4}>
          <TemperatureByLocationCard {...useSecondLocationCard()} />
        </Grid>
      </Grid>
    </>
  );
};
