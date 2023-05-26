import { AppBar } from 'src/components/AppBar';
import { useNavigate, useParams } from 'react-router-dom';
import { PercentDisplay } from 'src/components/PercentDisplay';
import { SpeedDisplay } from 'src/components/SpeedDisplay';

export const LocationViewPage = () => {
  const navigate = useNavigate();
  const backButtonCB = () => navigate(-1);
  const { city = 'Name could not be found' } = useParams();
  return (
    <>
      <AppBar
        title={city}
        displayBackButton={true}
        onClickBackButton={backButtonCB}
      />
      <SpeedDisplay value={10} size="md" />
    </>
  );
};
